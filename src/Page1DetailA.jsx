import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page 1!</h1>
      <h2>DetailA</h2>
    </div>
  );
};
