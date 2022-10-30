import { Link } from "react-router-dom";

export const Page2 = () => {
  const now = new Date();
  const nowSecond = now.getSeconds();
  console.log(nowSecond);
  return (
    <div>
      <h1>Page 2!</h1>
      <Link to={`/page2/${nowSecond}`}>URL Parameter</Link>
    </div>
  );
};
