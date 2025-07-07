import { lycaAxios } from "./interceptors";

export const getEnagegementByIdApi = async (id) => {
    const response = await lycaAxios.get(`/DaleelClientEngagement/GetById?Id=${id}`);
    return response.data;
  };
  
  export const getNotificationsApi = async (payload) => {
    const response = await lycaAxios.get(`/Notification/SelectAllNotifications?Skip=${payload.skip}&ReceiverId=${payload.receiverId}&PageNumber=${payload.page}&PageSize=${payload.pageSize}&SortOrder=a`);
    return response.data;
  };
  

  export const getEnagegementAcrhiveValidationApi = async (payload) => {
    const response = await lycaAxios.get(`/DaleelClientEngagement/DaleelEngagementArchiveValidationDetails?daleelEngagementId=${payload.enId}&userId=${payload.id}&subserviceid=${payload.service}`);
    return response.data;
  };
  