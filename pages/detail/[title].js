import DetailHead from '../../components/organisms/detail/DetailHead';
import DetailContent from '../../components/organisms/detail/DetailContent';
import Api from '../../components/utils/Api';

const DetailTitlePage = ({ dataResult }) => {
    return (
        <div className='detail__wrapper margin-bottom-40'>
            <DetailHead />
            <div className='detail__content-wrap'>
                <DetailContent
                    image={dataResult.thumbnailURL}
                    title={dataResult.name}
                    description={dataResult.description}
                    isDiscount={dataResult.isDiscount}
                    pricePerHour={dataResult.rent_price.priceList[0].pricePerHour}
                    benefit={dataResult.benefit.benefitRent}
                    priceList={dataResult.rent_price.priceList}
                />
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    try {
        const getId = ctx.params.title.substring(0, 1);
        const response = await Api.get(`/motors/${getId}`);
        const result = response.data;

        return {
            props: {
                dataResult: result,
            }
        }
    }catch(err) {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            },
            props: {
                dataResult: {},
            }
        }
    }
}

export default DetailTitlePage