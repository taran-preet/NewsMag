import React from 'react';

function NewItem({ title, description, src, url }) {
    const fallbackURL = "https://cdn.pixabay.com/photo/2015/11/06/15/13/news-1028791_960_720.jpg";
    const defaultDescription = "No description available at the moment. Please check back later for more details.";

    return (
        <div className="card bg-dark text-light mb-4">
            <img  src={src ? src : fallbackURL} className="card-img-top" alt="News Thumbnail" />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,85)}</h5>
                <p className="card-text">{description ? description.slice(0,10) : defaultDescription}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}

export default NewItem;
