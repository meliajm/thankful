import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'

const NavBar = ({ currentUser }) => {
    return (
        <nav className="nav">
            { Object.keys(currentUser).length > 0 ? <><h3 className="logout"> Welcome, {currentUser.username}!</h3> <Logout/>
            <br/>
            <h3 className="home"><Link to='/'>Home</Link></h3>
            <h3 className="entries"><Link to='/entries'>Entries</Link></h3>

            </> :
             <>
             <h3 className="logout">
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