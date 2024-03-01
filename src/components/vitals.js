




import React from 'react';
import { Progress, ButtonGroup, Button } from 'rsuite';
import elysiumBorder from '../images/elysiumBorder.png'


const Vitals = () => {
  const [percent, setPercent] = React.useState(30);
  const [percentHealth, setPercentHealth] = React.useState(10);


  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
    
  };

  const style = {
    width: '9vmax',
    display: 'inline-block',
    padding: '4vmax',
    textAlign:'center',
    justifyContent: 'center'
    
    
  };

  const fontStyle = {
    fontFamily: 'Macondo Swash Caps, sans serif',
    fontSize: '2.8vmax',
    textShadow: '5px 9px 20px black'
  }
  
  const status = percent === 100 ? 'success' : null;
  const colorOne = percent === 100 ? '#52c41a' : '#ffc107';
  const colorTwo = percent === 100 ? '#52c41a' : 'purple';
  const colorThree = percent === 100 ? '#52c41a' : 'cyan';

  return (
    <>
    <hr />
      {/* <ButtonGroup>
        <Button onClick={decline}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup> */}

      
      
       
      <div style={{
          //  backgroundImage: `url(${elysiumBorder})`,
          //  backgroundSize: 'cover',
          //  backgroundPosition: 'center',
           color: 'green',
           textAlign: 'center', 
           height: `calc(30% - 100px)`,
           boxShadow: '0px 2px 4px white',
           borderRadius: '2%' }}>
      
          <Progress.Line percent={percentHealth} strokeColor={'green'} status={status} />
          <h1 style={fontStyle}>Health</h1>
          {/* <Col md={6}>
            <Progress.Line vertical percent={percent} strokeColor={color} status={status} />
          </Col> */}
          
          <div style={style}>
            <Progress.Circle percent={percent} strokeColor={colorOne} status={status} />
            <h1 style={fontStyle}>Energy</h1>
            {/* <ButtonGroup>
              <Button onClick={increase}>+</Button>
              <Button onClick={decline}>-</Button>
            </ButtonGroup> */}
          </div>
          <div style={style}>
            <Progress.Circle percent={percent} strokeColor={colorTwo} status={status} />
            <h1 style={fontStyle}>Focus</h1>
          </div>
          <div style={style}>
            <Progress.Circle percent={percent} strokeColor={colorThree} status={status} />
            <h1 style={fontStyle}>Comfort</h1>
          </div>
      </div>
         
        
        
       
    </>
  );
};

export default Vitals