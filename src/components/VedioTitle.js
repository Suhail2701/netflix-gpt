import { Play, Info } from 'lucide-react';

const VedioTitle = ({title, overview})=>{
    return(
        <div className="pt-[20%] 2xl:pt-[18%]  p-6 sm:pl-10 absolute text-white bg-gradient-to-r  from-black w-screen aspect-video">
            <h1 className="sm:text-5xl font-bold pt-2 sm:pb-4">{title}</h1>
            <p className="w-2/4 2xl:w-1/4 text-sm hidden md:block 2xl:text-lg pt-5">{overview}</p>
            <div className='flex'>
                <button className=" text-sm pr-2 sm:w-28 sm:py-2 my-[10px] py-1  sm:my-3 rounded-lg font-bold flex items-center justify-center bg-white text-black  hover:bg-opacity-50"><Play  size={24} color="black" className='mx-1 size-4'/>Play</button>
                <button className="bg-gray-400 text-sm pr-2 my-[10px] py-1 sm:w-36 sm:py-2 sm:my-3 rounded-lg mx-2 font-bold flex items-center justify-center  text-white bg-opacity-70 hover:bg-opacity-50"><Info size={24}   className='mx-1 size-4'/>More Info</button>
            </div>
        </div>
    );
}

export default VedioTitle;