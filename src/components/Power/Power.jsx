import React from 'react';

const Power = ({power, togglePower}) => {
    return (
        <>
            <p className='switch'> Power </p>
            <label className='switch-container'>
                <input className='switch-input' type='checkbox' checked={power} onChange={togglePower} id='power-switch' />
                <span className='switch-slider'></span>
            </label>
        </>
    );
};

export default Power;