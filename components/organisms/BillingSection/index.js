import { useEffect } from 'react'
import { connect } from 'react-redux'
import DetailHead from '../detail/DetailHead'

const BillingSection = () => {
    return (
        <div>
            <DetailHead />
            <div className='detail__content-wrap'>
                billing
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingSection)
