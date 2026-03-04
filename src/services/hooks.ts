import { useMutation } from "@tanstack/react-query";
import { joinCommunity, submitFeedback } from "./api";

export const useSubmitFeedback = () => {
  return useMutation({
    mutationFn: submitFeedback,
  });
};

export const useJoinCommunity = () => {
  return useMutation({
    mutationFn: joinCommunity,
  });
};
