import React from 'react';
import './App.scss';
import Header from './components/header/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
