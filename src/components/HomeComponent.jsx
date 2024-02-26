import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Quiz App</h1>
      <button onClick={() => navigate("/quiz")}>Play</button>
    </div>
  );
};

export default HomeComponent;
