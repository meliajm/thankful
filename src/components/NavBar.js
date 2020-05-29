import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'

const NavBar = ({ currentUser }) => {
    return (
        <nav className="nav">
            { Object.keys(currentUser).length > 0 ? <><h3> Welcome, {currentUser.username}! <Logout/></h3> 
            <h3><Link to='/'>Home</Link>   <Link to='/entries'>Entries</Link></h3>
            <h3></h3>

            </> :
             <>
             <h3 className="nav">
             <Link to='/login'>Log In</Link>
             </h3>
             </>
            }
        </nav>
    )
}

const mapStateToProps = ({ currentUser }) =>{
    return {
        currentUser,
    }
}

export default connect(mapStateToProps)(NavBar)