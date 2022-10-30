import { Redirect, useLocation } from "react-router-dom";

export const PageMiddle = () => {
  const now = new Date();
  const nowSecond = now.getSeconds() % 10;

  const { search } = useLocation();

  return <Redirect to={`/page2/${nowSecond}${search}`} />;
};
