import React, {useEffect, useState} from "react";
import { JsonParser } from "./JsonParser";
import {Table} from "./Table"
import { TabList } from "./TabList";
import { Tabs } from '@navikt/ds-react';

export function Tab(props){
    let [tab] = useState(props.tab);
    const [value, setValue] = useState(props.value)

    const  openTab = function (evt, tabName) {
        // let targe = evt.target()
        // console.log(targe)
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i<tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i<tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //console.log("click:" + JSON.stringify(tabName))
        document.getElementById(tabName.name).style.display = "block";
        evt.currentTarget.className += " active";
        //return undefined;
    }
    
    const  openSideTab = function (evt, tabName) {
        // let targe = evt.target()
        // console.log(targe)
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("sideTabcontent");
        for (i = 0; i<tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("sideTablinks");
        for (i = 0; i<tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //console.log("click:" + JSON.stringify(tabName))
        document.getElementById(tabName.sideTabName).style.display = "block";
        evt.currentTarget.className += " active";
        //return undefined;
    }

    function log() {
        console.log("Inside Tab: " + tab['name'])
    }

    return(
        <>
        <Tabs.Tab
            value = {tab['name']}
            label = {tab['name']}
        >
        </Tabs.Tab>
        <Tabs.Panel
            value = {tab['name']}
        >
        {tab['data'][1].map((data,key) => {
                return (
                    <JsonParser data = {data}></JsonParser>
                )
            })}
             
    </Tabs.Panel>
        </>
    )
    
}
