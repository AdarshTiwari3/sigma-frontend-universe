import React, { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  console.log("Search Rendered");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    onChange(text);
  };

  return (
    <div className="flex gap-2 items-center">
      <label>Search</label>
      <input
        className="p-1 bg-white rounded-md text-black"
        type="text"
        placeholder="Search user here..."
        onChange={handleChange}
      />
    </div>
  );
};
export default memo(Search);
