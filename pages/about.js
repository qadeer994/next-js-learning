import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
function About() {
return (
<>
<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
 <div class="login-form">
        <div class="container">
            <div class="login-heading">
                <h3>Log In</h3>
            </div>
            <form method="POST" action="#">

                <div class="form-start">
                    <div class="card">
                        
                       
                        <div class="row">
                            <div class="col-lg-12">
                                <label>Email Address</label>
                            </div>
                            <div class="col-lg-12">
                                <input type="email" class="form-control " name="email" value="" required autocomplete="email"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <label>Password</label>
                            </div>
                            <div class="col-lg-12">
                                <input type="password" class="form-control " name="password"  required autocomplete="off"/>
                            </div>
                        </div>
                        <div class="forgot-pswrd">
                            <a href="#">
                                <button type="button" class="btn">
                                    Forgot password?
                                </button>
                            </a>
                        </div>
                        <div class="or">
                            <div class="row">
                                <div class="col-lg-5 col-md-5">
                                    <hr />
                                </div>
                                <div class="col-lg-2 col-md-2">
                                    <p>Or</p>
                                </div>
                                <div class="col-lg-5 col-md-5">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div class="account-btn">
                            <div class="row">
                                <div class="col-lg-5 col-md-5">
                                    <a href="#"><button type="button" class="btn btn-google">Use Google <img src="{{ asset('images/google-icon.svg') }}" width="22" /></button></a>
                                </div>
                                <div class="col-lg-2 col-md-2">
                                    <p></p>
                                </div>
                                <div class="col-lg-5 col-md-5">
                                    <a href="#"><button type="button" class="btn btn-linkedin">Use Linkedin <i class="fa fa-linkedin" aria-hidden="true"></i></button></a>
                                </div>
                            </div>
                        </div>
                        <div class="full-width-btn">
                            <button type="submit" class="btn login-btn ">Log In</button>
                        </div>
                        <div class="already-account">
                            <p>Don’t have an account? <a href="#"><button type="button" class="btn">Sign Up</button></a></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</>
);
}
export default About;