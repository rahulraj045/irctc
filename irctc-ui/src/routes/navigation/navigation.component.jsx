import { Fragment } from 'react';
import './navigation.styles.scss';
import { ReactComponent as Railway } from '../../assets/railways.svg'
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation-container'>

                <div className='options'>
                    <a className='option' href='https://www.irctc.co.in/nget/train-search'>HOME</a>
                </div> 
                <div className='nav-centre-group'>
                    <Link className='railway-logo-container' to='/'>
                    <Railway className='railway-logo' /> 
                    </Link>
                    <div className='navigation-title'>
                        <h1>WELCOME TO TICKET VALIDATION PORTAL</h1>
                    </div>  
                    <Link className='irctc-logo-container' to='/'>
                        <img src={require('../../assets/logo.png')} alt='logo' />
                    </Link>
                </div>
            </div>
            
            <Outlet />
        </Fragment>    
    );
};

export default Navigation;