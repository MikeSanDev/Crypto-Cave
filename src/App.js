import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
// To take multiple components from the components folder - create an index.js inside the component folder
// insert this into index.js => import { default as Navbar } from './Navbar';
// Then import each component with {} from './components'
import { Navbar } from './components'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>

            </div>
            <div className='footer'>

            </div>
        </div>
    )
}
export default App;
