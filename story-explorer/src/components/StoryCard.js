import React from "react";

const StoryCard = ({ story }) => {
    const { title, snippet, image, topic, mood, length } = story;
    return (
        <div className="story-card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{snippet}</p>
        <small>#{topic} #{mood} #{length}</small>
    </div>
    );
};

export default StoryCard;