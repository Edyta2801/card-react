import React from 'react';
import './App.css';
// import { Card } from './components/Card';
import { StandardForm } from './components/StandardForm';
import { RegisterForm } from './components/RegisterForm'



function App() {
  return (
    <div className="App">
      <RegisterForm />
      <StandardForm />
      {/* <Card
       headline="Headline"
       image="https://picsum.photos/300/200"
       excerpt="This is a short card description."
       showMore="This is a long card description, lorem ipsum dolor sit amet. This is a long card destiption, lorem ipsum dolor sit amet. This is a long card destiption, lorem ipsum dolor sit amet."
      /> */}
    </div>
  );
}

export default App;
