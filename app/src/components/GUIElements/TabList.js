import {Tab} from './Tab';
import React, {useEffect, useState} from "react";
import {JsonParser} from './JsonParser';
import { Tabs } from '@navikt/ds-react';
import {Nav} from 'react-bootstrap'
import './CSS/TabList.css'
import {Styles} from './CSS/TabStyling';

export function TabList(props){
    
    let [tabs] = useState(props.tabs);
    const [value, setValue] = useState(props.tabs['data'][1][0]['name']+0)

    function log(){
    console.log("Inside TabList")
    console.log(tabs)
    }

    function log2() {
      console.log("SideTab")
      console.log(tabs)
    }
    if(tabs['position'] == "TOP") {
        return(
          <>
            <Tabs value = {value} onChange={setValue} >
              <Tabs.List

              >
                {tabs['data'][1].map((data,key) => { //Creating header buttons for each Tab
                  return (
                    <Tabs.Tab
                    style={{
                      backgroundColor: value === data['name']+key ? "white": "#a8a1a6",
                      borderLeft: '1px solid grey',
                      borderRight: '1px solid grey',
                      borderTop: '1px solid grey',
                      borderBottom: value === data['name']+key ? "": "1px solid grey",
                      borderRadius: '10px 10px 1px 1px',
                      width: '200px',
                      height: '50px',
                      overflow:'hidden'
                    }}
                  
                      value = {data['name']+key}
                      label = {data['name']}
                      key = {key}
                      id = {data['name'] + '-tab'} //Creating references from header button to tab content
                      aria-controls = {data['name'] + '-panel'}
                      >
                    </Tabs.Tab>
                  )
                })}
              </Tabs.List>
            </Tabs>
            {tabs['data'][1].map((data,key) => { //Creating div for each tab with reference to header button
              return (
                <div
                  role = "tabpanel"
                  hidden = {value !== data['name']+key }
                  aria-labelledby = {data['name'] + '-tab'}
                  key = {key}
                  id = {data['name'] + '-panel'}
                >
                  <JsonParser data = {data}></JsonParser> {/*Sending tab content back to parser function*/}
                </div>
              )
            })}
          </>
        );
    } else if(tabs['position'] == "SIDE") {
        return(
          <div className='sidetab-container'>
            <div className="sidetab-menu-container">
              {tabs['data'][1].map((data,key) => {
                return (
                  <div 
                    className = "sidetab-button"
                    onClick={() => setValue(data['name']+key)}
                    key = {key}
                    id = {data['name'] + '-tab'} //Creating references from header button to tab content
                    aria-controls = {data['name'] + '-panel'}
                  >
                    {data['name']}
                  </div>
                )
              })}
            </div>
            <div className='sidetab-content-container'>
              {tabs['data'][1].map((data,key) => {
                return (
                  <div 
                    role = "tabpanel"
                    hidden = {value !== data['name']+key }
                    aria-labelledby = {data['name'] + '-tab'}
                    key = {key}
                    id = {data['name'] + '-panel'}>
                      <JsonParser data = {data}></JsonParser> {/*Sending tab content back to parser function*/}
                  </div>
                )
              })}
              </div>
            </div>
        );
    }

}