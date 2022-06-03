import './landing-page.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const LandingPage = () => {
    return (
        <div className='landing-page-container' style={{height:"100vh"}}>
            <div className='auth-page'>
                <SignIn />
            </div>
        </div>
    );
}

export default LandingPage;