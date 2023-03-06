import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { auth } from "../config/config";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const Navbar = ({user}) => {

    const history = useNavigate();

    const logout = () =>{
        auth.signOut().then(()=>{
            history('/login');
        })
    }

  return (
    <div className="hero">

        <nav className="navbar navbar-light bg-transparent navbar-expand-md bg-faded justify-content-center">
            <div className="navbar-brand d-flex w-50 mr-auto logo" > <Link to='/' className="buttonNav"> NBA <span className="logo2">Store</span> </Link></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                
            {!user && <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                   <li className="nav-item">
                        <button className="button"><Link to='/login' className='link'>Login</Link></button>
                    </li>
                    <li className="nav-item">
                        <button className="button"><Link to='/signup' className='link'>Signup</Link></button>
                    </li>
                </ul>}
                {user && <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="name">{user}</li>
                        <li><button className="button"><Link to='/signup' className='link'><AddShoppingCartIcon/></Link></button></li>

                        <li><button className="button"><Link to='/signup' onClick={logout} className='link'>LogOut</Link></button></li>
                    </ul>}

            </div>
        </nav>


    </div>


);
};
