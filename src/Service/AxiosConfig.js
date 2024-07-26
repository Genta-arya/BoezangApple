import axios from "axios";

const BaseUrl = "https://api.boezangapple.com/api/v1";

const AxiosConfig = axios.create({
  baseURL: BaseUrl,
});

export default AxiosConfig;
