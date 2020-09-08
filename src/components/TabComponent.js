 import React, { Component } from 'react'
 import{Tab, Tabs, TabList, TabPanel} from 'react-tabs'
 import TabDoor from './tabs_nav/TabDoor'
 import '../css/TabsNav.css'
 import TabDevises from './tabs_nav/TabDevises'
 export default class TabComponent extends Component {
     render() {
         return (
             <div>
                 <Tabs>
                     <TabList>
                         <Tab><TabDoor/> </Tab>
                         <Tab><TabDevises/> </Tab>
                         <Tab>Tab Link 3 </Tab>
                     </TabList>
                 </Tabs>
             </div>
         )
     }
 }
 