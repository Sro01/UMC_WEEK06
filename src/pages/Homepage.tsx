import { useAuth } from "../context/AuthContext";

const Homepage = () => {
  const { accessToken } = useAuth();

  if (accessToken) {
    console.log("accessToken", accessToken);
  }
  return <div>Homepage</div>;
};

export default Homepage;
