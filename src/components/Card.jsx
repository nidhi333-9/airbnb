import img from "../images/img1.png"
import { AiFillStar } from "react-icons/ai"
const Card = () => {
    return (
        <>
            <div className="container  p-5 flex flex-col md:p-14">
                <img src={img} width="250px" className="m-auto md:m-0 w-fit" alt="" />
                <div className="content">
                    <div className="stars px-8 py-4 ">
                        <AiFillStar color="crimson" />
                        <p className="ml-2 font-light text-sm">5.0 <span className="text-slate-400">(6) . USA</span></p>
                    </div>
                    <p className="px-8 text-sm font-light ">Life lessons with Katie Zaferes</p>
                    <p className="px-8 font-bold text-sm">From $136 <span className="font-light">/ person</span></p>
                </div>
            </div>
        </>
    )
}

export default Card;