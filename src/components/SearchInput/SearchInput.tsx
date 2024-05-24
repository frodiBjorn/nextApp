"use client";
import { ChangeEvent, useState } from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchInput;
