import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="container">
     <Header title="Foo"/>
     <Tasks />
    </div>
  )
}

export default App;
