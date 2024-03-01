import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Potion from '../images/potion.png'
import Potion2 from '../images/potion2.png'
import Potion3 from '../images/potion3.png'
import Coins from '../images/coins.png'
import MagicDust from '../images/magicDust.png'
import Crown from '../images/crown.png'
import Feather from '../images/feather.png'
import Necklace from '../images/necklace.png'
import Spellbook from '../images/spellbook.png'
import Sword from '../images/sword.png'
import Compass from '../images/compass.png'




const Grid = () => {
  const initalLayout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1, image: Potion, initialCount: 2 },
    // { i: "b", x: 1, y: 0, w: 1, h: 1, minW: 2, maxW: 4 },
    { i: "b", x: 0, y: 1, w: 1, h: 1, image: Potion2}, /* locks cell in place so it can't be widened or shrunk */
    { i: "c", x: 0, y: 2, w: 1, h: 1, image: Potion3}, /* check why the static isn't working */
    { i: "d", x: 1, y: 0, w: 1, h: 1, image: Coins, initialCount: 2000 },
    { i: "e", x: 1, y: 1, w: 1, h: 1, image: MagicDust },
    { i: "f", x: 1, y: 2, w: 1, h: 1, image: Crown},
    { i: "g", x: 2, y: 0, w: 1, h: 1, image: Feather},
    { i: "h", x: 2, y: 1, w: 1, h: 1, image: Necklace},
    { i: "i", x: 2, y: 2, w: 1, h: 1, image: Spellbook },
    { i: "j", x: 3, y: 1, w: 1, h: 1, image: Sword },
    { i: "k", x: 3, y: 1, w: 1, h: 1, image: Compass },
    // { i: "l", x: 3, y: 1, w: 1, h: 1 },
  ];

  

  let [layout, setLayout] = useState(initalLayout);
  let [key, setKey] = useState("h"); /*figure out how this applies and changes things */
  useEffect(() => {
    console.log("Layout:", layout);
  }, [layout]); /* DEPENDENCY ARRAY */

  const layoutChange = (layout) => {
    console.log(layout);
  };

  const incrementChar = (c) => {
    setKey(String.fromCharCode(c.charCodeAt(0) + 1));
  };

  /*layout is the initial configuration of the grid
  - layoutItem is the item being dropped onto the grid
  -  */

  const dropHandler = (layout, layoutItem) => {
    console.log("Drop Handler called");

    let item = layoutItem; /* creates a new variable 'item' and assigns it the value of 'layoutItem, this is what will be added to the grid */
    item.i = key; /* creates unique key identifier to the new item to ensure that each item added to the grid has it's own, important for managing the state of the grid layout */
    console.log(JSON.stringify(layoutItem, ["x", "y", "w", "h"], 2)); /* the TWO represents the indentation level of the output string, which is the layoutItem interpolated into the array */
    setLayout((initial) => [...initial, item]); /* updates layout state of the grid, using setLayout function to update state; so you're adding the item to the initial layout and all its props  */
    incrementChar(key); /* */
  };

  return (
    // <div>
      // <div
        // className="droppable-element"
        // draggable={true}
        // unselectable="on" /* this is so the text inside the div is not selected by the user while dragging */
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
      //   onDragStart={(e) => e.dataTransfer.setData("text/plain", "")} /* event handler; triggered when the drag operation beings; sets data to be transferred during tghe dnd; sets an empty string as the data type ( where does that data go? ) */
      // >
      //   Droppable Element (Drag me!)
      // </div>
      <div style={{
        minWidth: '220px',
        margin: '2em',
        boxShadow: '10px 4px 18px black',

        

 
      }}>
        <GridLayout
        className="layout"
        layout={layout}
        autosize={true}
        onLayoutChange={layoutChange}
        onDrop={dropHandler}
        isDroppable={true}
        cols={4}
        rowHeight={40}
        width={200}
        margin={[10,10]}
        containerPadding={[10, 10]}
        isResizable={false}
        // allowOverlap={true}
        preventCollision={true}
        


        
        
        
      >
        {layout.map((item) => (
          <div key={item.i} style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'black',
            cursor: 'pointer'
          }}>{item.initialCount}</div>
        ))}
        
      </GridLayout>
   
      </div>
  );
};

export default Grid;