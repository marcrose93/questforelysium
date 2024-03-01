



import React from 'react';
import { Accordion } from 'rsuite';
import { Button } from 'rsuite';

const tasksStyle = {
  color: 'grey',
  fontWeight: '800'
  
}

const CompleteButton = () => {
  return (
    <Button style={{
      marginTop: 10,
      padding: 10,
    }}color="cyan" appearance="ghost" block="true">Complete</Button>
  )
}

const Tasks = () => (
    <div style={{
      minWidth: '220px',
      margin: '2em',
      boxShadow: '10px 4px 18px black'
    }}>
      <Accordion defaultActiveKey={1} bordered style={tasksStyle}>
      <Accordion.Panel header="Create LLC" eventKey={1}>
        <ul>
          <li>
              Pay Registration Fee For Forms
          </li>
        </ul>
        <CompleteButton />
      </Accordion.Panel>
      <Accordion.Panel header="Get Car Serviced" eventKey={2}>
        Get Car Serviced
        <CompleteButton />
      </Accordion.Panel>
      <Accordion.Panel header="Schedule Dr. Appt" eventKey={3}>
        Call Dr. Ainsley 425-889-9278
        <CompleteButton />
      </Accordion.Panel>
    
    </Accordion>
    </div>
  
)

export default Tasks