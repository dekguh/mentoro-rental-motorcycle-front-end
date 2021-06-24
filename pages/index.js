import Head from 'next/head';
import Image from 'next/image';
import HomeHead from '../components/organisms/HomeHead';
import TypeMotorList from '../components/organisms/TypeMotorList';
import DiscountSection from '../components/organisms/DiscountSection';
import dataMotor from '../components/utils/data/dataMotor';

export default function Home({ dataDiscount }) {
  return (
    <div className='home__wrapper'>
      <div className='home__search-wrap'>
        <HomeHead />
        <TypeMotorList classes='margin-top-16' />
      </div>

      <div className='home__content-wrap'>
        <DiscountSection dataDiscount={dataDiscount} />
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const filtered = dataMotor.filter(data => data.isDiscount == true);
  const sorted = filtered.sort((a, b) => b.id - a.id);
  const limit = sorted.slice(0, 2)
  return {
    props: {
      dataDiscount: limit
    }
  }
}