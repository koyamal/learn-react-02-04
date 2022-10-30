import { useParams } from "react-router-dom";
import { page2Data } from "./data/Page2Data";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Url Parameter Page</h1>
      {page2Data.map((data) => {
        if (data.id === id) {
          return (
            <img
              style={{ width: "400px" }}
              key={data.url}
              src={data.url}
              alt={data.id}
            />
          );
        }
        return null;
      })}
      <p>Parameter is {id}</p>
    </div>
  );
};
