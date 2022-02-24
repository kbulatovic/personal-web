import { ReactElement } from "react-markdown/lib/react-markdown";

export default function Layout({ children }: { children: ReactElement }) {
  return <div>{children}</div>;
}
