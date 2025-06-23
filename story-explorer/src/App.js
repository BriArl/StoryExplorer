import React from 'react';
import stories from "./data/stories.json";
import StoryCard from './components/StoryCard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Story Explorer</h1>
      <div className="story-list">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        )
      )}
      </div>
    </div>
  );
}

export default App;
