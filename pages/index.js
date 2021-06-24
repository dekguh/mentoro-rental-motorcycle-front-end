import Head from 'next/head';
import Image from 'next/image';
import HomeHead from '../components/organisms/HomeHead';

export default function Home() {
  return (
    <div className='home__wrapper'>
      <div className='home__search-wrap'>
        <HomeHead />
      </div>

      <div className='home__content-wrap'>
        home content
      </div>
    </div>
  )
}
