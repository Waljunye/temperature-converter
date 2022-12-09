import React from 'react';

const scaleNames = {
    c: 'цельсия',
    f: 'фаренгейта'
}

const InputTemperature = ({scale, temperature, handleTemperatureChange}) => {
    const handleChange = (event) => {
        handleTemperatureChange(event.target.value)
    }
    return (
        <fieldset>
            <legend> Введите градсы по шкале {scaleNames[scale]}</legend>
            <input type="text" value={temperature} onChange={handleChange}/>
        </fieldset>
    );
};

export default InputTemperature;
