import { Link } from 'react-router-dom';
import React from 'react'

const buttn = {
    color: 'red',
    textDecoration: 'none',
    padding: '10px',
    marginTop: '20px',
    background: 'rgb(36 34 34 / 30%)',
    border: 'none',
    cursor: 'pointer'
}

export default function NotFound() {
  return (
    <div style={{width:'100vw',height:'100vh',background:'#000',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1em',color:'white',flexDirection:'column'}}>
        <div style={{fontSize:'16em'}}>404</div>
        <div style={{fontSize:'4em',color:'#777'}}>Oops !</div>
        <div style={{fontSize:'3em',color:'yellow'}}>The Page You're looking for isn't here</div>
        <Link to="/"><button style={buttn}>Go to Homepage</button></Link>
    </div>
  )
}
