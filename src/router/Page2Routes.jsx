import { Page2 } from "../Page2";
import { PageMiddle } from "../PageMiddle";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/middle",
    exact: false,
    children: <PageMiddle />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
