import react from "react";

const SearchBox = ({ SearchValue, searchchange }) => {
  return (
    <input className="searchbox" value={SearchValue} onChange={searchchange} />
  );
};
export default SearchBox;
