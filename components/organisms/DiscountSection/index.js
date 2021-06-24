import { useState, useEffect } from 'react'
import TitleSection from '../../molecules/TitleSection'
import CardMotorHorizontal from '../../molecules/card/CardMotorHorizontal'

const DiscountSection = ({classes, dataDiscount, ...rest}) => {
    return (
        <div className={classes} {...rest}>
            <TitleSection component='h4' text='Discount' classes='margin-bottom-16' />
            <ul className='list__discount'>
            {dataDiscount && dataDiscount.map((data, i) => (
                <li key={i} className='margin-bottom-8'>
                    <CardMotorHorizontal
                        img={data.thumbnailURL}
                        url='#'
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

export default DiscountSection
