import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ACC, LOGO } from "../utils/constants";
import {toggleGPTSerachView} from "../utils/gptSlice";
import { SUPPORTED_LANGUAES } from "../utils/constants";
import {changeLanguage} from "../utils/configSlice";
import lang from "../utils/languageConstants";



const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((store) => store.user);
    const gptSearch = useSelector((store)=> store.gpt.showGptSearch);
    const config = useSelector((store)=>store.config.lang);
    const gptView = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });

    }

    const handleGptSearchView = ()=>{
        dispatch(toggleGPTSerachView());
    }

    useEffect(() => {

        const unSubscribeOnAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                if (!location.pathname.startsWith("/browse/movieDetails")) {
                    navigate("/browse");
                }
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return ()=>unSubscribeOnAuth();
    }, [])
 

    const handleLanguageChange = (e)=>{
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="">
            <div className="sm:absolute px-8 py-8  bg-gradient-to-b from-black w-full flex flex-col sm:flex-row md:flex-row justify-center sm:justify-between z-50">
                <img src={LOGO} alt="Netflix-Logo" className="w-40  mx-auto pb-2 sm:mx-0 sm:pb-0 sm:w-70 md:w-80" />
                <div className="flex gap-5 justify-center items-center">
                {location.pathname.startsWith("/browse/movieDetails")?<Link to="/browse"><button className=" bg-red-700 p-2 rounded-lg font-semibold text-lg hover:bg-red-500 text-white text-sm sm:text-lg">Home</button></Link>:""}
                {gptSearch && user && <select className="p-2 cursor-pointer rounded-lg" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAES.map((lan)=>{
                    return <option key={lan.identifier} className=" rounded-lg" value={lan.identifier}>{lan.name}</option>
                })}
                </select>}
                {user &&  (location.pathname.startsWith("/browse/movieDetails") && gptView)?navigate("/browse"): <button onClick={handleGptSearchView} className="text-white bg-purple-700 font-semibold p-2 rounded-lg hover:bg-purple-900 text-sm sm:text-lg">{gptSearch?lang[config].homePage:lang[config].gptSearchBtn}</button>}
                {user && <div className=" group">
                    
                    <img src={ACC} alt="account" className="w-10 p-1 transform transition-transform duration-300 hover:rotate-180 cursor-pointer" />
                    
                    {/* hover Section */}
                    <div className="absolute right-6 w-48 h-36  top-[75px] text-white  bg-black bg-opacity-50 opacity-0 pointer-events-none transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto rounded-lg z-10">
                        <div className="flex flex-col items-center justify-center h-full p-2">
                            <h1 className="text-xl font-bold p-2">{user?.displayName}</h1>
                            <p className="px-3 text-sm">{user?.email}</p>
                            <button className="mx-4 font-bold text-xl hover:text-red-700 py-4 " onClick={handleSignOut}>{lang[config].signOut}</button>
                        </div>
                    </div>
                </div>}
                </div>

            </div>


        </div>
    )
}

export default Header;
