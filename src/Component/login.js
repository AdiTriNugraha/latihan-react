import React from 'react';
import './login.css'

const Login = () => {
    return (

                      <body>
   
                        <div className="login-box">
                        <h1>Login</h1>
                        
                                <div className="textbox">
                                    <input type="text" place holder="Username" className="form-control" />
                                </div>
                                
                                <div className="textbox">
                                    <input  type="password"placeholder="password" className="form-control" />
                                    </div>

                                <div className="button mt-3">
                                <button type="button" class="btn btn-outline-success">Success</button>
                                
                                </div>
                                </div>   
                            
                     
                </body>
            
       
    )
}

export default Login;