import React, { useEffect, useState } from 'react';
import NewItem from './NewItem';
import 'aos/dist/aos.css'; // Import the AOS styles

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([]);
    const [aosAnimation, setAosAnimation] = useState('fade-up');

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        // Fetch articles from API using environment variables
        const url = `${apiUrl}?country=in&category=${category}&apiKey=${apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setArticles(data.articles))
            .catch((error) => console.error('Error fetching data:', error));

        // Update aosAnimation based on screen size
        const updateAosAnimation = () => {
            if (window.matchMedia("(max-width: 767px)").matches) {
                setAosAnimation('fade-right');
            } else {
                setAosAnimation('fade-up');
            }
        };

        updateAosAnimation(); // Set initial value

        // Add event listener for screen size changes
        window.addEventListener('resize', updateAosAnimation);

        // Cleanup event listener
        return () => window.removeEventListener('resize', updateAosAnimation);
    }, [category, apiKey, apiUrl]); // Add apiKey and apiUrl to dependency array

    return (
        <div className="container">
            <h2 className="text-center my-4 text-white">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            <div className="row">
                {articles.map((news, index) => (
                    <div data-aos={aosAnimation} data-aos-duration="1500" key={index} className="col-md-4">
                        <NewItem
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsBoard;
