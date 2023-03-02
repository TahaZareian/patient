import { useGetProfileData } from '@/common/apis/services/profile/getFullProfile';
import Loading from '@/common/components/atom/loading/loading';
import Skeleton from '@/common/components/atom/skeleton/skeleton';
import Text from '@/common/components/atom/text/text';
import Transition from '@/common/components/atom/transition/transition';
import { LayoutWithHeaderAndFooter } from '@/common/components/layouts/layoutWithHeaderAndFooter';
import Seo from '@/common/components/layouts/seo';
import { withCSR } from '@/common/hoc/withCsr';
import useServerQuery from '@/common/hooks/useServerQuery';
import getDisplayDoctorExpertise from '@/common/utils/getDisplayDoctorExpertise';
import BookingSteps from '@/modules/booking/views';
import DoctorInfo from '@/modules/myTurn/components/doctorInfo';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { GetServerSidePropsContext } from 'next/types';
import { ReactElement, useCallback, useEffect, useMemo } from 'react';
const { publicRuntimeConfig } = getConfig();

const Booking = () => {
  const router = useRouter();
  const university = useServerQuery(state => state.queries.university);

  const { data, isLoading, isIdle, isSuccess } = useGetProfileData(
    {
      slug: router.query?.slug?.toString() ?? '/',
    },
    {
      enabled: !!router.isReady,
    },
  );

  const profileData = data?.data;

  const queryHandler = useCallback((queries: any) => {
    const payloads = Object.keys(queries);
    if (payloads.includes('centerId') && payloads.includes('serviceId') && payloads.includes('timeId')) {
      return {
        step: 'SELECT_USER',
        payload: queries as any,
      };
    }
    if (payloads.includes('centerId') && payloads.includes('serviceId') && payloads.includes('bookRequest'))
      return {
        step: 'SELECT_USER',
        payload: queries as any,
      };
    if (payloads.includes('centerId') && payloads.includes('serviceId')) {
      return {
        step: 'SELECT_TIME',
        payload: queries as any,
      };
    }
    if (payloads.includes('centerId')) {
      return {
        step: 'SELECT_SERVICES',
        payload: queries as any,
      };
    }
    return {
      step: 'SELECT_CENTER',
      payload: queries as any,
    };
  }, []);

  useEffect(() => {
    // Prefetch the factor page
    router.prefetch('/factor/[centerId]/[bookId]');
    // Prefetch the receipt page
    router.prefetch('/receipt/[centerId]/[bookId]');
  }, []);

  const centerName = useMemo(() => {
    const center = profileData?.centers?.find((center: any) => center.id === router.query.centerId);
    return center?.center_type === 1 ? `مطب ${profileData.display_name}` : center?.name;
  }, [router.query.centerId, profileData]);

  return (
    <>
      <Seo title={`دریافت نوبت ${profileData?.display_name ? `از ${profileData?.display_name}` : ''}`} />
      {!university && (
        <Script id="clarity-new-version" strategy="lazyOnload" type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "g1qw1smpmx");`}
        </Script>
      )}
      <div className="flex flex-col-reverse items-start max-w-screen-lg mx-auto md:flex-row space-s-0 md:space-s-5 md:py-10">
        <div className="flex flex-col w-full bg-white md:basis-4/6 md:rounded-lg shadow-card mb-28">
          {(isLoading || isIdle) && (
            <div className="self-center p-10">
              <Loading className="self-center" />
            </div>
          )}
          <Transition match={!!queryHandler(router.query) && !isLoading && !isIdle} animation="bottom">
            <BookingSteps defaultStep={queryHandler(router.query) as any} slug={router.query?.slug?.toString() ?? '/'} />
          </Transition>
        </div>
        <div className="w-full p-3 mb-2 space-y-3 bg-white md:rounded-lg shadow-card md:mb-0 md:basis-2/6 ">
          <DoctorInfo
            className="p-4 rounded-lg bg-slate-50"
            isLoading={isLoading || isIdle}
            avatar={publicRuntimeConfig.CLINIC_BASE_URL + profileData?.image}
            fullName={profileData?.display_name}
            expertise={getDisplayDoctorExpertise({
              aliasTitle: profileData?.expertises?.[0]?.alias_title,
              degree: profileData?.expertises?.[0]?.degree?.name,
              expertise: profileData?.expertises?.[0]?.expertise?.name,
            })}
          />

          {router.query.centerId && (
            <div className="flex flex-col px-2 py-1 space-y-1 border-r-2 border-slate-200">
              <Text fontSize="xs" className="opacity-70">
                مرکز
              </Text>
              {(isLoading || isIdle) && <Skeleton w="9rem" h="0.8rem" className="!mt-2 !mb-1" rounded="full" />}
              {isSuccess && (
                <Text fontSize="sm" fontWeight="medium">
                  {centerName}
                </Text>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Booking.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithHeaderAndFooter shouldShowPromoteApp={false} showBottomNavigation={false} {...page.props.config} showFooter={false}>
      {page}
    </LayoutWithHeaderAndFooter>
  );
};

export const getServerSideProps = withCSR(async (context: GetServerSidePropsContext) => {
  const { id, center_id } = context.query;
  if (id && center_id) {
    return {
      redirect: {
        statusCode: 302,
        destination: `/receipt/${center_id}/${id}`,
      },
    };
  }

  return {
    props: {
      query: context.query,
    },
  };
});

export default Booking;
