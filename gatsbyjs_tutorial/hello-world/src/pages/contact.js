import React from 'react'
import Header from '../components/header'
import {Link} from 'gatsby'

export default () => (
  <div style={{color: 'purple'}}>
    <Link to="/">Home</Link> | <Link to="/about/">About</Link>
    <Header headerText="Contact"/>
    <p>Send us a message</p>
  </div>
)
