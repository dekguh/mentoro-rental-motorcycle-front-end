import DetailHead from '../../components/organisms/detail/DetailHead';
import DetailContent from '../../components/organisms/detail/DetailContent';

const DetailPage = () => {
    const dataBenefit = [
        {
            id: 1,
            name: "helm",
            value: "yes"
        },
        {
            id: 2,
            name: "fuel",
            value: "no"
        },
        {
            id: 3,
            name: "coat",
            value: "yes"
        },
        {
            id: 4,
            name: "insurance",
            value: "no"
        }
    ];

    const dataPriceList = [
        {
            id: 2,
            price: null,
            totalHour: 24,
            discount: 0,
            pricePerHour: 833.333333333
        },{
            id: 2,
            price: null,
            totalHour: 48,
            discount: 20,
            pricePerHour: 833.333333333
        },{
            id: 2,
            price: null,
            totalHour: 168,
            discount: 20,
            pricePerHour: 833.333333333
        }
    ];

    const dataDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n#### Info\n- 125cc\n- 2021\n- for 2 people'

    return (
        <div className='detail__wrapper margin-bottom-40'>
            <DetailHead />
            <div className='detail__content-wrap'>
                <DetailContent
                    image='https://hondamandala.com/wp-content/uploads/2020/05/Beat-Avatar.jpg'
                    title='Honda Beat 2021'
                    description={dataDescription}
                    isDiscount={true}
                    pricePerHour={833.333333333}
                    benefit={dataBenefit}
                    priceList={dataPriceList}
                />
            </div>
        </div>
    )
}

export default DetailPage
