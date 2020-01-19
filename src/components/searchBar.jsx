import React from "react";
import { Button } from "../style/style";
import { SearchbarWrapper, SearchbarInput } from "../style/searchbarStyle";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <SearchbarWrapper>
      <SearchbarInput type="text" placeholder="Search..." />
      <Button color="white">
        <FaSearch
          style={{
            paddingRight: "10px",
            backgroundColor: "white",
            color: "363636"
          }}
        />
      </Button>
    </SearchbarWrapper>
  );
};

export default SearchBar;
