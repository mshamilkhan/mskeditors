import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Services from './components/Services';
import ConsultationForm from './components/ConsultationForm';

function App() {
  return (
    <>
      <Banner />
      <Services/>
      <ConsultationForm/>
    </>
  );
}

export default App;
