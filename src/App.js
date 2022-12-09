import React, { useState } from 'react';
import InputTemperature from './components/Inputtemperature';
import Boiled from './components/Boiled';
import { toCelsius, toFahrenheit, tryConvert } from './utils/temperatureConverter';
import { celsiusIsBoiled, fahrenheitIsBoiled } from './utils/boilFormuls';


function App() {
  const [temperature, setTemperature] = useState(0);
  const [scale, setScale] = useState('с');

  const celsiusChange = (value) => {
    setTemperature(value);
    setScale('c')
  }
  const fahrenheitChange = (value) => {
    setTemperature(value);
    setScale('f')
  }
  return (
    <div className="App">
      <InputTemperature
          scale='c'
          temperature={(scale === 'f')? tryConvert(temperature, toCelsius): temperature}
          handleTemperatureChange={celsiusChange}/>
      <InputTemperature
          scale='f'
          temperature={(scale === 'c')? tryConvert(temperature, toFahrenheit): temperature}
          handleTemperatureChange={fahrenheitChange}/>
      <Boiled
          temperature={temperature}
          isBoiled={scale === 'c'? celsiusIsBoiled: fahrenheitIsBoiled}/>
    </div>
  );
}

export default App;
