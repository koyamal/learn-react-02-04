import { Link } from "react-router-dom";

export const Page2 = () => {
  const now = new Date();
  const nowSecond = now.getSeconds() % 10;
  return (
    <div>
      <h1>Page 2!</h1>
      <Link to={`/page2/${nowSecond}`}>URL Parameter</Link>
      <br />
      <Link to={`/page2/${nowSecond}?name=hogehoge`}>Query Parameter</Link>
    </div>
  );
};
