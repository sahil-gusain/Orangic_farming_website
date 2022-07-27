import React from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css' 
const Navbar = () => {
  return (
    <>
     <nav className='main-nav'>
        <div className='Logo'>
            <h1><span>O</span>rganic  <span>F</span>arming</h1>
        </div>
        <div className='menulink'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                 {/* <Link to='./component/login'>login</Link> */}
                <li>
                    <a href='./pages/contact.js'>about us</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar