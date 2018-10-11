import React, { Component } from 'react';
import './App.css';
import DrumPad from './Drumpad.js';

const data = [
  { id: 'Snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'Bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'Bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'Tom Tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'Bass 2', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'Shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'High Hats', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'Drum Hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'Laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  handleDisplay = display => this.setState({ display })
  render() {
    return (
     <div> 
     <marquee behavior="scroll" direction="right">DrumKit 9000</marquee>
     <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        <div id='drum-pads'>{data.slice(0,3).map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}
        </div>
         <div id='drum-pads'>{data.slice(3,6).map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
         <div id='drum-pads'>{data.slice(6).map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
    </div>
    </div>
    );
  }
}

export default App; 
