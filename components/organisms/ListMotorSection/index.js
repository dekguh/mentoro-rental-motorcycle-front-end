import { useState, useEffect } from 'react';
import TitleSection from '../../molecules/TitleSection';
import CardMotorVertical from '../../molecules/card/CardMotorVertical';
import { connect } from 'react-redux';

const ListMotorSection = ({searchText, searchTypeMotor, classes, dataResult, showItem}) => {
    const [dataMotor, setDataMotor] = useState([]);

    useEffect(() => {
        const sorted = dataResult.sort((a, b) => b.id - a.id);
        const filterSearch = sorted.filter(
            data => data.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            && data.typeMotor.toLowerCase().startsWith(searchTypeMotor.toLowerCase()) == true
        )
        setDataMotor(filterSearch);
    }, [dataResult, searchText, searchTypeMotor]);

    return (
        <div className={classes}>
            <TitleSection component='h4' text='List Motorcycle' classes='margin-bottom-16' />
            {dataMotor && dataMotor.map((data, i) => (
                <div key={i} className='margin-bottom-8'>
                    <CardMotorVertical
                        img={data.thumbnailURL}
                        url={`/detail/${data.id}-${data.name.toLowerCase().replace(/ /g, '-')}`}
                        title={data.name}
                        pricePerHour={data.rent_price.priceList[0].pricePerHour}
                        isDiscount={data.isDiscount}
                    />
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        searchText: state.search.text,
        searchTypeMotor: state.search.typeMotor
    }
}

export default connect(mapStateToProps, null)(ListMotorSection)
