
import  { useState, useEffect } from "react";
import CharacterCard from "../component/CharacterCard";
import SearchBar from "../component/SearchBar";
const Home = () => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [currentSearchInput, setCurrentSearchInput] = useState(""); 
    const [searchTerm, setSearchTerm] = useState("");                  


    useEffect(() => {
        document.title = "Rick and Morty Character Finder";

        const fetchFirstPageCharacters = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setAllCharacters(data.results || []);
            } catch (err) {
                console.error("Error fetching characters:", err);
                setAllCharacters([]);
            }
        };

        fetchFirstPageCharacters();
    }, []);

    const handleInputChange = (event) => {
        setCurrentSearchInput(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchTerm(currentSearchInput);
    };

    const filteredCharacters = allCharacters.filter(character => {
        if (searchTerm === "") {
            return true; 
        }
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="container mx-auto p-4 md:p-8 font-sans text-gray-800 text-center bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-4xl text-teal-600 mb-8 font-bold">Rick and Morty Character Finder</h1>

            <SearchBar
                searchTerm={currentSearchInput} 
                onSearchChange={handleInputChange}
                onSearchClick={handleSearchClick} 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
                {filteredCharacters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default Home;