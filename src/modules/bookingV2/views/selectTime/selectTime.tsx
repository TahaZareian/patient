import { splunkBookingInstance } from '@/common/services/splunk';
import classNames from '@/common/utils/classNames';
import axios from 'axios';
import moment from 'jalali-moment';
import { useEffect, useState } from 'react';
import { useAvailability } from '../../apis/availability';
import FreeTurn from '../../components/selectTime/freeTurn';
import OtherTimes from '../../components/selectTime/otherTimes';
import { BaseInfo } from '../../types/baseInfo';

interface SelectTimeProps extends BaseInfo {
  onSelect: ({ time }: { time?: string }) => void;
  loading?: boolean;
  onFirstFreeTimeError?: (errorText: string) => void;
  events?: Events;
  showOnlyFirstFreeTime?: boolean;
}

export type Events = {
  onFirstFreeTime: (data: any) => void;
  onOtherFreeTime: (data: any) => void;
};

enum TimeMode {
  'FIRST_FREE_TURN' = 'FIRST_FREE_TURN',
  'OTHER_FREE_TURN' = 'OTHER_FREE_TURN',
}

export const SelectTimeUi = (props: SelectTimeProps) => {
  const { onSelect, loading, onFirstFreeTimeError, events, showOnlyFirstFreeTime = false, ...baseInfo } = props;
  const getAvailability = useAvailability();

  const firstFreeTime = getAvailability.data?.data?.[0]?.slots?.[0]?.time;

  useEffect(() => {
    if (!loading) {
      fetchAvailability();
    }
  }, [loading]);

  const fetchAvailability = async () => {
    try {
      const { data } = await getAvailability.mutateAsync({
        membership_id: baseInfo.membershipId,
        service_id: baseInfo.serviceId,
      });
      onSelect({ time: data?.[0]?.slots?.[0]?.time });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        splunkBookingInstance().sendEvent({
          group: 'booking-error',
          type: 'booking-availability-api-error',
          event: {
            error_message: error.response?.data?.message,
            error_status: error.response?.status,
            membership_id: baseInfo.membershipId,
            service_id: baseInfo.serviceId,
          },
        });

        if (onFirstFreeTimeError)
          onFirstFreeTimeError(
            error.response?.status === 404 ? 'نوبت های اینترنتی این پزشک پر شده است.' : (error.response?.data?.message as string),
          );
      }
      return;
    }
  };

  const [timeMode, setTimeMode] = useState<TimeMode>(TimeMode.FIRST_FREE_TURN);

  const timeModeAction = {
    FIRST_FREE_TURN: () => {
      onSelect({ time: getAvailability.data?.data?.[0]?.slots?.[0]?.time });
      setTimeMode(TimeMode.FIRST_FREE_TURN);
    },
    OTHER_FREE_TURN: () => {
      onSelect({});
      setTimeMode(TimeMode.OTHER_FREE_TURN);
    },
  };

  return (
    <div
      className={classNames('flex flex-col space-y-3', {
        'animate-pulse opacity-75 pointer-events-none': loading || getAvailability.isLoading || getAvailability.isIdle,
      })}
    >
      <FreeTurn
        timeText={
          firstFreeTime
            ? moment.from(firstFreeTime, 'en').locale('fa').calendar(undefined, {
                sameDay: 'امروز (dddd) - ساعت: HH:mm',
                nextDay: 'فردا (dddd) - ساعت: HH:mm',
                sameElse: 'dddd jD jMMMM - ساعت: HH:mm',
              })
            : undefined
        }
        loading={loading || getAvailability.isLoading || getAvailability.isIdle}
        onSelect={timeModeAction[TimeMode.FIRST_FREE_TURN]}
        selected={timeMode === TimeMode.FIRST_FREE_TURN}
        title="زودترین زمان نوبت خالی"
      />
      {!showOnlyFirstFreeTime && (
        <OtherTimes
          slots={getAvailability.data?.data ?? []}
          onSelect={timeModeAction[TimeMode.OTHER_FREE_TURN]}
          selected={timeMode === TimeMode.OTHER_FREE_TURN}
          onSelectTime={onSelect}
        />
      )}
    </div>
  );
};

export default SelectTimeUi;
