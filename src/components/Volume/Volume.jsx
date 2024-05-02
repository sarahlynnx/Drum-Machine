import React from 'react';

const Volume = ({changeVolume, volume}) => {
    return (
        <>
            <p className='volume'> Sound </p>
            <div className='volume-slider'>
                <input type='range' min='0' step='0.01' max='1' value={volume} className='slider' onChange={changeVolume} id='volume-slider' />
            </div>
        </>
    );
};

export default Volume;