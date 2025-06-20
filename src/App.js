import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/resumeData.json');
      const data = await response.json();
      setResumeData(data);
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
