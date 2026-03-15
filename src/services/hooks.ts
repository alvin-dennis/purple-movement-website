import { useMutation } from "@tanstack/react-query";
import { joinCommunity } from "./api";

export const useJoinCommunity = () => {
  return useMutation({
    mutationFn: joinCommunity,
  });
};
