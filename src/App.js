import React,{useContext} from 'react'
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom";
import Home from './Screens/Home'
import {useAppContext} from './components/UsingContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {AppProvider} from './components/UsingContext'


function AppRouter() {
  const {isSidebarOpen}=useAppContext();

  
  
  return (  
      <>
      {isSidebarOpen && <Sidebar /> }
      <Navbar/>
      
      
      <Switch>

        <Route path="/" component={Home} />

      </Switch>
      </>

  )
}

export default AppRouter



