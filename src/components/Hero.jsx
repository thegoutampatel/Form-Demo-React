import Service from '/public/Service.svg'
import Contact from "./Contact";

export default function Hero(){
    return(
        <div className="flex flex-col justify-start ml-40">
            <h1 className="text-[24px] lg:text-[48px] leading-normal font-bold mt-10">CONTACT US</h1>
            <p className="mt-2 text-[#5A5959] text-[8px] lg:text-[16px] leading-normal lg:w-[900px]">
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR
                JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR 
                SOCIAL MEDIA. 
            </p>

            <div className='flex flex-col  lg:flex-row gap-[150px] items-center ml-10'>
                <Contact/>
                <div className=''>
                    <img src={Service} className='w-[750] h-[515px]'/>
                </div>
            </div>
        </div>
    )
}