import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import './styles/cards.css';
import './styles/container.less';
import elysiumBorder from './images/elysiumBorder.png';
import elysiumLogo from './images/elysiumLogo.png';
import DividerQuest from './images/dividerQuest.png';



import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav, Footer } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
// import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
// import MagicIcon from '@rsuite/icons/legacy/Magic';
import ListIcon from '@rsuite/icons/List';
import ShieldIcon from '@rsuite/icons/Shield';
import WavePointIcon from '@rsuite/icons/WavePoint';


import { Avatar } from 'rsuite';

// import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';}
import Grid from "./components/grid";
import DateTimeDisplay from "./components/datetime";
import Calendar from "./components/calendar";
import Deck from './components/cards'
import Vitals from './components/vitals';
import Tasks from './components/tasks';
import QuestsLists from './components/quests';
import Preloader from './components/preloader'


const headerStyles = {
  padding: 0,
  fontSize: 16,
  height: 56,
  background: 'black',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textAlign: 'center',
};





const Divider = () => {
  return (
    <div
    style={{

      backgroundImage: `url(${DividerQuest})`,
         backgroundSize: 'cover',
           backgroundPosition: 'center',
        margin: '3em',
        padding: '3em',
        opacity: '0.2',
        filter: 'blur(2px)'
      

    }}></div>
  )
}

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default function App () {
  const [expand, setExpand] = React.useState(false);
 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Capture the start time
    const startTime = performance.now();
  
    // Replace this with your actual loading logic
    // For demonstration purposes, let's simulate content loading with a timeout
    // Replace setTimeout with your actual loading logic
    const timeoutId = setTimeout(() => {
      // Capture the end time when content is loaded
      const endTime = performance.now();
  
      // Calculate the loading time in milliseconds
      const loadingTime = endTime - startTime;
  
      // Set a minimum loading time (e.g., 1000 milliseconds)
      const minLoadingTime = 1000;
  
      // Calculate the remaining time to wait before updating isLoading to false
      const remainingTime = minLoadingTime - loadingTime;
  
      // If the actual loading time is less than the minimum loading time,
      // wait for the remaining time before updating isLoading to false
      if (remainingTime > 0) {
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      } else {
        // If the actual loading time exceeds the minimum loading time,
        // update isLoading to false immediately
        setIsLoading(false);
      }
    }, 0); // Change this to 0 to ensure immediate execution after other synchronous tasks
  
    // Clean up the timeout when the component unmounts or when isLoading is set to false
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (

    
    <div className="show-fake-browser sidebar-page">
      {isLoading && <Preloader />}
      <Container>
      <Sidebar
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            backgroundColor: 'black',
            
            }}
          width={expand ? 260 : 56}
          collapsible
          // check into how to change font color
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              {/* <span style={{ marginLeft: 12 }}></span> */}
              {/* <DateTimeDisplay /> */}
              {expand && <DateTimeDisplay />}
              <img src={elysiumLogo} alt="Logo" style={{ 
                display: !expand ? 'block' : 'none',
                width: '100%',
                alignSelf: 'center',
                
                
                }} />
            </div>
          </Sidenav.Header>
          <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" icon={<DashboardIcon color='cyan' />}>
                  Dashboard
                </Nav.Item>
                
                <Avatar style={{
                  margin: !expand ? '0.5em' : '1em'
                }}circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
                <p style={{
                  display: !expand ? 'none' : 'inline',
                  color: 'white',
                }}>Hi, posepanda1990!</p>
                  
                
                {/* <Nav.Item eventKey="3" icon={<GroupIcon />}>
                  Tasks
                </Nav.Item> */}
                <Nav.Menu
                  eventKey="2"
                  trigger="hover"
                  title="Tasks"
                  icon={<ListIcon color="green" />}
                  placement="rightStart"
            
                  
                  

                >
                  <Tasks/>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="3"
                  trigger="hover"
                  title="Inventory"
                  icon={<ShieldIcon color="magenta" />}
                  placement="rightStart"
                  expanded
                >
                  <Grid />
                  
                  {/* <Nav.Item eventKey="3-1">Geo</Nav.Item>
                  <Nav.Item eventKey="3-2">Devices</Nav.Item>
                  <Nav.Item eventKey="3-3">Brand</Nav.Item>
                  <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                  <Nav.Item eventKey="3-5">Visit Depth</Nav.Item> */}
                </Nav.Menu>
                {/* <Nav.Menu
                  eventKey="4"
                  trigger="hover"
                  title="Settings"
                  icon={<GearCircleIcon />}
                  placement="rightStart"
                >
                  <Nav.Item eventKey="4-1">Applications</Nav.Item>
                  <Nav.Item eventKey="4-2">Websites</Nav.Item>
                  <Nav.Item eventKey="4-3">Channels</Nav.Item>
                  <Nav.Item eventKey="4-4">Tags</Nav.Item>
                  <Nav.Item eventKey="4-5">Versions</Nav.Item>
                </Nav.Menu> */}
                <Nav.Menu
                eventKey="4"
                trigger="hover"
                title="Vitals"
                icon={<WavePointIcon color="red" />}
                placement="rightStart"
                expanded>
                  <Vitals />

                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)}/>
        </Sidebar>

        <Container style={{ 
          backgroundColor:'black',
          width: '100%',
          
          

      }}>
          <Header style={{
           backgroundImage: `url(${elysiumBorder})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           color: 'white',
           textAlign: 'center', 
           height: `calc(10vmin + 10vmax)`,
           boxShadow: '0px 2px 4px white',
           borderRadius: '2%',
           display: 'flex',              // Using flexbox
           alignItems: 'center',         // Vertically center
           justifyContent: 'center',      // Horizontally center
           flexDirection: 'column'
          }}>
            <h2 style={{
              fontFamily: 'UnifrakturMaguntia, sans serif',
              color: 'white',
              padding: 28,
              fontSize: '5vmax',
              textShadow: '2px 2px 4px black',
              
              

            }}>Quest for Elysium</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              fontFamily: 'impact',
              textDecoration: 'none',

            }}>
              <button><a href='#'>Home</a></button>
              <button><a href='#'>Quests</a></button>
              <button><a href='#'>Shop</a></button>
              
            </div>
          </Header>
          <Content style={{
            color: 'white',
            
          }}>
            <h1 style={{
               fontFamily: 'Times New Roman, sans serif',
               color: 'white',
               padding: 28,
               fontSize: '2vmax',
               textShadow: '2px 2px 4px white',
            }}>Welcome Back, posepanda1990!</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}> {!isLoading && <Deck />}
            </div>
            <Divider />


            <Calendar />
           

            <Divider />
           
            {/* <h1>DOUBLE-CLICK TO REVEAL YOUR CARD OF THE DAY</h1> */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}> 
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                margin: '8vmax',
                width: "100%",
                
              }}>
              <QuestsLists />

              
              
              </div>
            </div>
            
            
          </Content>
          <Footer style={{
  backgroundImage: `url(${elysiumBorder})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  height: `calc(10vmin + 10vmax)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  position: 'relative', // Add position relative to position child elements
}}>

  

 
  <div>
    <h1 style={{ fontFamily: 'Macondo Swash Caps, sans serif', fontSize: '5vmin' }}>SOLAY ROSE©</h1>
  </div>

  <div>
    <p style={{ marginBottom: '5px', fontSize: '2vmin' }}>Contact Us: example@example.com</p>
    <p style={{ marginBottom: '5px', fontSize: '2vmin' }}>Phone: 123-456-7890</p>
  </div>

  <div>
    <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 2vw' }}>About</a>
    <span style={{ color: 'white', fontSize: '2vmin' }}>|</span>
    <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 2vw' }}>Services</a>
    <span style={{ color: 'white', fontSize: '2vmin' }}>|</span>
    <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 2vw' }}>Contact</a>
  </div>

</Footer>


        </Container>
        
      
      </Container>
    
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));






// import "./styles/styles.css";
// import "./styles/container.css";
// import "./styles/calendar-style.css";
// // import "./styles/sidebar.css";
// import { Container, Header, Footer, Content } from 'rsuite';
// // import Grid from "./components/grid";
// import DateTimeDisplay from "./components/datetime";
// import { Calendar } from "./components/calendar";
// import CustomSidebar from './components/sidebar'

// export default function App() {

//   return (
//     <div className="App show-container">
//       <Container>
//         <Header>
//           <button >
//             CLICK HERE
//           </button>
//           <span>QUEST FOR ELYSIUM</span>
//           <DateTimeDisplay />
//         </Header>
//         <Container>
//           <Content>
//             <Calendar />
//           </Content>
//           <CustomSidebar />
//         </Container>
//         <Footer>Footer</Footer>
//       </Container>
//     </div>
//   );
// }