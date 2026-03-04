import axios from "axios";
import type {
  FeedbackRequest,
  FeedbackResponse,
  JoinCommunityRequest,
  JoinCommunityResponse,
} from "../lib/schema";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitFeedback = async (data: FeedbackRequest): Promise<FeedbackResponse> => {
  const response = await api.post<FeedbackResponse>("/home/feedback/", data);
  return response.data;
};

export const joinCommunity = async (data: JoinCommunityRequest): Promise<JoinCommunityResponse> => {
  const response = await api.post<JoinCommunityResponse>("/home/join/", data);
  return response.data;
};
