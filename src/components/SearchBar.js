import "../stylesheets/SearchBar.css"

function SearchBar ({search, setSearch}) {
    return(
        <div className="search-bar">
            <input
            type='text'
            className="searchTerm"
            placeholder="Search your model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar