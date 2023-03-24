// Import necessary dependencies
import { Link } from "react-router-dom";

// Import assets
import StoreTown from "../../../assets/logo1.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={StoreTown} alt="StoreTown logo" height="250" width="250" />
    </Link>
  );
}