import Buttons from "./Buttons"
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
export default function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

   const submit = (event) =>{
        event.preventDefault();
        setName("Hii " + event.target[1].value + " ThankYou!");
        console.log(event);
        form.reset();
    }

    return(
        <div className="flex flex-col items-center">
            <div className="flex lg:flex-row flex-col lg:gap-5 gap-2 mt-2">
                <Buttons onClick={()=>{alert("SUPPORT CHAT IS OPENING.....")}} icon={<MdMessage/>} text="VIA SUPPORT CHAT"/>
                <Buttons onClick={()=>{alert("PLEASE WAIT WE CALL YOU AFTER SOME TIME.....")}} icon={<IoMdCall />} text="VIA CALL"/>         
            </div>

            <button className=" flex items-center justify-center gap-2 text-[16px] leading-normal mt-5 mb-1  border-black py-[10px] w-[250px] lg:w-[360px] border rounded-md"> {<MdMessage/>} VIA EMAIL FORM</button>

            <form onSubmit={submit} name="form">
                <fieldset className=" relative mt-2">
                    <legend className=" absolute top-[-4px] left-5 px-[5px] py-[5px] bg-white">Name</legend>
                    <input type="text" name="name" id="" className=" border border-black w-[300px] lg:w-[340px] mt-4 h-[40px]"/>
                </fieldset>

                <fieldset className="relative mt-2">
                    <legend className=" absolute top-[-4px] left-5 px-[5px] py-[5px] bg-white">Email</legend>
                    <input type="email" name="email" id="" className=" border border-black w-[300px] lg:w-[340px] mt-4 h-[40px]"/>
                </fieldset>

                <fieldset className="relative mt-4 mb-1">
                    <legend className=" absolute bottom-[185px] left-5 px-[5px] py-[3px] bg-white">Text</legend>
                    <textarea name="textarea" cols="35" rows="7" id="textarea" className=" border border-black p-3 "></textarea>
                    {/* <input type="text" name="text" id="" className=" border border-black"/> */}
                </fieldset>

                <div className="flex justify-between">
                    <h2>{name}</h2> 
                    <Buttons icon={<IoIosSend />} text="SUBMIT"/>
                </div>
            </form>
        </div>
    )
}