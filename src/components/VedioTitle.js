import { Play, Info } from 'lucide-react';

const VedioTitle = ({title, overview})=>{
    return(
        <div className="pt-[20%]  p-6 pl-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-6xl font-bold pt-2 pb-4">{title}</h1>
            <p className="w-1/4 text-lg pt-8">{overview}</p>
            <div className='flex'>
                <button className=" w-28 py-2 my-3 rounded-lg font-bold flex items-center justify-center bg-white text-black  hover:bg-opacity-50"><Play size={24} color="black" className='mx-1'/>Play</button>
                <button className="bg-gray-400 w-36 py-2 my-3 rounded-lg mx-2 font-bold flex items-center justify-center  text-white bg-opacity-70 hover:bg-opacity-50"><Info size={24}   className='mx-1'/>More Info</button>
            </div>
        </div>
    );
}

export default VedioTitle;