import React, { useEffect, useState } from "react"
import "../style/upload.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import axios from "axios";
const Upload = ({ setOpen }) => {
    const [img, setImg] = useState(undefined)
    const [video, setVideo] = useState(undefined)
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };


    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
                console.log(imgPerc)
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },
            (error) => { },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => {
                        return { ...prev, [urlType]: downloadURL };
                    });
                });
            }
        );
    };
    useEffect(() => {
        video && uploadFile(video, "videoUrl");
    }, [video]);

    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const handleUpload = (e)=>{

        const newToken = localStorage.getItem("mytoken")

        axios.post("https://backend-5.onrender.com/upload",{...inputs,newToken})
        .then((res)=>{
            window.alert("video uploaded sucesfully")
            setOpen(false)
        }).catch((err)=>{
            console.log(err)
            window.alert("something went wrong")
 
        })

      }

    return (
        <div id="container">
            <div id="wrapper">
                <h2>Upload a New Video</h2>
                <div id="close" onClick={() => setOpen(false)}>X</div>
            </div>
            <div id="video-input">
                <label>Video: </label>
                {videoPerc > 0 ? (
                    "Uploading:" + videoPerc + "%"
                ) : (
                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideo(e.target.files[0])}
                    />
                )}
            </div>
            <h1>Name</h1>
            <textarea name="tittle" id="tittle-textarea" rows={1} onChange={handleChange}></textarea>
            <textarea name="desc" id="desc-textarea" rows={8} placeholder="Description" onChange={handleChange}></textarea>
            <div className="main-div">
                <div className="div-container" id="first-div">
                    <label htmlFor="">Category</label><br />
                    <select name="category" id="Catergory" onChange={handleChange}>
                        <option >Category</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Movie">Movie</option>
                    </select>
                </div>
                <div className="div-container">
                    <label htmlFor="">Visibility</label><br />
                    <select name="visibility" id="Public" onChange={handleChange}>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
            </div>
            <div id="img-input">
                <label>Thumbnail Image: </label>
                {imgPerc > 0 ? (
                    "Uploading:" + imgPerc + "%"
                ) : (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                )}
            </div>
            <button id="button-save" onClick={handleUpload}>Save</button>

        </div>
    )
}
export default Upload