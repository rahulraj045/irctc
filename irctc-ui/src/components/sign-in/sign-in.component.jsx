import { useState } from 'react';
import './sign-in.styles.scss';

import axios from 'axios';

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';


const defaultFormFields = {
    email: '',
    password: '',  
};

        
const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    

    const handleSubmit = async event => {

        await axios.post('http://127.0.0.1:5000/login',
        {
            "email": formFields.email,
            "password": formFields.password 
        }
        )
        .then(response => {console.log(response.data); })   
        .catch(error => console.log(error))
        
        resetFormFields();
    };

    
    const handleChange = event => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    
    

    return (
        <div className='auth-box'>
            <div className='box-nav-bar'> 
                <div className='nav-bar-title' style={{fontSize: "30px", fontWeight: "bolder", color: "#082b71"}}>Login</div>
            </div>
            <div className='form-container'>
                <div className='sign-in'>
                    <h2>Login in with your Email and Password</h2>
                    <div className="imgcontainer">
                        <img src={require('../../assets/login_img.png')} alt="Avatar" className="avatar" />
                    </div>      
                    <form>
                        <FormInput
                            name='email' 
                            type="email" 
                            label="Email"
                            handleChange={handleChange} 
                            value={email} 
                            required 
                        />
                        
                        <FormInput 
                            name='password' 
                            type="password" 
                            label="Password"
                            handleChange={handleChange}
                            value={password} 
                            required 
                        />
                        <div className='buttons-container'>
                            <CustomButton type="button" onClick={handleSubmit} > Sign In </CustomButton> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
};

export default SignIn;