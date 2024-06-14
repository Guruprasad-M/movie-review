import React from 'react'
import { auth,provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import  './Login.css'
export default function Login({setIsAuth}) {
const navigate=useNavigate()
  const SignInWithGoogle=()=>{
    signInWithPopup(auth, provider)
    .then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/a");
    })
    .catch(error => {
      window.alert("Please Try again" + error.message);

    });
   }
  
  return (
    <div className='full'>
    <div className='leftSection'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4Bj2vG6uzDUedl4zz2m1fIsj8bL33nX_0g&usqp=CAU'></img>
</div>
    <div className='rightSection'>
      <div className='horo'>
      <p >Embark on a Cinematic Odyssey: Exploring the World of Movie Reviews</p>
      </div>
        <p>Sign in</p>
        <button onClick={SignInWithGoogle} className='button-78'>Sign in with Google</button>
    </div>
    </div>
  )
}

