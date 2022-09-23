// import img from "../"
import '../App.css'
import { AiFillStar } from "react-icons/ai"
const Card = (props) => {

    return (
        <>
            {/* <div className="container flex"> */}
            <div className=" w-fit flex flex-col p-5 md:p-14">
                <img src={props.img} className="image m-auto md:m-0 " alt="" />
                <div className="content">
                    <div className="stars px-8 py-4">
                        <AiFillStar color="crimson" />
                        <p className="ml-2 font-light text-sm">{props.rating} <span className="text-slate-400">{props.reviewCount} . {props.country}</span></p>
                    </div>
                    <p className="px-8 text-sm font-light ">{props.title}</p>
                    <p className="px-8 font-bold text-sm">From ${props.price} <span className="font-light">/ person</span></p>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Card;