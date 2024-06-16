type MovieItem = {
    serial: number;
    title: string;
    summary: string;
    poster: string;
    release_date: string | null;
    wiki: string;
}

const getData = async ():Promise<MovieItem[]> => {
    const url = "https://potterhead-api.vercel.app/api/movies";
    const res = await fetch(url);
    return res.json();
};

const Movie = async () => {
    const data: MovieItem[] = await getData();
    return (
        <>
        <h1 className="text-6xl mb-20 font-black">Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map((item : MovieItem ) => (
                    <div key={item.serial} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="rounded-t-lg" src={`${item.poster}`} alt="" />
                        </div>
                        <div className="p-5">
                            <div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.summary}</p>
                            <div className="py-2 text-black">
                                <p>Release date : {item.release_date ? item.release_date : "unknown"}</p>
                            </div>
                            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <a href={`${item.wiki}`}>more info</a>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Movie;