import React, {useState, useEffect} from 'react';
import DrumPad from '../DrumPad/DrumPad';
import Display from '../Display/Display';
import Power from '../Power/Power';
import Volume from '../Volume/Volume';
import { Container, Row, Col } from 'react-bootstrap'; 
import '../styles/styles.css';

const DrumMachine = () => {
    const drumPads = [
        {id: 'Q', keyTrigger: 'Q', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', soundName: 'Heater 1'},
        {id: 'W', keyTrigger: 'W', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', soundName: 'Heater 2'},
        {id: 'E', keyTrigger: 'E', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', soundName: 'Heater 3'},
        {id: 'A', keyTrigger: 'A', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', soundName: 'Heater 4'},
        {id: 'S', keyTrigger: 'S', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', soundName: 'Clap'},
        {id: 'D', keyTrigger: 'D', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', soundName: 'Open HH'},
        {id: 'Z', keyTrigger: 'Z', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', soundName: "Kick n' Hat"},
        {id: 'X', keyTrigger: 'X', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', soundName: 'Kick'},
        {id: 'C', keyTrigger: 'C', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', soundName: 'Closed HH'}
    ];
    const [power, setPower] = useState(true);
    const [volume, setVolume] = useState(0.5);

    const changeVolume = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
    };

    const togglePower = () => {
        setPower(!power); 
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
          drumPads.forEach((drumPad) => {
            if (power && e.key.toUpperCase() === drumPad.id) {
              const audio = new Audio(drumPad.audioSrc);
              audio.volume = volume;
              audio.currentTime = 0;
              audio.play();
              
              const display = document.getElementById('display');
              display.innerHTML = drumPad.soundName;
             }
          });
        };
            window.addEventListener("keydown", handleKeyPress);
            return () => {
                window.removeEventListener("keydown", handleKeyPress);
            };
        }, [power, volume]);

    return (
        <Container fluid id='drum-machine'>
        <Row className='drum-pads'>
            {drumPads.map((drumPad => (
                    <Col key={drumPad.id}>
                        <DrumPad 
                            volume={volume} 
                            power={power} 
                            id={drumPad.id} 
                            keyTrigger={drumPad.keyTrigger} 
                            audioSrc={drumPad.audioSrc} 
                            soundName={drumPad.soundName} 
                            />
                    </Col>
            )))}
        </Row>
        <Row className='controls-container'>
            <Col className='style'>
                <Power power={power} togglePower={togglePower} />
            </Col>            
            <Col className='style'>
                <Display />
            </Col>
            <Col className='style'>
                <Volume volume={volume} changeVolume={changeVolume} />
            </Col>
        </Row>
        </Container>
    );
}

export default DrumMachine;
