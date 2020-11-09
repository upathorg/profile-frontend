import React from "react";

export default function SearchBar({ ...props }) {
  const [searchKeyword, setSearchKeyword] = React.useState("");

  const handleSearch = () => {
    // TODO: Search
    console.log(`Searching: ${searchKeyword}`);
  };

  return (
    <div
      className="search-bar__root d-flex align-self-center mx-2 py-1 px-2"
      {...props}
    >
      <i className="material-icons mr-2 cursor--pointer" onClick={handleSearch}>
        search
      </i>

      <input
        type="text"
        placeholder="Search e.g. HTML..."
        value={searchKeyword}
        className="search-bar__input"
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
}
