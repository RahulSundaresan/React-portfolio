import React from 'react'

const Footer = () => {
    const today=new Date()
    return (
      <footer className='footer'> 
        <p>Copyright &copy;{today.getFullYear()}</p>
        <p>Designed by Rahul Sundaresan</p>
      </footer>
    )
}

export default Footer