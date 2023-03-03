import login from './login.css'

const Login = ()=>{
    return(
        <>
    <div className="container">
        <form className="form" id="login"  method="post" action="login.php">
        <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error">
        </div>
            <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="username" name="username" maxlength="25"/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="password" name="password" maxlength="25" />
                <div className="form__input-error-message"></div>
            </div>
            <button name="btn" className="form__button" type="submit">Countinue</button>
                <p className="form__text">
                    <a href="#" className="form__link"></a>
                </p>
                <p className="form__text">
                    {/* <a className="form__link" href="signup.php" >Sign Up</a> */}
                   <center><p  id="no"></p></center>
                </p> 
        </form>
    </div>
     
    

        </>

    );
}

export default Login;