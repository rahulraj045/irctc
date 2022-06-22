import { useEffect, useState } from 'react';
import './landing-page.styles.scss';

import axios from 'axios';

import SignIn from '../../components/sign-in/sign-in.component';
import UserDisplay from '../../components/user-display/user-display.component';
import TcDisplay from '../../components/tc-display/tc-display.component';

const defaultFormFields = {
    email: '',
    password: '',  
};

const LandingPage = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [userData, setUserData] = useState({})
    const [displayData, setDisplayData] = useState('')
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
        .then(response => {setUserData(response.data);setDisplayData(userData.type); console.log(response.data)})
        .catch(error => console.log(error))
        
        localStorage.setItem("email", email);

        resetFormFields();
        
                
    };

    useEffect(() => {
        if (userData.type === 'passenger'){
            setDisplayData('passenger') 
        }else if (userData.type === 'tc'){
            setDisplayData('tc')
        }
        // console.log(userData)
    }, [userData])

    const handleExit = () => {
        localStorage.removeItem("email");
        setDisplayData('');
    }
    
    const showDisplayType = (displayData) => {
        switch(displayData){
            case 'passenger':
                return <UserDisplay userData={userData} setUserData={setUserData} handleExit={handleExit}/>
            case 'tc':
                return <TcDisplay userData={userData} handleExit={handleExit}/>
            default:
                return <SignIn handleSubmit={handleSubmit} handleChange={handleChange} formFields={formFields} />
        }
    }
    

    
    const handleChange = event => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className='landing-page-container' style={{height:"100vh"}}>
            <div className='auth-page'>
            {  
                showDisplayType(displayData)
            }   
            </div>
        </div>
    );
}

export default LandingPage;