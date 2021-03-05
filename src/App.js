import React from 'react';
import Form from './components/Form';
import ListContainer from './components/ListContainer';
import Navbar from './components/Navbar';
import ListContextProvider from './contexts/ListContext';

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Navbar />
        <ListContainer />
        <Form />
      </ListContextProvider>
    </div>
  );
}

export default App;
