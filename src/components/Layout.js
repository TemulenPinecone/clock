import { Navbar } from "./Navbar";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
