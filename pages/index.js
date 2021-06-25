import Head from 'next/head';
import HomeHead from '../components/organisms/HomeHead';
import TypeMotorList from '../components/organisms/TypeMotorList';
import DiscountSection from '../components/organisms/DiscountSection';
import ListMotorSection from '../components/organisms/ListMotorSection';
import Api from '../components/utils/Api';

export default function Home({ dataResult }) {
  return (
    <div className='home__wrapper'>
      <div className='home__search-wrap'>
        <HomeHead />
        <TypeMotorList classes='margin-top-16' />
      </div>

      <div className='home__content-wrap'>
        <DiscountSection dataResult={dataResult} showItem={2} classes='margin-bottom-20' />
        <ListMotorSection dataResult={dataResult} classes='margin-bottom-40' />
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const response = await Api.get('motors');
  const result = response.data;
  return {
    props: {
      dataResult: result,
    }
  }
}