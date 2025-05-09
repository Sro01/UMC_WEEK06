import { useEffect, useState } from "react";
import { getMyInfo } from "../apis/auth.ts";
import { ResponseMyInfoDto } from "../types/auth.ts";
import { useAuth } from "../context/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  //   const [data, setData] = useState([]);
  const [data, setData] = useState<ResponseMyInfoDto["data"] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response: ResponseMyInfoDto = await getMyInfo();
      console.log(response);

      setData(response.data);
    };

    getData();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  console.log(data);
  // return <div>{data?.email}</div>;
  return (
    <div>
      <h1>{data?.name}님 환영합니다.</h1>
      <img src={data?.avatar as string} alt={"구글 로고"} />
      <h1>{data?.email}</h1>

      <button
        className="cursor-pointer bg-blue-300 rounded-sm p-5 hover:scale-90"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MyPage; // Show usages
