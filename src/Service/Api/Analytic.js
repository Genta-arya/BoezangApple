import AxiosConfig from "../AxiosConfig";

export const TrackingVisit = async (ip, page, device) => {
  try {
    const response = await AxiosConfig.post("/analytics/log", {
      ip,
      page,
      device,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
