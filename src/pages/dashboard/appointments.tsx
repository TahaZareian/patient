import { LayoutWithHeaderAndFooter } from '@/common/components/layouts/layoutWithHeaderAndFooter';
import { withCSR } from '@/common/hoc/withCsr';
import { Wrapper } from '@/modules/dashboard/components/wrapper';
import { SideBar } from '@/modules/dashboard/layouts/sidebar';
import { GetServerSidePropsContext } from 'next/types';
import { ReactElement } from 'react';
import Appointments from '../patient/appointments';

export const AppointmentsPage = () => {
  return (
    <div className="flex md:h-[calc(100vh-80px)] items-center justify-center overflow-y-auto flex-grow w-full relative">
      <Wrapper>
        <Appointments />
      </Wrapper>
    </div>
  );
};

AppointmentsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutWithHeaderAndFooter {...page.props.config} showFooter={false}>
      <SideBar className="hidden md:flex">{page}</SideBar>
    </LayoutWithHeaderAndFooter>
  );
};

export const getServerSideProps = withCSR(async (context: GetServerSidePropsContext) => {
  return {
    props: {
      query: context.query,
    },
  };
});

export default AppointmentsPage;
