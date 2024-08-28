// import logo from "../../public/Netflix-Logo.png";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { ACC, LOGO } from "../utils/constants";



const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });

    }

    useEffect(() => {

        const unSubscribeOnAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
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
                {user && <div className="flex group">
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
    )
}

export default Header;