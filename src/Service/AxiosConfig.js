import axios from "axios";

const BaseUrl = "https://dummyapi.online/api";

const AxiosConfig = axios.create({
  baseURL: BaseUrl,
});

export default AxiosConfig;
