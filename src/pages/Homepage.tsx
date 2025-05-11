import { useAuth } from "../context/AuthContext";
import useGetLpList from "../hooks/queries/useGetLpList";
import { useState } from "react";

const Homepage = () => {
  const { accessToken } = useAuth();

  if (accessToken) {
    console.log("accessToken", accessToken);
  }

  const [search, setSearh] = useState("");
  const { data, isPending, isError } = useGetLpList({ search });
  console.log(data);

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }

  return (
    <div>
      <input value={search} onChange={(e) => setSearh(e.target.value)} />
      {data?.map((lp) => (
        <h1 key={lp.id}>{lp.title}</h1>
      ))}
    </div>
  );
};

export default Homepage;
