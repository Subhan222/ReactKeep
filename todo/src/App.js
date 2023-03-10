import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header.jsx";
import Footer from './Footer';
import Createnote from './Createnote';



import './App.css';

function App() {

  return (
    <>    
    <div id='bgg' >

        <Header/>

        <Createnote/>

          <Footer/>
        



    </div>

    </>
    
  );
}

export default App;
