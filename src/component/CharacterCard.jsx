
const CharacterCard = ({ character }) => {
    const statusColorClass = character.status === 'Alive' ? 'bg-green-500' :
                             character.status === 'Dead' ? 'bg-red-500' :
                             'bg-gray-500'; 

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between h-full">
            <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{character.name}</h2>
                <div className="flex items-center text-sm text-gray-700 mb-1">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${statusColorClass}`}></span>
                    <span>{character.status} - {character.species}</span>
                </div>
                <p className="text-sm text-gray-600">Gender: {character.gender}</p>
                <p className="text-sm text-gray-600">Origin: {character.origin.name}</p>
            </div>
        </div>
    );
};

export default CharacterCard;