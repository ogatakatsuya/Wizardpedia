const getData = async () => {
    const url = "https://potterhead-api.vercel.app/api/characters";
    const res = await fetch(url);
    return res.json();
};

export default async function dataIndex() {
    const data = await getData();
    return (
    <>
        <h1 className="text-6xl mb-20 font-black">Character</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
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
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                </a>
                { item.species ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Species: {item.species}</p> : <p className="text-gray-700"> Species : unknown</p>}
                { item.gender ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Gender: {item.gender}</p> : <p className="text-gray-700">Gender : unknown</p>}
                { item.house ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">House: {item.house}</p> : <p className="text-gray-700">House : unknown</p>}
                { item.dateOfBirth ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Date of Birth: {item.dateOfBirth}</p> : <p className="text-gray-700">Date of Birth : unknown</p>}
                { item.ancestry ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Ancestry: {item.ancestry}</p> : <p className="text-gray-700">Ancestry : unknown</p>}
                { item.eyeColour ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Eye Colour: {item.eyeColour}</p> : <p className="text-gray-700">Eye Colour : unknown</p>}
                { item.hairColour ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Hair Colour: {item.hairColour}</p> : <p className="text-gray-700">Hair Colour : unknown</p>}
                { item.wand ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Wand: {item.wand.wood}/{item.wand.core}</p> : <p className="text-gray-700">Wand : unknown</p>}
                { item.actor ? <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Actor: {item.actor}</p> : <p className="text-gray-700">Actor : unknown</p>}
                <a href={`/${item.name}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
