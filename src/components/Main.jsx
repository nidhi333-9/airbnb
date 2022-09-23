import hero from "../../public/images/hero.png";

const Main = () => {
    return (
        <>
            <div className="hero p-5 flex flex-col md:p-14">
                <img className=" m-auto" src={hero} alt="" />
                <h1 className="py-6 text-slate-900 font-semibold text-3xl md:text-6xl md:py-10">Online Experiences</h1>
                <p className="font-light text-lg">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </>
    )
}

export default Main;