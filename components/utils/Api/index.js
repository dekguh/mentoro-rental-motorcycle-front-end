import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL
});

export const apiCheckMotorId = async (id) => {
    try {
        const response = await Api.get(`motors/${id}`)
        const result = response.data
        if(result) return {
            valid: true,
            message: 'motorbike with that id found',
            data: result
        }
    } catch(err) {
        return {
            valid: false,
            message: 'motorbike with that id not found',
            data: {}
        }
    }
}

export const apiCheckCurrentDate = async (current, motor) => {
    try {
        const response = await Api.get(`book-dates?currentDate=${current}&motor=${motor}`)
        const result = response.data
        if(result.length > 0) return {
            valid: true,
            message: `on date ${new Date(current * 1000).toDateString()} already booked, please see calendar again`
        }
        return {
            valid: false,
            message: 'you can book this date'
        }
    } catch(err) {
        return {
            valid: false,
            message: 'you can book this date'
        }
    }
}

export default Api