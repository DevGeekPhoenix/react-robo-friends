const SearchBox = ({ SearchValue, searchchange }) => {
  return (
    <input
      className="searchbox"
      placeholder="SearchRobots"
      value={SearchValue}
      onChange={(event) => searchchange(event.target.value)}
    />
  );
};
export default SearchBox;
