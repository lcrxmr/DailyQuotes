import React from 'react';
import './App.css';

import  QuoteDiv  from './QuoteDiv'
import CurrentDate from './Date';


function App() {
  return (
    <div className='App'>
    <CurrentDate/>
    <QuoteDiv/>
    </div>
  );
}

export default App;