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
        axios.post("https://backend-5.onrender.com/signin", { email, password })
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem("ranjit", "mera name")
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
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2022-05/6/11/campaign_images/9615c13b38f0/the-47-best-mother-son-movies-to-watch-on-mothers-2-1448-1651836261-30_dblbig.jpg?resize=1200:*" alt="" />
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