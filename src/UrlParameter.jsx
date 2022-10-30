import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Url Parameter Page</h1>
      <p>Parameter is {id}</p>
    </div>
  );
};
