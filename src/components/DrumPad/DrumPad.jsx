import React, { useCallback} from 'react';
import { Col } from 'react-bootstrap';

const DrumPad = ({id, keyTrigger, audioSrc, soundName, power, volume}) => {
    const playAudio = useCallback(() => {
        if (!power) return;
        const audio = new Audio(audioSrc);
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play();   
        
        const display = document.getElementById('display');
        display.innerHTML = soundName;
    }, [power, audioSrc, volume, soundName]); 

    return (
        <Col className='drum-pad' id={`${id}-button`} data-sound-name={soundName} onClick={playAudio}>
            <p>{keyTrigger}</p>
            <audio className='clip' id={`audio-${id}`} src={audioSrc} />
        </Col>
    );
};

export default DrumPad;