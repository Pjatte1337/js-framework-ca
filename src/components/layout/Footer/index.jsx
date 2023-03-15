import { StyledFooter } from "./styles";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <h4>&copy; Joakim Vanebo | Pjatte</h4>
      <ul>
        <li>
          <Link to="https://github.com/pjatte1337">GitHub</Link>
        </li>
        <li>·</li>
        <li>
          <Link to="">
            LinkedIn
          </Link>
        </li>
      </ul>
    </StyledFooter>
  );
}