import axios from "axios";
import type { JoinCommunityRequest, JoinCommunityResponse } from "./schema";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const joinCommunity = async (data: JoinCommunityRequest): Promise<JoinCommunityResponse> => {
  const response = await api.post<JoinCommunityResponse>("/home/join/", data);
  return response.data;
};
