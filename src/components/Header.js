import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ACC, LOGO } from "../utils/constants";
import {toggleGPTSerachView} from "../utils/gptSlice";



const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });

    }

    const handleGptSearchView = ()=>{
        console.log("btn clicked");
        dispatch(toggleGPTSerachView());
    }

    useEffect(() => {

        const unSubscribeOnAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                // navigate("/browse");
                if (!location.pathname.startsWith("/browse/movieDetails")) {
                    navigate("/browse");
                }
                console.log(user);
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return ()=>unSubscribeOnAuth();
    }, [])


    return (
        <div>
            <div className="absolute px-8 py-8 bg-gradient-to-b from-black w-full flex justify-between z-50">
                <img src={LOGO} alt="Netflix-Logo" className="w-80" />
                <div className="flex gap-5 justify-center items-center">
                {location.pathname.startsWith("/browse/movieDetails")?<Link to="/browse"><button className=" bg-red-700 p-2 rounded-lg font-semibold text-lg hover:bg-red-500 text-white">Home</button></Link>:""}
                {user && <button onClick={handleGptSearchView} className="text-white bg-purple-700 font-semibold p-2 rounded-lg hover:bg-purple-900">GPT Search</button>}
                {user && <div className=" group">
                    {/* <button className="mx-4 font-bold text-xl hover:text-red-600" onClick={handleSignOut}>Sign Out</button> */}
                    
                    
                    <img src={ACC} alt="account" className="w-10 p-1 transform transition-transform duration-300 hover:rotate-180 cursor-pointer" />
                    
                    {/* hover Section */}
                    <div className="absolute right-6 w-48 h-36  top-[75px] text-white  bg-black bg-opacity-50 opacity-0 pointer-events-none transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto rounded-lg z-10">
                        <div className="flex flex-col items-center justify-center h-full p-2">
                            <h1 className="text-xl font-bold p-2">{user?.displayName}</h1>
                            <p className="px-3 text-sm">{user?.email}</p>
                            <button className="mx-4 font-bold text-xl hover:text-red-700 py-4 " onClick={handleSignOut}>Sign Out</button>
                        </div>
                    </div>
                </div>}
                </div>

            </div>


        </div>
    )
}

export default Header;
