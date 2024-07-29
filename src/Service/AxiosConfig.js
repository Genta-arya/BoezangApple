import axios from "axios";



const AxiosConfig = axios.create({
  baseURL: process.env.NODE_ENV === "development"  ? process.env.NEXT_PUBLIC_LOCAL : process.env.NEXT_PUBLIC_PRODUCTION,
});

export default AxiosConfig;
