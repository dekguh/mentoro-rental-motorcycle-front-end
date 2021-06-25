import { useState, useEffect } from 'react';
import TitleSection from '../../molecules/TitleSection';
import CardMotorVertical from '../../molecules/card/CardMotorVertical';

const ListMotorSection = ({classes, dataResult, showItem, ...rest}) => {
    const [dataMotor, setDataMotor] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const sorted = dataResult.sort((a, b) => b.id - a.id);
            setDataMotor(sorted);
        }
        fetchData();
    }, [dataResult]);

    return (
        <div className={classes} {...rest}>
            <TitleSection component='h4' text='List Motorcycle' classes='margin-bottom-16' />
            {dataMotor && dataMotor.map((data, i) => (
                <div key={i} className='margin-bottom-8'>
                    <CardMotorVertical
                        img={data.thumbnailURL}
                        url='#'
                        title={data.name}
                        pricePerHour={data.rent_price.priceList[0].pricePerHour}
                        isDiscount={data.isDiscount}
                    />
                </div>
            ))}
        </div>
    )
}

export default ListMotorSection
