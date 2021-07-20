import Head from 'next/head'
import NotifPageSection from '../components/organisms/NotifPageSection'

const AboutPage = () => {
    return (
    <>
        <Head>
            <title>Mentoro - about us</title>
        </Head>
        <div>
            <NotifPageSection
                image='/images/motorcycle-tour.png'
                title='About us'
                description='kami merupakan perusahaan rental motor yang berdomsili di pulau bali, kami memiliki beberapa cabang yang tersebar diseluruh bali. dengan aplikasi anda akan dipermudahkan dalam menyewa kendaraan dengan berbagai pilihan pembayaran.'
            />
        </div>
    </>
    )
}

export default AboutPage
