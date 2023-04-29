import '../style/signin.css'
import axios from "axios"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function SingIn() {
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const loginuser = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/signin", { email, password })
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem("shweta", "myproject")
                localStorage.setItem("mytoken", res.data.data);
                window.alert("login sucesfull")
                navigate1("/");
            }).catch((err) => {
                console.log(err)
                window.alert("invalid credentials")

            })
    }
    return (<>
        <main>
            <section className="sec-first">
                <img src="https://img.freepik.com/free-photo/member-log-membership-username-password-concept_53876-101281.jpg?size=626&ext=jpg&ga=GA1.2.1784583415.1682756451&semt=robertav1_2_sidr" alt="" />
                <div className='logo'>
                    <h1 >Tuner</h1>
                    <div >Enjoy Multiple videos at one place</div>

                </div>
                <button onClick={() => navigate('/register')}>Register</button>
            </section>
            <section className="sec-second">
                <form className='formdata' method='POST'>
                    <h1>Sign In</h1>
                    <div>Sign in to continue!!</div><br />
                    <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <input type="password" name="passord" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                    <input className="submit" type="submit" name="signup" id="signup" value="Signin" onClick={loginuser}></input><br />
                </form>
            </section>
        </main>
    </>);
}
export default SingIn;