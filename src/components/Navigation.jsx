import Frame from '/public/Frame.png'
export default function Navigation(){
    return(
        <div className='flex justify-center lg:justify-between h-[72px] px-10'>
            <img src={Frame} alt="logo" className='w-[72px] h-[72px]' />
            <div className='hidden lg:flex lg:gap-10 lg:items-center'>
                <a href="#">H0ME</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
            </div>
        </div>
    )
}