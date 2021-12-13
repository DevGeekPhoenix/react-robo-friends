import react from "react";

const SearchBox = ({ SearchValue, searchchange }) => {
  return <input value={SearchValue} onChange={searchchange} />;
};
export default SearchBox;
