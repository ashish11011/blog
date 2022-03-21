import React , {useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

function CreatePost(isAuth){
    const [title, setTitle] = React.useState("");
    const [postText, setPostText] = React.useState("");

    const postCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const creatPost = async () =>{
        await addDoc(postCollectionRef, {title, postText, auther:{name: auth.currentUser.displayName ,id: auth.currentUser.uid}})
        navigate('/');
    };

    
    useEffect(() =>{
        if (!isAuth) {
            navigate('/login');
        }
    }, []);

    return (
    <div className='createPostPage' >
        <div className='cpContainer' >
            <h1>Create a post</h1>
            <div className='inputGp' >
                <lable>Title:</lable>
                <input placeholder='Title...' onChange={(event) =>{
                    setTitle(event.target.value)
                }} />
            </div>
            <div className='inputGp' >
                <label>Post:</label>
                <textarea placeholder='Post...' onChange={(event) =>{
                    setPostText(event.target.value)
                }} />
            </div>
            <button onClick={creatPost} >Submit Post</button>
        </div>
    </div>)
}

export default CreatePost;