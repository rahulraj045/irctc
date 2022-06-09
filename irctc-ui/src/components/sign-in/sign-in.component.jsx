import './sign-in.styles.scss';


import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

        
const SignIn = ({handleSubmit, handleChange, formFields}) => { 

    const {email, password} = formFields;

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