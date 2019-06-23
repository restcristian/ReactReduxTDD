import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const tempArr = [{
  fName:'Joe',
  lName:'Doe',
  age:24,
  email:'joe@gmail.com',
  onlineStatus:true
}];
function App() {
  return (
    <div className="App">
      <Header  />
      <section className="main">
        <Headline header = "Posts" desc = "Click the button to render posts!" tempArr = {tempArr} />
      </section>
    </div>
  );
}

export default App;
