import "../stylesheets/SearchBar.css"

function SearchBar({ filteredSearch, search, setSearch }) {
    return (
        <div>
            <div>
                <div className="search-bar">
                    <input
                        type='text'
                        className="search-term"
                        placeholder="Search your model..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar