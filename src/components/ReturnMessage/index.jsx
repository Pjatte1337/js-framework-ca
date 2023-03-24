// Import dependencies
import { useLocation, Link } from "react-router-dom";

// Import styles
import { StyledMessages } from "./styles";

export default function Message({ title, message }) {
  const { pathname } = useLocation();

  return (
    <StyledMessages>
      <h1>{title}</h1>
      <p>{message}</p>
      {(pathname === "/src/pages/CheckoutSuccess" ||
        pathname === "/src/pages/Cart") && <Link to={"/"}>Go shopping</Link>}
    </StyledMessages>
  );
}
