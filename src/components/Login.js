import Header from "./Header";
import { useState } from "react";
// import  background from "../../public/netflix-background.jpg";


const Login = ()=>{

    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setSignInForm(!isSignInForm);
    }

    return(
        <div>
            <Header/>
            <div className="min-h-screen">
                
                <div className="absolute w-3/12 h-[520px] bg-black mx-auto left-0 right-0 p-1 my-auto top-0 bottom-0  bg-opacity-70 rounded-lg">
                        
                    <form className=" w-10/12 flex flex-col m-auto p-4 mt-6 text-white ">
                        <h1 className="font-bold p-2 mb-4 text-3xl text-white">{isSignInForm?"Sign In":"Sign Up"}</h1>
                       {isSignInForm &&  <input type="text" className="border border-solid border-gray-700 outline-none p-2 mx-2 my-4 bg-gray-700" placeholder="Full Name"/>}
                        <input type="text" className="border border-solid border-gray-700 outline-none p-2 mx-2 my-4 bg-gray-700" placeholder="Email"/>
                        <input type="text" className="border border-solid border-gray-700 p-2 mx-2 my-4 outline-none  bg-gray-700"  placeholder="Password"/>
                        <input type="submit" className="rounded-xl bg-red-500  p-2 mt-7 mx-2 text-white cursor-pointer"/>
                        <p className="my-6 p-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?(<>"New to Netflix-GPT?" <span className="underline">"then Sign Up"</span></>):"Already a user? then Sign In"}</p>
                    </form>
                </div>
                <img src="/netflix-background.jpg" alt=""/>
            </div>
        </div>
    );
}

export default Login;