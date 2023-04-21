const SearchBox = ({ onChangeHandler }) => (
  <input
    className="search"
    type="search"
    placeholder="search"
    onChange={onChangeHandler}
  />
);

export default SearchBox;
