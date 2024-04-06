import React from 'react'
import { motion } from 'framer-motion'
function Contact() {
    return (
        <div className='papa w-full min-h-screen px-10'>
            <div className='opne'>
                <div className="eye-headings text-8xl mt-28 leading-[7vw] font-bold items-center tracking-tighter ">
                    <h1><motion.span initial={{ width: 0 }} animate={{ width: '10%' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }} className=' inline-block w-[9vw] h-[12vh] bg-zinc-500 bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] rounded-lg overflow-hidden'></motion.span>LET’S START</h1>
                    <h1>A PROJECT TOGETHER</h1>
                </div>
            </div>
            <div className='form mt-[8vw] h-screen '>
                <p className='pb-[5vw]'>Fill The Form Bellow</p>
                <div className='last_part text-[2.9vw] capitalize tracking-tighter '>
                    <h1>hi! my name is <input className=' border-b-2 border-black w-[21vw] text-[2vw] text-center outline-none  ' type="text" placeholder='enteryour name' />and i work with <input className=' border-b-2 border-black w-[33vw] text-[2vw] text-center outline-none' type="text" placeholder='company name type here'/></h1>
                    <h1>I'm looking for a partner to help me with <input className=' border-b-2 text-[2vw] border-black w-[42vw]  text-center outline-none' type="text" placeholder='your goal type here'/></h1>
                    <h1>With an idea of having that completed<input className=' border-b-2 text-[2vw] border-black w-[45vw]  text-center outline-none' type="text" placeholder='Date'/></h1>
                    <h1>I am hoping to stay around a budget range of<input className=' border-b-2 text-[2vw] border-black w-[35.5vw]  text-center outline-none' type="text" placeholder='select'/></h1>
                    <h1>You can reach me at<input className=' border-b-2 text-[2vw] border-black w-[35.5vw]  text-center outline-none' type="text" placeholder='name@example.com'/>to start the conversation.</h1>
                    <h1>With an idea of having that completed<input className=' border-b-2 text-[2vw] border-black w-[45vw]  text-center outline-none' type="text" placeholder='Product details type here'/></h1>
                </div>
                <div className='pt-[2vw] '>
                    <div className='flex absolute right-[10%] items-center gap-1'>
                        <input className=' cursor-pointer right-[20%] ' type="checkbox" />
                        <p>I agree with the <span className='underline'>Privacy Policy</span></p>
                        <button className=' uppercase border-2 p-[1vw] rounded-lg bg-[#dadada] text-white'>send inquriy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact