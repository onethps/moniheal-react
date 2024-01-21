import { instance } from "../../../../../setup/axios";

export const MyFamilyApi = {
  getWards: ({ offset, limit }: { offset: number; limit: number }) => {
    return instance.get("/api/v1/user/profile/wards", {
      params: {
        offset,
        limit,
      },
    });
  },
  getRequests: ({ offset, limit }: { offset: number; limit: number }) => {
    return instance.get("/api/v1/user/profile/warden/requests", {
      params: {
        offset,
        limit,
      },
    });
  },
  acceptRequest: () => {
    return instance.post("/api/v1/profile/warden/accept-request", {});
  },
  declineRequest: () => {
    return instance.post("/api/chargeRequest", {});
  },
};
