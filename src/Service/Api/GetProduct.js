
import AxiosConfig from "../AxiosConfig"



export const GetProduct = async() => {
    try {
        const response = await AxiosConfig.get('/products')
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetSingleProduct = async (id) => {
    try {
        const response = await AxiosConfig.get(`/products/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}