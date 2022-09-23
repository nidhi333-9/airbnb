// import img from "../"
import '../App.css'
import { AiFillStar } from "react-icons/ai"
const Card = (props) => {

    return (
        <>
            <div className="container flex flex-row">
                <div className=" w-fit  p-5 flex flex-col md:p-14">
                    <img src={props.img} width="250px" className="m-auto md:m-0 " alt="" />
                    <div className="content">
                        <div className="stars px-8 py-4">
                            <AiFillStar color="crimson" />
                            <p className="ml-2 font-light text-sm">{props.rating} <span className="text-slate-400">{props.reviewCount} . {props.country}</span></p>
                        </div>
                        <p className="px-8 text-sm font-light ">{props.title}</p>
                        <p className="px-8 font-bold text-sm">From ${props.price} <span className="font-light">/ person</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;