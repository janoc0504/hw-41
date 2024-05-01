import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormPage from './Pages/FormPage';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<FormPage />} />
        </Routes>
    );
}

export default App;