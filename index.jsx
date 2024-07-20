import React from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="notes-container">
        <Note title="Note Title 1" content="This is the content of the first note." />
        <Note title="Note Title 2" content="This is the content of the second note." />
        <Note title="Note Title 3" content="This is the content of the third note." />
      </div>
      <Footer />
    </div>
  );
};

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

