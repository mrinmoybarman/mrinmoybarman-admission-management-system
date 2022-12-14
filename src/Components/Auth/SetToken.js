import React from 'react'

function SetToken(token) {
  localStorage.setItem('token',token);
  localStorage.setItem('time',time);
  return true;
}

export default SetToken