type SpellItem = {
    id: string;
    name: string;
    description: string;
}

const getData = async ():Promise<SpellItem[]> => {
    const url = "https://potterhead-api.vercel.app/api/spells";
    const res = await fetch(url);
    return res.json();
};

const Spell = async () => {
    const data : SpellItem[] = await getData();
    return (
        <>
        <h1 className="text-6xl mb-20 font-black">Spell</h1>
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden shadow-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Spell
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(( item : SpellItem ) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.description}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        </>
    );
}

export default Spell;
