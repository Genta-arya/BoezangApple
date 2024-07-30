import AxiosConfig from "../AxiosConfig"


export const GetPopup = async () => {
    try {
        const response = await AxiosConfig.get('/popup/data')
        return response.data
    } catch (error) {
        throw error
    }
}