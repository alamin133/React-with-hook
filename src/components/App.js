import React from 'react'
import List from './List'


const lists=[
    {
        title:'whats your name?',
        content:'Some One'
    },
    {
        title:'what you do?',
        content:'junior full stack developer'
    },
    {
        title:'where are you from?',
        content:'i am from anywhere,sylhet'
    },
    {
        title:'why we should hire you?',
        content:'i am confidence enough to delivering what company needs from me'
    }
]


const App =()=>{
    return<div><List lists={lists}/></div>
}

export default App