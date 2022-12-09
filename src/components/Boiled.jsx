import React from 'react';

const Boiled = ({temperature, isBoiled}) => {
    const _isBoiled = isBoiled(temperature);
    return (
        <div>
            {_isBoiled
                ?<p>Закипит</p>
                : <p>Не закипит</p>}
        </div>
    );
};

export default Boiled;
