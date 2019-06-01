import React from 'react'; 
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Card from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

var style = {
  width:'500px'
}

const App = () => {
  return (
    <div style={style}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
