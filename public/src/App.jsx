// react components and functions go here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// jsx components go here
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


const App = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default App;