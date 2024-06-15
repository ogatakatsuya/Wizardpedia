const getData = async () => {
    const url = "https://potterhead-api.vercel.app/api/movies";
    const res = await fetch(url);
    return res.json();
};

const Movie = async () => {
    const data = await getData();
    return (
        <>
        <h1 className="text-6xl mb-20 font-black">Movie</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map((item ) => (
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                more info
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Movie;