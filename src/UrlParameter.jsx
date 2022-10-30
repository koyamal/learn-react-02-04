import { useParams, useLocation, useHistory } from "react-router-dom";
import { page2Data } from "./data/Page2Data";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const history = useHistory();

  const onClickReload = (search) => {
    history.push(`/page2/middle${search}`);
  };
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
      <p>Query Parameter is {query.get("name") || "null"}</p>
      <button
        onClick={() => {
          onClickReload(search);
        }}
      >
        Reload!!
      </button>
    </div>
  );
};
