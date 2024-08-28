import Header from "./Header";
import { useState, useRef } from "react";
import { formValidation } from "../utils/validate";
import { hangleSignInWithGoogle } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        const validMessage = formValidation(email.current.value, password.current.value);
        setMessage(validMessage);
        if (validMessage) return;

        if (!isSignInForm) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: LOGO,
                      }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));

                      }).catch((error) => {
                        setMessage(error);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setMessage(errorMessage);

                });


        }
        else {
            //SignIn Logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage);
                });
        }


    }

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="min-h-screen">

                <div className="absolute w-3/12 h-[580px] bg-black mx-auto left-0 right-0 p-1 my-auto top-0 bottom-0  bg-opacity-70 rounded-lg">

                    <form className=" w-10/12 flex flex-col m-auto p-4 mt-6 text-white " onSubmit={(e) => e.preventDefault()}>
                        <h1 className="font-bold p-2 mb-4 text-3xl text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                        {!isSignInForm && <input type="text" ref={name} className="border border-solid border-gray-700 outline-none p-2 mx-2 my-4 bg-gray-700" placeholder="Full Name" />}
                        <input type="email" ref={email} className="border border-solid border-gray-700 outline-none p-2 mx-2 my-4 bg-gray-700" placeholder="Email" />
                        <input type="password" ref={password} className="border border-solid border-gray-700 p-2 mx-2 my-4 outline-none  bg-gray-700" placeholder="Password" />
                        <p className="text-red-600 mx-2">{message}</p>
                        <input type="submit" className="rounded-xl bg-red-500  p-2 mt-7 mx-2 text-black cursor-pointer hover:text-white" onClick={handleButtonClick} />
                        <input type="submit" value="Google" className="rounded-xl bg-yellow-400  p-2 mt-7 mx-2 text-gray-700 cursor-pointer hover:text-white" onClick={hangleSignInWithGoogle} />
                        <p className="my-6 p-2 cursor-pointer hover:text-red-600" onClick={toggleSignInForm}>{isSignInForm ? (<>New to Netflix-GPT? <span className="underline">then Sign Up</span></>) : <>Already a user? <span className="underline">then Sign In</span></>}</p>
                    </form>
                </div>
                <img src="/netflix-background.jpg" alt="" />
            </div>
        </div>
    );
}

export default Login;