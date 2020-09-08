 import React, { Component } from 'react'
 import{Tab, Tabs, TabList, TabPanel} from 'react-tabs'
 export default class TabComponent extends Component {
     render() {
         return (
             <div>
                 <Tabs>
                     <TabList>
                         <Tab>Tab Link 1 </Tab>
                         <Tab>Tab Link 3 </Tab>
                         <Tab>Tab Link 3 </Tab>
                     </TabList>
                 </Tabs>
             </div>
         )
     }
 }
 