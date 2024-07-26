import axios from "axios";

const BaseUrl = "https://boezangapi.hkks.shop/api/v1";

const AxiosConfig = axios.create({
  baseURL: BaseUrl,
});

export default AxiosConfig;
