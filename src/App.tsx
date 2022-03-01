import React, { useEffect }  from 'react';
import './App.css';
import { useTranslation } from 'react-i18next'

function App() {
  useEffect(() => {
    //neows.neoListByRange()
  }, []);

  const { t } = useTranslation()
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
