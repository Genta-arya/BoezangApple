import AxiosConfig from "../AxiosConfig"


export const GetSearch = async(q) => {
    try {
        const response = await AxiosConfig.get(`/search/data?q=${q}`)
        return response.data
    } catch (error) {
        throw error
    }
}