// .Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.

import React, { useState } from "react";

const SearchFilter = () => {
  const [list, setList] = useState(["Code", "Coding", "Coded"]);
  const [query, setQuery] = useState("");
  const filteredItems = list.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Type Here.."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default SearchFilter;
