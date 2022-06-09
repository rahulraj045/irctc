import { useState } from 'react';
import './landing-page.styles.scss';

import axios from 'axios';

import SignIn from '../../components/sign-in/sign-in.component';
import UserDisplay from '../../components/user-display/user-display.component';

const defaultFormFields = {
    email: '',
    password: '',  
};

const LandingPage = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [userData, setUserData] = useState({})
    const [displayData, setDisplayData] = useState(false)
    const {email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    

    const handleSubmit = async event => {

        await axios.post('http://127.0.0.1:5000/login',
        {
            "email": email,
            "password": password 
        }
        )
        .then(response => {setUserData(response.data); console.log(response.data)})
        .catch(error => console.log(error))
        
        resetFormFields();
        setDisplayData(true)
    };

    
    const handleChange = event => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className='landing-page-container' style={{height:"100vh"}}>
            <div className='auth-page'>
            {   displayData ?
                <UserDisplay userData={userData} setDisplayData={setDisplayData}/>
                :
                <SignIn handleSubmit={handleSubmit} handleChange={handleChange} formFields={formFields} />
            }   
            </div>
        </div>
    );
}

export default LandingPage;