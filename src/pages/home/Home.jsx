import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import "./home.scss"
import Widget from '../../components/Widget/Widget';

const Home = () => {
  return (
    <div className="home">
      
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        
        <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
        </div>

        <div className="charts">

        </div>
      </div>
      
      </div>
  )
}

export default Home