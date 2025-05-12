import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/key";
import { getLpDetail } from "../../apis/lp";

const useGetLpDetail = (lpId: number) => {
  console.log("lpId", lpId);
  return useQuery({
    queryKey: [QUERY_KEY.lps, lpId],
    queryFn: () => getLpDetail(lpId),
    enabled: !!lpId,
  });
};

export default useGetLpDetail;
