
const SearchBar = ({ searchTerm, onSearchChange, onSearchClick }) => {

    return (
        <div className="mb-6 flex justify-center items-center space-x-2">
            <input
                type="text"
                placeholder="Search for a character..."
                value={searchTerm} 
                onChange={onSearchChange}
                className="w-full max-w-md p-3 border border-gray-300 rounded-full text-lg shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                           transition-all duration-200 ease-in-out"
            />
            <button
                onClick={onSearchClick}
                className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-full shadow-md
                           hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400
                           transition-all duration-200 ease-in-out"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;