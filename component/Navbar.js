import "../style/style.css"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import Upload from "./Upload";
import axios from "axios";
// https://backend-5.onrender.com/logout
// https://one0x-vsp-xddd.onrender.com   //main(no database connect)


function Navbar() {
    const [toggle,setToggle] = useState(false);
    const [open,setOpen] = useState(false)
    const [q,setQ] = useState("");
  const navigateResgister = useNavigate();
  const navigateSignIn = useNavigate();
  const nav1 = useNavigate();
  const nav2 = useNavigate();
  const nav3 = useNavigate();
  const nav4 = useNavigate();
  const token=localStorage.getItem("mytoken");


  useEffect(()=>{
    if(token){
      setToggle(true)
    }else{
      setToggle(false)
    }
    
   },[token])

   const handleSignout=async ()=>{
    const newToken=localStorage.getItem("mytoken")
    console.log(newToken)
    axios.post("http://localhost:8080/logout",{newToken})
        .then((res)=>{
          if(res.status==200){
            window.alert("logout sucessfully")
            localStorage.clear()
            setToggle(false)
            nav3("/")
            
           }
        }).catch((err)=>{
            console.log(err)
            window.alert("error in signout")

        })
    
   }
 
  
  return (<>
  {!toggle?
    <nav>
      <div className="Container">
        <h1 className="heading" onClick={()=>{nav4("/")}} >Tuner</h1>
        <div> <input placeholder="Search" className="input" type="text" onChange={(e)=>setQ(e.target.value)}/></div>
        <div className="search-btn1" onClick={()=>nav2(`/search?q=${q}`)}><img className="images" src="https://icon-library.com/images/blue-search-icon/blue-search-icon-23.jpg" alt="Search" /></div>
        <div className="btn-1" onClick={() => { navigateSignIn('/sign') }}>Login</div>
        <div className="com-btn">|</div>
        <div className="btn-2" onClick={() => { navigateResgister('/register') }} > Register</div>
        
      </div>
    </nav>: <>
    <nav>
      <div className="Container">
        <h1 className="heading" onClick={()=>{nav4("/")}}>Tuner</h1>
       <div> <input placeholder="Search" className="input1" type="text" onChange={(e)=>setQ(e.target.value)}/></div>
        <div  className="search-btn" onClick={()=>nav2(`/search?q=${q}`)}><img className="images" src="https://icon-library.com/images/blue-search-icon/blue-search-icon-23.jpg" alt="Search" /></div>
        <div className="btn-3" onClick={()=>{nav1("/myvideos")}}>My Videos</div>
        <div className="com-btn">|</div>
       
        <div className="btn-4" onClick={()=>setOpen(true)}>Upload</div>
        
        <span className="com-btn">|</span>
        <div className="btn-5" onClick={handleSignout} >Sign out</div>
       
       
      </div>
    </nav>
    {open && <Upload setOpen={setOpen}/>}
    </>
    }
  </>);
}

export default Navbar;