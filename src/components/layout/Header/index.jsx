// Importing components
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import Nav from "../Nav";

// Importing styles
import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <Cart />
      <Nav />
    </StyledHeader>
  );
}
