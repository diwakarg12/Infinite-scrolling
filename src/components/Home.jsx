import { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import Loading from "./Loading";

const Home = () => {
    const [card, setCard] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const getCardData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`);
        const data = await res.json();

        setCard((prev) => [...prev, ...data])
        setLoading(false)
    };

    useEffect(() => {
        getCardData();
    }, [page])

    const handelInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                // setLoading(true)
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);

        return () => window.removeEventListener("scroll", handelInfiniteScroll)
    }, [])



    return (
        <div>
            <MovieComponent movieInfo={card} />
            {loading && <Loading />}
        </div>
    )
}

export default Home