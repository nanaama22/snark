import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import './layout.css'

export const Layout = () => {
     return (
          <div className="layout">
               <Sidebar />
               <div className="layout-content">
                    <Routes>
                         <Route path='/' element={<Home />}/>
                    </Routes>
               </div>
          </div>
     );
};
