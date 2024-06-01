import React from 'react'

const Nav = ({Nav="nav",...proxy}) => {
  return (
   <Nav {...proxy}>
    <h1>Keeper App</h1>
   </Nav>
  )
}

export default Nav