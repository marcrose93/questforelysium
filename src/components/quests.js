import React from 'react';



import { List, FlexboxGrid } from 'rsuite';

import ShieldIcon from '@rsuite/icons/Shield';
import UserCircleIcon from '@rsuite/icons/legacy/UserCircleO';
import PeoplesIcon from '@rsuite/icons/Peoples';
import elysiumBorder from '../images/elysiumBorder.png'

const data = [
  {
    title: 'Tartarus',
    icon: <ShieldIcon />,
    creator: 'afterthoughts8079',
    date: '2024.4.05 11:59PM EST',
    peak: 300,
    peakRaise: 250,
    uv: 125,
    uvRaise: 75
  },
  {
    title: 'Forest of Suffering',
    icon: <ShieldIcon />,
    creator: 'babyBlues1789',
    date: '2024.02.29 11:59PM EST',
    peak: 450,
    peakRaise: 0,
    uv: 150,
    uvRaise: 50
  },
  {
    title: 'Our Lady of Heron Lake',
    icon: <PeoplesIcon />,
    creator: 'questFan06',
    date: '2024.03.01 11:59PM EST',
    peak: 850,
    peakRaise: 0,
    uv: 450,
    uvRaise: 150
  },
  {
    title: 'Trinity Imbalance',
    icon: <ShieldIcon />,
    creator: 'QuizKnows!@#4',
    date: '2024.03.15 11:59PM EST',
    peak: 750,
    peakRaise: 400,
    uv: 14000,
    uvRaise: 1500
  },
  {
    title: 'Meet with Olivar Yanderling',
    icon: <PeoplesIcon />,
    creator: 'ariaNation38',
    date: '2024.10.13 11:59PM EST',
    peak: 100,
    peakRaise: 25,
    uv: 25,
    uvRaise: 50
  }
];

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
  backgroundColor: 'black',
};

const slimText = {
  fontSize: '0.666em',
  color: 'white',
  fontWeight: 'lighter',
  paddingBottom: 5,
  
};

const titleStyle = {
  paddingBottom: 5,
  whiteSpace: 'nowrap',
  fontWeight: 500
};

const dataStyle = {
  fontSize: '1.2em',
  fontWeight: 500
};

const QuestsList = () => {
  const renderRaise = React.useCallback(number => {
    const isPositive = number > 0;
    const isNegative = number < 0;
    return (
      <span style={{ paddingLeft: 15, color: isNegative ? 'red' : 'green' }}>
        <span>{isPositive ? '+' : null}</span>
        <span>{number}</span>
      </span>
    );
  }, []);

  return (
    <div style={{
     width: '60vmax',
      boxShadow: '-4px 5px 28px silver',
      overflow: 'hidden' // Prevents content from going past the outlines
    }}>
     <div style={{
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center'
     }}>
     <h1 style={{
      margin: '2vmin',
      fontFamily: 'UnifrakturMaguntia, sans serif',
      alignItems: 'center',
      textShadow: '2px 2px 4px white',
      fontSize: '4vmax'
      
      
    }}>Quests Board</h1>
     </div>
      <List hover>
      {data.map((item, index) => (
        <List.Item key={item['title']} index={index + 1} style={{
             backgroundImage: `url(${elysiumBorder})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
        }}>
          <FlexboxGrid>
            {/*icon*/}
            <FlexboxGrid.Item colspan={2} style={styleCenter}>
              {React.cloneElement(item['icon'], {
                style: {
                  color: 'darkgrey',
                  fontSize: '1.5em'
                }
              })}
            </FlexboxGrid.Item>
            {/*base info*/}
            <FlexboxGrid.Item
              colspan={6}
              style={{
                ...styleCenter,
                flexDirection: 'column',
                alignItems: 'flex-start',
                overflow: 'hidden'
              }}
            >
              <div style={titleStyle}>{item['title']}</div>
              <div style={slimText}>
                <div>
                  <UserCircleIcon />
                  {' ' + item['creator']}
                </div>
                <div>{item['date']}</div>
              </div>
            </FlexboxGrid.Item>
            {/*peak data*/}
            <FlexboxGrid.Item colspan={10} style={styleCenter}>
              <div style={{ textAlign: 'right' }}>
                <div style={slimText}>XP</div>
                <div style={dataStyle}>{item['peak'].toLocaleString()}</div>
              </div>
              {renderRaise(item['peakRaise'])}
            </FlexboxGrid.Item>
            {/*uv data*/}
            <FlexboxGrid.Item colspan={6} style={styleCenter}>
              <div style={{ textAlign: 'right' }}>
                <div style={slimText}>Coins</div>
                <div style={dataStyle}>{item['uv'].toLocaleString()}</div>
              </div>
              {renderRaise(item['uvRaise'])}
            </FlexboxGrid.Item>
            {/*uv data*/}
            <FlexboxGrid.Item
              colspan={24}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',


              }}
            >
              <a href="#">Join</a>
              <span style={{ padding: 5 }}>|</span>
              <a href="#">Ignore</a>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
      ))}
    </List>
    </div>
  );

};

export default QuestsList

// import React from 'react';



// import { List, FlexboxGrid } from 'rsuite';
// import ImageIcon from '@rsuite/icons/legacy/Image';
// import FilmIcon from '@rsuite/icons/legacy/Film';
// import UserCircleIcon from '@rsuite/icons/legacy/UserCircleO';

// import elysiumBorder from '../images/elysiumBorder.png'
// const data = [

//   {
//     title: 'Hong Kong Free Walk @ Tsim Sha Tsui',
//     icon: <ImageIcon />,
//     creator: 'Yvnonne',
//     date: '2017.10.13 14:50',
    
//     pointsRaise: 433,
//     coins: 433,
//     coinsRaise: 33,
//     points: 350,
    
//   },
  
 
// ];

// const styleCenter = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '160px',
//   backgroundColor: 'black',
//   opacity: '0.8',
     
  
// };

// const slimText = {
//   fontSize: '0.666em',
//   color: 'white',
//   fontWeight: 'lighter',
//   paddingBottom: 5
// };

// const titleStyle = {
//   paddingBottom: 5,
//   whiteSpace: 'nowrap',
//   fontWeight: 500
// };

// const dataStyle = {
//   fontSize: '1.2em',
//   fontWeight: 500
// };

// const QuestsList = () => {
//   const renderRaise = React.useCallback(number => {
//     const isPositive = number > 0;
//     const isNegative = number < 0;
//     return (
//       <span style={{ paddingLeft: 15, color: isNegative ? 'red' : 'green' }}>
//         <span>{isPositive ? '+' : null}</span>
//         <span>{number}</span>
//       </span>
//     );
//   }, []);

//   return (
//     <List hover>
//       {data.map((item, index) => (
//         <List.Item key={item['title']} index={index + 1} style={{backgroundImage: `url(${elysiumBorder})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',}}>
//           <FlexboxGrid>
//             {/*icon*/}
//             <FlexboxGrid.Item colspan={2} style={styleCenter}>
//               {React.cloneElement(item['icon'], {
//                 style: {
//                   color: 'white',
//                   fontSize: '1.5em'
//                 }
//               })}
//             </FlexboxGrid.Item>
//             {/*base info*/}
//             <FlexboxGrid.Item
//               colspan={6}
//               style={{
//                 ...styleCenter,
//                 flexDirection: 'column',
//                 alignItems: 'flex-start',
//                 overflow: 'hidden',
                
//               }}
//             >
//               <div style={titleStyle}>{item['title']}</div>
//               <div style={slimText}>
//                 <div>
//                   <UserCircleIcon />
//                   {' ' + item['creator']}
//                 </div>
//                 <div>{item['date']}</div>
//               </div>
//             </FlexboxGrid.Item>
//             {/*peak data*/}
//             <FlexboxGrid.Item colspan={6} style={styleCenter}>
//               <div style={{ textAlign: 'right' }}>
//                 <div style={slimText}>XP</div>
//                 <div style={dataStyle}>{item['points'].toLocaleString()}</div>
//               </div>
//               {renderRaise(item['pointsRaise'])}
//             </FlexboxGrid.Item>
//             {/*uv data*/}
//             <FlexboxGrid.Item colspan={6} style={styleCenter}>
//               <div style={{ textAlign: 'right' }}>
//                 <div style={slimText}>Coins</div>
//                 <div style={dataStyle}>{item['coins'].toLocaleString()}</div>
//               </div>
//               {renderRaise(item['coinsRaise'])}
//             </FlexboxGrid.Item>
//             {/*uv data*/}
//             <FlexboxGrid.Item
//               colspan={4}
//               style={{
//                 ...styleCenter
//               }}
//             >
//               <a href="#">Join</a>
//               <span style={{ padding: 10, margin: '2em' }}>|</span>
//               <a href="#">Ignore</a>
//             </FlexboxGrid.Item>
//           </FlexboxGrid>
//         </List.Item>
//       ))}
//     </List>
//   );
// };

// export default QuestsList