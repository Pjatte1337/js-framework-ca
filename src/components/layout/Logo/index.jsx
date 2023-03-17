import { Link } from "react-router-dom";
import StoreTown from "../../../assets/logo1.png";
export default function Logo() {
  return (
    <Link to="/">
      <img src={StoreTown} alt="StoreTown logo" />
    </Link>
  );
}