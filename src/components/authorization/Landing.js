import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/register'>
                    <button>Create Account</button>
                </Link>
                <Link>
                    <button>Logout</button>
                </Link>
            </div>
        )
    }
}

export default Landing