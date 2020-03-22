import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 

const Header = props => (
    <>
        <p>Header</p>
        <NavLink to="/">Ссылка домой</NavLink>
        <br />
        <NavLink to="/article">Ссылка на артикль</NavLink>
    </> 
)

export default Header