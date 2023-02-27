import Button from '@/common/components/atom/button/button';
import Card from '@/common/components/atom/card/card';
import Modal from '@/common/components/atom/modal/modal';
import Text from '@/common/components/atom/text/text';
import useModal from '@/common/hooks/useModal';
import useWebView from '@/common/hooks/useWebView';
import { sendGaEvent } from '@/common/services/sendGaEvent';
import { splunkInstance } from '@/common/services/splunk';
import { CENTERS } from '@/common/types/centers';
import SelectCenter from '@/modules/booking/views/selectCenter/selectCenter';
import SelectService from '@/modules/booking/views/selectService/selectService';
import { getCookie } from 'cookies-next';
import { memo, useCallback, useState } from 'react';
import { ServiceCard } from './card';

interface PresenceProps {
  centers: any[];
  waitingTime?: string;
  onBook: ({ centerId, serviceId }: { centerId: string; serviceId: string }) => void;
  displayName: string;
}

export const Presence = memo((props: PresenceProps) => {
  const { centers, waitingTime, onBook, displayName } = props;
  const isWebView = useWebView();
  const [selectedCenter, setSelectedCenter] = useState<any>({});
  const {
    handleOpen: handleOpenSelectCenterModal,
    handleClose: handleCloseSelectCenterModal,
    modalProps: selectCenterModalProps,
  } = useModal();

  const {
    handleOpen: handleOpenSelectServiceModal,
    handleClose: handleCloseSelectServiceModal,
    modalProps: selectServiceModalProps,
  } = useModal();
  const { handleOpen: handleOpenSelectExternalBookingModal, modalProps: externalBookingModalProps } = useModal();
  const { handleOpen: handleOpenSelectDownloadAppModal, modalProps: downloadAppModalProps } = useModal();

  const reformatCentersProperty = (centers: any[]) => {
    return (
      centers
        ?.map((center: any) => {
          return {
            ...center,
            name: center.id === CENTERS.CONSULT ? 'ویزیت آنلاین' : center.center_type === 1 ? `مطب ${displayName}` : center.name,
            address: center.id === CENTERS.CONSULT ? '' : center.address,
            freeturn: center.freeturn_text,
            type: center.id === '5532' ? 'consult' : center.center_type === 1 ? 'office' : 'hospital',
            phoneNumbers: center.display_number_array,
            isDisable: !center.is_active,
            isAvailable: center.freeturns_info?.[0] && center.freeturns_info?.[0]?.available_time < Math.floor(new Date().getTime() / 1000),
            availableTime: center.freeturns_info?.[0] && center.freeturns_info?.[0]?.availalbe_time_text,
          };
        })
        .filter(center => (center.id === '5532' ? !center.isDisable : true)) ?? []
    );
  };

  const handleOnBook = useCallback(() => {
    sendGaEvent({ action: 'P24DrsPage', category: 'bookButtonStartPresence', label: 'bookButtonStartPresence' });
    sendGaEvent({ action: 'newprofile', category: 'button-book', label: displayName });

    splunkInstance().sendEvent({
      group: 'doctor profile',
      type: 'doctor profile press book button',
      event: {
        terminal_id: getCookie('terminal_id'),
        user_agent: window.navigator.userAgent,
        doctor_name: displayName,
        page_url: window.location.pathname,
        referrer: document.referrer,
        centers_name: centers.map(center => center.name),
        centers_address: centers.map(center => center.address),
        centers_phone: centers.map(center => center.tell),
        city: centers.map(center => center.city),
        centers_statuses: centers.map(center => center.status),
        centers_types: centers.map(center => center.type),
      },
    });

    if (centers.length === 1) {
      const center = centers[0];
      handleOnBookByCenter(center);
      return;
    }
    handleOpenSelectCenterModal();
  }, []);

  const handleOnBookByCenter = useCallback((center: any) => {
    setSelectedCenter(center);
    handleCloseSelectCenterModal();

    if (center.is_center === 'mashhad') {
      handleOpenSelectExternalBookingModal();
      return;
    }

    if (center.is_only_in_app.status && !isWebView) {
      handleOpenSelectDownloadAppModal();
      return;
    }

    if (center?.services?.length === 1) return onBook({ centerId: center.id, serviceId: center.services[0].id });

    splunkInstance().sendEvent({
      group: 'doctor profile',
      type: 'doctor profile select service button',
      event: {
        terminal_id: getCookie('terminal_id'),
        user_agent: window.navigator.userAgent,
        doctor_name: displayName,
        page_url: window.location.pathname,
        referrer: document.referrer,
        selected_center_name: center?.name,
        freeturn_text: center?.freeturn_text,
      },
    });

    handleOpenSelectServiceModal();
  }, []);

  const handleOnBookByService = useCallback(
    (service: any) => {
      splunkInstance().sendEvent({
        group: 'doctor profile',
        type: 'doctor profile select service button',
        event: {
          terminal_id: getCookie('terminal_id'),
          user_agent: window.navigator.userAgent,
          doctor_name: displayName,
          page_url: window.location.pathname,
          referrer: document.referrer,
          service_id: service?.id,
          service_alias_title: service?.alias_title,
        },
      });

      handleCloseSelectServiceModal();
      return onBook({ centerId: selectedCenter.id, serviceId: service.id });
    },
    [selectedCenter],
  );

  if (
    centers.length === 1 &&
    centers[0].freeturns_info?.[0] &&
    centers[0].freeturns_info?.[0]?.available_time > Math.floor(new Date().getTime() / 1000)
  ) {
    return (
      <Card className="space-y-3 !rounded-none md:!rounded-lg">
        <Text fontWeight="bold">زمان نوبت دهی پزشک به پایان رسیده است!</Text>
        <div className="flex flex-col p-4 space-y-1 border border-dashed rounded-lg border-slate-300">
          <Text fontSize="sm">زمان باز شدن نوبت دهی اینترنتی:</Text>
          <Text fontWeight="bold">{centers[0].freeturns_info?.[0] && centers[0].freeturns_info?.[0]?.availalbe_time_text}</Text>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <ServiceCard
        header={{
          icon: (
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.654 3.98035C6.76757 3.98035 7.6703 3.12061 7.6703 2.06006C7.6703 0.999514 6.76757 0.139771 5.654 0.139771C4.54043 0.139771 3.6377 0.999514 3.6377 2.06006C3.6377 3.12061 4.54043 3.98035 5.654 3.98035Z"
                fill="currentColor"
              />
              <path
                d="M11.2023 8.29562C9.54185 7.38023 8.17947 6.14375 7.03265 4.68913C6.31202 3.72398 4.40678 3.77436 3.6326 4.65877C2.45489 5.75005 1.45561 6.87481 0.663016 8.00019C0.339014 8.46118 0.467827 9.08489 0.951529 9.39347C1.13193 9.50863 1.33534 9.56371 1.53743 9.56371C1.8772 9.56371 2.21106 9.40755 2.41414 9.11838C2.76213 8.62485 3.15678 8.12976 3.59382 7.63685C3.57706 8.67993 3.63194 10.562 3.65954 11.408C3.66874 11.6896 3.60138 11.965 3.46402 12.2151C2.37701 14.192 1.68168 16.0625 0.975846 18.3509C0.803001 18.9095 1.13916 19.4956 1.72539 19.66C1.85814 19.6972 1.99221 19.7097 2.12168 19.7003C2.56792 19.6678 2.96685 19.3783 3.10026 18.9458C3.75155 16.8358 4.38083 15.1274 5.36236 13.3185C5.41231 13.3204 5.46226 13.3204 5.51286 13.3182C6.1395 15.0989 6.76648 16.8806 7.39411 18.6613C7.84988 19.9591 9.96444 19.285 9.50735 17.9869C8.82156 16.04 8.13675 14.094 7.45326 12.1475C7.4135 12.0357 7.31722 11.5982 7.30374 11.4555C7.1907 10.2563 7.14963 9.0608 7.16179 7.86375C8.12394 8.74158 9.19091 9.503 10.3762 10.1571C11.5582 10.8105 12.3685 8.93937 11.2023 8.29562Z"
                fill="currentColor"
              />
            </svg>
          ),
          title: 'نوبت اینترنتی و مراجعه حضوری',
        }}
        body={{
          description: ['امکان دریافت زودترین نوبت', waitingTime && `میانگین زمان انتظار تا ویزیت: <strong>${waitingTime}</strong>`].filter(
            Boolean,
          ),
        }}
        footer={{
          actions: [
            {
              text: 'دریافت نوبت',
              onClick: handleOnBook,
            },
          ],
        }}
      />
      <Modal title="انتخاب مرکز درمانی" {...selectCenterModalProps} bodyClassName="pl-3">
        <div className="pl-2 overflow-auto max-h-96">
          <SelectCenter
            centers={reformatCentersProperty(centers)}
            onSelect={center => handleOnBookByCenter(centers.find(c => c.id === center.id))}
          />
        </div>
      </Modal>
      <Modal title="انتخاب خدمت" {...selectServiceModalProps}>
        <div>
          <SelectService
            services={selectedCenter.services?.map((service: any) => ({
              id: service.id,
              name: service.alias_title,
              isDisable: !service.hours_of_work || !service.can_booking || service.can_booking === 0,
            }))}
            onSelect={handleOnBookByService}
          />
        </div>
      </Modal>
      <Modal title="نوبت دهی اینترنتی و حضوری (غیرفعال)" {...externalBookingModalProps} bodyClassName="space-y-3">
        <Text fontWeight="medium" className="leading-7">
          در حال حاضر نوبت‌دهی اینترنتی این پزشک غیرفعال می‌باشد! شما می‌توانید با کلیک بر روی دکمه زیر، از طریق سایت دانشگاه علوم پزشکی
          مشهد نوبت خود را دریافت نمایید.
        </Text>
        <Button block onClick={() => location.assign('http://nobat.mums.ac.ir/AppointmentSite/')}>
          ورود به سایت دانشگاه علوم پزشکی مشهد
        </Button>
      </Modal>
      <Modal title="دانلود اپلیکیشن" {...downloadAppModalProps} bodyClassName="space-y-3">
        <Text fontWeight="medium" className="leading-7">
          {selectedCenter?.is_only_in_app?.message}
        </Text>
        <Button block onClick={() => location.assign('/app')}>
          دانلود اپلیکیشن
        </Button>
      </Modal>
    </div>
  );
});

export default Presence;
