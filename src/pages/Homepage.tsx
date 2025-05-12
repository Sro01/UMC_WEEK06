import { useAuth } from "../context/AuthContext";
import useGetLpList from "../hooks/queries/useGetLpList";
import { useState } from "react";
import { PAGINATION_ORDER } from "../enums/common";
import { FaHeart } from "react-icons/fa";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuth();

  if (accessToken) {
    console.log("accessToken", accessToken);
  }

  const [search, setSearch] = useState("");
  const [order, setOrder] = useState<PAGINATION_ORDER>(PAGINATION_ORDER.desc);
  const { data, isPending, isError } = useGetLpList({ search, order });
  console.log(data);

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }

  // 정렬 순서 변경 핸들러
  const handleOrderChange = (newOrder: PAGINATION_ORDER) => {
    setOrder(newOrder);
  };

  const handleCardClick = (lpId: number) => {
    navigate(`/lp/${lpId}`); // /lp/:LPid 경로로 이동
  };

  const formatDate = (dateString: Date | string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="page">
      <Menu
        search={search}
        setSearch={setSearch}
        order={order}
        handleOrderChange={handleOrderChange}
      />

      <div className="grid-container">
        {data?.map((lp) => (
          <div
            className="card"
            key={lp.id}
            onClick={() => handleCardClick(lp.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={lp.thumbnail} alt={lp.title} className="thumbnail" />
            <div className="card-overlay">
              <div className="card-info">
                <h3 className="card-title">{lp.title}</h3>
                <p className="card-date">{formatDate(lp.createdAt)}</p>
                <p className="card-likes">
                  <FaHeart style={{ marginRight: "4px", color: "white" }} />
                  {lp.likes?.length || 0}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
