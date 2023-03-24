// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";

// Import styles
import { StyledSearchBar } from "./styles";

// Import utils
import { useProductsStore } from "../../../utils/create";
import 'material-symbols';


export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { availableProducts } = useProductsStore(
    state => ({ availableProducts: state.availableProducts }),
    shallow
  );

  useEffect(() => {
    setSuggestions([]);
    setUserInput("");
  }, [pathname]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setUserInput(query);

    if (query.length > 2) {
      const filteredSuggestions = availableProducts.filter(
        product => product.title.toLowerCase().includes(query)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }

  let selected = -1;

  function handleNavigation(event) {
    const key = event.key;

    switch (key) {
      case "Enter":
        goToPage();
        break;
      case "ArrowDown":
        navigateSuggestions(1, event.target);
        break;
      case "ArrowUp":
        navigateSuggestions(-1, event.target);
        break;
      case "Backspace":
        removeStyles();
        break;
      default:
        break;
    }
  }

  function goToPage() {
    const chosenSuggestion = suggestions[selected];
    const pageUrl = chosenSuggestion ? `/src/pages/Product/${chosenSuggestion.id}` : `/src/pages/SearchResults/${userInput}`;
    navigate(pageUrl);
  }

  function navigateSuggestions(direction, target) {
    const newSelected = selected + direction;
    if (newSelected >= 0 && newSelected < suggestions.length) {
      selected = newSelected;
      target.value = suggestions[selected].title;
      const selectedSuggestion = suggestions[selected].id;
      suggestions.forEach(suggestion => {
        const li = document.getElementById(suggestion.id);
        if (li) {
          if (suggestion.id === selectedSuggestion) {
            li.classList.add("selected");
          } else {
            li.classList.remove("selected");
          }
        }
      });
    }
  }

  function removeStyles() {
    suggestions.forEach(suggestion => {
      const li = document.getElementById(suggestion.id);
      if (li) {
        li.classList.remove("selected");
      }
    });
  }

  return (
    <StyledSearchBar>
      <div className="input-wrapper">
        <label htmlFor="search-bar" />
        <span className="material-symbols-rounded">search</span>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleNavigation}
        />
      </div>
      <ul>
        {suggestions.map(item => (
          <li key={item.id} id={item.id}>
            <Link to={`/src/pages/Product/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </StyledSearchBar>
  );
}