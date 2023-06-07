import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2>Welcome To Movie Verse</h2>
        </div>
    );
};

export default Home;