import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

import { MDBIcon } from 'mdbreact';
import './Nav2.css';

import React, { useState } from 'react';
import {
  MDBIcons,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Nav2() {
  const [iconsActive, setIconsActive] = useState('tab1');

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <>
    <header className='header'>
      <MDBTabs className='mb-3 custom-tabs'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
            <MDBIcon fas icon='chart-pie' className='me-2' /> Sales
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
            <MDBIcon fas icon='chart-line' className='me-2' /> Subscriptions
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
            <MDBIcon fas icon='cogs' className='me-2' /> Settings
          </MDBTabsLink>
        </MDBTabsItem>
       


      </MDBTabs>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>one click routing</h1>
      </div>      </header>
    
      {/* <MDBTabsContent>
        <MDBTabsPane show={iconsActive === 'tab1'}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent> */}
    </>
  );
}