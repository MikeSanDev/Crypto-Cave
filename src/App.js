import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
// To take multiple components from the components folder - create an index.js inside the component folder
// insert this into index.js => import { default as Navbar } from './Navbar';
// Then import each component with {} from './components'
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'
import './App.css'
import 'antd/dist/reset.css';

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/exchanges' element={<Exchanges />} />
                        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                        <Route path='/crypto/:coinID' element={<CryptoDetails />} />
                        <Route path='/news' element={<News />} />
                    </Routes>
                    </div>
                </Layout>
            <div className='footer'>
                <Typography.Title  level={5} style={{ color: 'white', textAlign: 'center'}}>
                    Crypto Cave <br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
        </div>
    </div>
    )
}
export default App;
