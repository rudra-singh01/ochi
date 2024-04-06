import React from 'react'
import { motion } from 'framer-motion'
function Insigts() {
    return (
        <>
            <motion.div initial={{ y: "0" }} animate={{ y: "-100%" }} transition={{ ease: [0.76, 0, 0.24, 10], duration: 5 }} className='floater bg-zinc-900 w-full h-full absolute flex items-center justify-between p-[2vw] z-50 '>
                <h1 className=' text-[6vw] uppercase font-semibold text-white'>insights</h1>
            </motion.div>
            <div className='w-full min-h-screen'>
                <div className=' p-[6.4vw]  pt-[8vw] border-b-2'>
                    <h1 className=' text-[7vw] uppercase font-semibold tracking-tighter'>insights</h1>
                </div>
                <div className='latest'>
                    <div className='flex justify-between p-[2vw]'>
                        <p>latest news</p>
                        <div className=' flex gap-3 px-[10vw] text-center '>
                            <h6 className=' border-2 border-black rounded-[1.5vw] uppercase p-2 bg-black text-white'><a href="#"></a>all</h6>
                            <h6 className=' border-2 border-black rounded-[2vw] uppercase p-2'><a href="#"></a>presentaions templates</h6>
                            <h6 className=' border-2 border-black rounded-[2vw] uppercase p-2'><a href="#"></a>public speaking</h6>
                            <h6 className=' border-2 border-black rounded-[2vw] uppercase p-2'><a href="#"></a>storytelling</h6>
                        </div>
                    </div>
                    <div className=' flex '>
                        <div className='p-[2vw]'>
                            <div className='rounded-lg overflow-hidden'>
                                <img src="https://ochi.design/wp-content/uploads/2023/11/Frame-4126-1-324x394.png" alt="" />
                            </div>
                            <p className='pt-2'>Presenting to an International Audience: <br /> Tips and Lessons Learned.</p>
                            <p className='pt-4 text-[#bab7b7]'>By Ihor Hulyahrodskyy <br />26 May. 23</p>
                        </div>
                        <div>
                            <div className='p-[2vw]'>
                                <div className='rounded-lg overflow-hidden'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/12/front-5_optimized-324x324.jpg" alt="" />
                                </div>
                                <p className='pt-2'>Developing company-wide presentation <br />template for Premium Blend.</p>
                                <p className='pt-4 text-[#bab7b7]'>By Ihor Hulyahrodskyy <br />07 Dec. 22</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' latest bg-[#004D43]'>
                    <div className='BEHANCE'>
                        <div data-scroll data-section data-scroll-speed=".1" className='w-full py-10 '>
                            <div className='text border-t-2 border-b-2 uppercase  border-zinc-200 whitespace-nowrap flex  overflow-hidden '>
                                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 11 }} className='text-[25vw] leading-none tracking-tight font-bold text-zinc-50 pr-8 '>
                                    INSTAGRAM INSTAGRAM
                                </motion.h1>
                                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 11 }} className='text-[25vw] leading-none tracking-tight font-bold text-zinc-50 pr-8 '>
                                    INSTAGRAM INSTAGRAM
                                </motion.h1>
                                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 11 }} className='text-[25vw] leading-none tracking-tight font-bold text-zinc-50 pr-8 '>
                                    INSTAGRAM INSTAGRAM
                                </motion.h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between p-[2vw]'>
                        <div className='publication'>
                            <p className=' text-white'>latest publication</p>
                        </div>
                        <div>
                            <div className='conatainer flex gap-2'>
                                <div className='w-[18vw] h-[35vh] bg-black rounded-lg overflow-hidden'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/12/Frame-4064-325x325.png" alt="" />
                                </div>
                                <div className='w-[18vw] h-[35vh] bg-black rounded-lg overflow-hidden'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/12/3things_1-325x325.jpg" alt="" />
                                </div>
                                <div className='w-[18vw] h-[35vh] bg-black rounded-lg overflow-hidden'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/12/fonts-1-325x325.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Insigts