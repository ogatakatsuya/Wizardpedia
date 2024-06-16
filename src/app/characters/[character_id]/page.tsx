type Wand = {
    wood: string | null;
    core: string | null;
}

type CharacterItem = {
    id: string;
    name: string;
    species: string | null;
    gender: string | null;
    house: string | null;
    dateOfBirth: string | null;
    ancestry: string | null;
    eyeColour: string | null;
    hairColour: string | null;
    wand: Wand | null;
    actor: string | null;
    image: string | null;
}

type Params = {
    character_id: string;
}

const getData = async (character: string): Promise<CharacterItem | null> => {
    const url = `https://potterhead-api.vercel.app/api/characters/${character}`;
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!res.ok) {
            console.error(`HTTP error! status: ${res.status}`);
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Fetch error: ', error);
        return null;
    }
};

const characterDetail = async ({ params }: { params : Params }) => {
    const data: CharacterItem | null = await getData(params.character_id);
    if (!data) {
        return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                    <p className="text-gray-700 dark:text-gray-400">Character not found or there was an error retrieving the data.</p>
                </div>
            </div>
        );
    }
    return (
        <>
            <div key={data.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
                {data.image ? (
                    <div className="flex justify-center items-center h-48 overflow-hidden mt-1">
                        <img className="h-full object-contain rounded-t-lg" src={`${data.image}`} alt={data.name} />
                    </div>
                ) : (
                    <>
                    </>
                )}
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                    </a>
                    {data.species ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Species: {data.species}</p> : <p className="text-gray-700"> Species: unknown</p>}
                    {data.gender ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Gender: {data.gender}</p> : <p className="text-gray-700">Gender: unknown</p>}
                    {data.house ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">House: {data.house}</p> : <p className="text-gray-700">House: unknown</p>}
                    {data.dateOfBirth ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Date of Birth: {data.dateOfBirth}</p> : <p className="text-gray-700">Date of Birth: unknown</p>}
                    {data.ancestry ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Ancestry: {data.ancestry}</p> : <p className="text-gray-700">Ancestry: unknown</p>}
                    {data.eyeColour ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Eye Colour: {data.eyeColour}</p> : <p className="text-gray-700">Eye Colour: unknown</p>}
                    {data.hairColour ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Hair Colour: {data.hairColour}</p> : <p className="text-gray-700">Hair Colour: unknown</p>}
                    {data.wand ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Wand: {data.wand.wood}/{data.wand.core}</p> : <p className="text-gray-700">Wand: unknown</p>}
                    {data.actor ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Actor: {data.actor}</p> : <p className="text-gray-700">Actor: unknown</p>}
                </div>
            </div>
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="/characters">back</a>
            </button>
        </>
    );
}

export default characterDetail;
