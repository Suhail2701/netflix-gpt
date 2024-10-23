const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 pb-8 pt-20 bg-black text-white text-lg ">
            <h1 className="pb-5">Questions? Call 1-234-456-896</h1>
            <div className="flex justify-between w-11/12 border border-solid border-black">
                <div className="flex flex-col gap-2">
                    <span>FAQ</span>
                    <span>Investor Relations</span>
                    <span>Ways to Watch</span>
                    <span>Corporate Information</span>
                    <span>Netflix Originals</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Help Center</span>
                    <span>Jobs</span>
                    <span>Terms of Use</span>
                    <span>Contac Us</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Account</span>
                    <span>Redeem Gift Cards</span>
                    <span>Privacy</span>
                    <span>Speed Test</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Media Center</span>
                    <span>Buy Gift Crds</span>
                    <span>Cookie Preferences</span>
                    <span>Legal Notice</span>
                </div>
            </div>
            <div>
            <h1 className="">Created by <span className="font-semibold">Suhail Ahmed</span> ❤</h1>
            </div>
        </div>
        
    )
}

export default Footer;