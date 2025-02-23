import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';


function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />}/>
            </Routes>
        </Router>
    )
}

export default App;