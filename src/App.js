import React from "react";
import stories from "./data/stories.json"
import StoryCard from "./components/StoryCard"

function App() {
    return (
        <div className="App">
            <h1>Story Explorer</h1>
            <div className="story-list">
                {stories.map((story) => (
                    <StoryCard key={StoryCard.id} story={story} />
                ))}
            </div>
        </div>
    );
}
export default App;