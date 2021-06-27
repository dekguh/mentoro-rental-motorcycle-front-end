import { useState, useEffect } from 'react'
import TitleSection from '../../molecules/TitleSection'
import CardMotorHorizontal from '../../molecules/card/CardMotorHorizontal'

const DiscountSection = ({classes, dataResult, showItem, ...rest}) => {
    const [dataDiscount, setDataDiscount] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const filtered = dataResult.filter(data => data.isDiscount == true);
            const sorted = filtered.sort((a, b) => b.id - a.id);
            const limitShow = sorted.slice(0, showItem)
            setDataDiscount(limitShow);
        }
        fetchData();
    }, [dataResult]);

    return (
        <div className={classes} {...rest}>
            <TitleSection component='h4' text='Discount' classes='margin-bottom-16' />
            <ul className='list__discount'>
            {dataDiscount && dataDiscount.map((data, i) => (
                <li key={i} className='margin-bottom-8'>
                    <CardMotorHorizontal
                        img={data.thumbnailURL}
                        url={`/detail/${data.id}-${data.name.toLowerCase().replace(/ /g, '-')}`}
                        title={data.name}
                        pricePerHour={data.rent_price.priceList[0].pricePerHour}
                        isDiscount={data.isDiscount}
                    />
                </li>
            ))}
            </ul>
        </div>
    )
}

DiscountSection.defaultProps = {
    showItem: 2
}

export default DiscountSection
