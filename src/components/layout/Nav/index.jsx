// Import necessary dependencies
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Import styles
import { StyledNavBar } from "./styles";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  function toggleMenu() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <>
      <button className="menu" onClick={toggleMenu}>
        <span className="material-symbols-rounded">menu</span>
      </button>
      <StyledNavBar isVisible={isVisible}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Beauty">Beauty</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Fashion">Fashion</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Contact">Contact</NavLink>
          </li>
        </ul>
      </StyledNavBar>
    </>
  );
}