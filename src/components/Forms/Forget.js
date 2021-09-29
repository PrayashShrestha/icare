import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../../Firebase';
import './Forget.css';

const Forget = () => {

    const emailRef = useRef("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.sendPasswordResetEmail(emailRef.current.value).then(() => {
                alert("Email has been sent to you, Please Check and verify");
                history.push("/signin");
            }).catch(err => {
                alert(err);
            });
        }
        catch (err) {
            alert(err);
        }

    };
    return (
        <div className="forgetPassword">
            <div className="forgetPassword__container">
                <h1>Please enter your registered email address</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" className="forgetPassword__inp" placeholder="address@gamil.com" ref={emailRef} />
                    <button className="forgetPassword__btn">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default Forget;
