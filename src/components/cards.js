import React, { useState, useEffect } from 'react';
import deckCover from '../images/deckcover.png';
import backcardgif from '../images/backcardgif.gif';
import CustomModal from './modal';
import { Tilt } from 'react-tilt';
import '../styles/cards.css'; // Import the CSS file for styling
import { Tooltip, Whisper } from 'rsuite';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.3,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const tooltip = (
  <Tooltip>
    Double click on the deck to reveal your draw of the day.
    Double click again to close the deck.
  </Tooltip>
)

const Deck = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [stackedCards, setStackedCards] = useState([]); // State for stacked cards

  const handleDoubleClick = () => {
    setFlipped(!isFlipped);
  };

  useEffect(() => {
    let timeout;

    // Function to add a new card
    const addCard = () => {
      const newCard = <div className={`card ${isFlipped ? 'flipped' : ''}`} key={stackedCards.length}></div>;
      setStackedCards(prevCards => [...prevCards, newCard]);
    };

    // Interval to add a new card every 5 seconds
    timeout = setInterval(() => {
      addCard();
    }, 100);

    // Clear interval on unmount
    return () => clearInterval(timeout);
  }, [isFlipped, stackedCards.length]);

  useEffect(() => {
    let timeout;
    if (isFlipped) {
      timeout = setTimeout(() => {
        setShowModal(true);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isFlipped]);

  return (
    <div className="background-container">
      <div className="deck-container">
      {stackedCards.map((card, index) => (
          <div key={index} className={`stacked-card stacked-card-${index}`}>{card}</div>
        ))}
    <Tilt options={defaultOptions}>
          
    <Whisper placement="top" controlId='control-id-hover' trigger="hover" speaker={tooltip} delayOpen={1500}>
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onDoubleClick={handleDoubleClick}>
          <img src={deckCover} alt="Front" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
          <div className="front">
              <img src={deckCover} alt="Front" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
            </div>
            <div className="back">
              <img src={backcardgif} alt="Back" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
            </div>
            
        
        </div>
    </Whisper>
    </Tilt>
       
        
    {showModal && <CustomModal />}
      
      
    </div>

    </div>
  );
};

export default Deck;


