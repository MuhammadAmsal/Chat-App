import React from 'react'
import addIcon from '../images/picIcon.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useState } from 'react';

function Register() {
const [err,setErr]=useState(false)
// const [user,setUser]=useState()

// console.log(user)

//   const handleSubmit=async(e)=>{
//       e.preventDefault()
//       const displayName=e.target[0].value
//       const email=e.target[1].value
//       const password=e.target[2].value
//       const file=e.target[3].files[0]
//       console.log(file)


// try{
//   const res=  await createUserWithEmailAndPassword(auth, email, password);
//   console.log(res.user.uid)

 
//   const storageRef = ref(storage, displayName);
  
//   const uploadTask = uploadBytesResumable(storageRef, file);
  
 
//   uploadTask.on('state_changed', 
     
//     (error) => {
//       setErr(true)
//     }, 
//     () => {
      
//       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//         console.log("imageurl",downloadURL)
//          await updateProfile(res.user,{
//           displayName,
//           photoURL:downloadURL
//          })
//                   console.log(res.user)
//          await setDoc(doc(db, "users", res.user.uid), {
//           uid:res.user.uid,
//           displayName,
//           email,
//           photoURL: downloadURL
//          });
          


//       });


//     }
//   );

  
  


// }catch(err){
//    setErr(true)
// }
       
//   }

const handleSubmit=async (e)=>{
e.preventDefault()
const displayName=e.target[0].value
  const email=e.target[1].value
  const password=e.target[2].value
  const file=e.target[3].files[0]

  createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
     const user = userCredential.user;
       console.log(user)
       
       await setDoc(doc(db, "users", user.uid), {
        userName:displayName,
        email:user.email,
    
     });

     setErr(false)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });

 
  
  
 



}

  return (
    <div className='formContainer' >
      <div className='formWrapper' >
      <span className='logo' >Chat App</span>
      <span className='title'>Register</span>
       <form onSubmit={handleSubmit} >
        <input type='text' placeholder='Display Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input style={{display:"none"}} type='file' id='file' />
        <label htmlFor='file' >
        <img src={addIcon} alt=''/>
        <span>Add an Img</span>
        </label>
        <button >Sign up</button>
        {err&&<span>Something went wrong</span>}
       </form>
       <p>You do have an account? login</p>
      </div>
    </div>
  )
}

export default Register
