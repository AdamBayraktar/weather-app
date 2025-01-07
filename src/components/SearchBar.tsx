import React, { useState, useRef } from "react";
import "../styles/SearchBar.css";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    e.target.value
      ? inputRef.current!.classList.remove("error")
      : inputRef.current!.classList.add("error");
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity(""); // Clear the input after search
      inputRef.current!.classList.remove("error"); // Remove error class from input
    } else {
      inputRef.current!.classList.add("error"); // Add error class to input
    }
  };

  return (
    <div className="search_bar">
      <input
        ref={inputRef}
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
