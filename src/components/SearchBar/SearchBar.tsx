import "./SearchBar.css";

const SearchBar: React.FC<{
    searchValue: string;
    setSearchValue: Function;
}> = ({ searchValue, setSearchValue }) => {
    return (
        <input
            className="search-bar"
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
    );
};

export default SearchBar;
