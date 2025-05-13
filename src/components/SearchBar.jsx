import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleInput = (e) => {
    setTerm(e.target.value);
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleInput} value={term} name="search" />
      <p>{term.length < 4 && "Term must be more than 4 charcters"}</p>
    </form>
  );
}
