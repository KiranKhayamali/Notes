function SearchBar({handleSearch}) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search notes here...."
                onChange={(event) => handleSearch(event.target.value)}
            />
        </div>
    )
};

export default SearchBar;