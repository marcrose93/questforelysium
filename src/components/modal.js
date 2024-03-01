import React from 'react';
import { Modal, ButtonToolbar, Button, Placeholder, ButtonGroup } from 'rsuite';
import calendarBG from "../images/calendarBG.png";
import Monster from '../images/monster.png'

const CustomModal = () => {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
    

      <hr />
      
      <Modal size={size} open={open} onClose={handleClose} backdrop={true}
      >
       <div style={{
         backgroundImage: `url(${calendarBG})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         color: 'white',
         fontFamily: 'Macondo Swash Caps, sans serif',
         textAlign: 'center',
         fontWeight: '800',
         
         
       }}
>
       <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          fontSize: '2em',
          overflowY: 'hidden',
          marginTop: '2em',
          textShadow: '2px 2px 8px black'
        }}>
         <div>
         <h2>You have used up your one draw per day. If you would like to draw another card, you must purchase one with your coins. </h2>
          <img src={Monster} alt="monster" style={{
            width: '70%',
            opacity: '0.3',
          }}></img>
         </div>
          
        </Modal.Body>
        <Modal.Footer>
          
          <ButtonGroup>
          <Button onClick={handleClose} appearance="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          </ButtonGroup>
          
        </Modal.Footer>
       </div>
      </Modal>
      <ButtonGroup style={{
        margin: '2em',
      }}>
      <Button onClick={() => handleOpen('70vmax')} appearance='primary' color="green">
          Draw
        </Button>
      </ButtonGroup>
       

       

      
      
    
    </>
  );
};

export default CustomModal
