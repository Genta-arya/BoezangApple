
import AxiosConfig from "../AxiosConfig"



export const GetProduct = async() => {
    try {
        const response = await AxiosConfig.get('/product/data')
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetSingleProduct = async (id) => {
    try {
        const response = await AxiosConfig.get(`/product/data/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetProductByCategory = async (category) => {
    try {
        const response = await AxiosConfig.get(`/product/data/category/${category}`)
        return response.data
    } catch (error) {
        throw error
    }
}