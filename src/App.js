import React from 'react';
import './App.css';
import { Card } from './components/Card';
import { StandardForm } from './components/StandardForm';



function App() {
  return (
    <div className="App">
      {/* <Card
       headline="Headline"
       image="https://picsum.photos/300/200"
       excerpt="This is a short card description."
       showMore="This is a long card description, lorem ipsum dolor sit amet. This is a long card destiption, lorem ipsum dolor sit amet. This is a long card destiption, lorem ipsum dolor sit amet."
      /> */}
      <StandardForm />
    </div>
  );
}

export default App;
