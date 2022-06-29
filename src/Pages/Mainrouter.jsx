import React from 'react';
import {Routes , Route} from "react-router-dom";
import Todos from '../components/Todos';
import Singletodo from './Singletodo';

const Mainrouter = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/:id" element={<Singletodo />} />
        </Routes>
    </div>
  )
}

export default Mainrouter;