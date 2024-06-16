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

const getData = async ():Promise<CharacterItem[]> => {
    const url = "https://potterhead-api.vercel.app/api/characters";
    const res = await fetch(url);
    return res.json();
};

export default async function dataIndex() {
    const data : CharacterItem[] = await getData();
    return (
    <>
        <h1 className="text-6xl mb-20 font-black">Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map(( item : CharacterItem ) => (
            <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            { item.image ? (
                <div className="flex justify-center items-center h-48 overflow-hidden mt-1">
                <img className="h-full object-contain rounded-t-lg" src={`${item.image}`} alt={item.name} />
                </div>
            ):(
                <>
                </>
            )}
                <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                { item.species ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Species: {item.species}</p> : <p className="text-gray-700"> Species : unknown</p>}
                { item.actor ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Actor: {item.actor}</p> : <p className="text-gray-700">Actor : unknown</p>}
                <a href={`/characters/${item.name}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                </div>
            </div>
            ))}
        </div>
    </>
    );
}
