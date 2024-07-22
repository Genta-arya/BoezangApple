import AxiosConfig from "../AxiosConfig"

export const GetQuotes = async() => {
    try {
        const response = await AxiosConfig.get('/quotest/data')
        return response.data
    } catch (error) {
        throw error
    }
}