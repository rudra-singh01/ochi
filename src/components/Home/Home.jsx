import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpLong } from "react-icons/fa6";
import { Power4 } from 'gsap/all';
function Home() {
    var [rotate, setrotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (dets) => {
            let moveX = dets.clientX
            let moveY = dets.clientY

            let pointer1 = moveX - window.innerWidth / 2;
            let pointer2 = moveY - window.innerHeight / 2;

            let details = Math.atan2(pointer2, pointer1) * (180 / Math.PI);
            setrotate(details - 180)
        })
    })
    let [hovering, sethovering] = useState("")
    let [hovering1, sethovering1] = useState("")
    let [hovering2, sethovering2] = useState("")
    let [hovering3, sethovering3] = useState("")
    return (
        <>  
            <motion.div initial={{y:"0"}} animate={{y:"-100%"}} transition={{ease: [0.76, 0, 0.24, 10], duration: 5 }} className='floater bg-zinc-900 w-full h-full absolute flex items-center justify-between p-[2vw] z-50'>
                <h1 className=' text-[6vw] uppercase font-semibold text-white'> ochi</h1>
            </motion.div>
            <div data-scroll data-scroll-speed=".1" className='w-full h-screen pt-2'>
                <div className='opne'>
                    <div className="eye-headings text-8xl mt-32 px-20 leading-[7vw] font-bold items-center ">
                        <h1 className='font-[""Founders_Grotesk_Bold"] '>WE CREATE</h1>
                        <h1><motion.span initial={{ width: 0 }} animate={{ width: '10%' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }} className=' inline-block w-[9vw] h-[12vh] bg-zinc-500 bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] rounded-lg overflow-hidden'></motion.span>EYE-OPENING</h1>
                        <h1>PRESENTATIONS</h1>
                    </div>
                </div>
                <div className='border-t-2 border-zinc-700 mt-20 px-16 py-4 justify-between flex items-center'>
                    {["For public and private companies", "From the first pitch to IPO"].map((items, index) => (
                        <p className='text-sm capitalize font-normal tracking-tighter leading-none'>{items}</p>
                    ))}
                    <div className='start flex items-center gap-2'>
                        <div className='px-4 py-2 text-xs border-2 border-zinc-800 text-md rounded-full'>START THR PROJECT</div>
                        <div className='w-10 h-10 border-2 border-zinc-800 rounded-full flex items-center justify-center'>
                            <span className='rotate-[45deg]'>
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div data-scroll data-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43]'>
                <div className='text border-t-2 border-b-2 uppercase  border-zinc-200 whitespace-nowrap flex  overflow-hidden '>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                        we are ochi
                    </motion.h1>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                        we are ochi
                    </motion.h1>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                        we are ochi
                    </motion.h1>
                </div>
            </div>


            <div data-scroll data-scroll-speed="-.3.1">
                <div className='w-full p-16 bg-[#CDEA68]'>
                    <h1 className='text-[3.9vw] leading-[4vw] '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className='no-underline md:underline'>raise funds</span>, <span className='no-underline md:underline'>sell prod­ucts</span>, <span className='no-underline md:underline'>ex­plain com­plex ideas</span>, and <span className='no-underline md:underline'>hire great peo­ple</span>.</h1>
                </div>
                <div className=' border-t-[1px] border-[#B3CC5E] bg-[#CDEA68]'>
                    <div className='w-full p-12 flex justify-between'>
                        <div className='left'>
                            <p>What you can expect:</p>
                        </div>
                        <div className='right justify-evenly flex gap-[7vw]'>
                            <div className='creste'>
                                <p>We create tailored presentations to help <br /> you persuade your colleagues, clients, or <br /> investors. Whether it’s live or digital, <br /> delivered for one or a hundred people.  </p>
                                <br />
                                <p>We believe the mix of strategy and <br /> design (with a bit of coffee) is what <br /> makes your message clear, convincing,<br /> and captivating.</p>
                            </div>
                            <div className='insta flex flex-col mt-[6vw]'>
                                <a href="#" className='pb-4'>S:</a>
                                <a href="#">instagram</a>
                                <a href="#">behance</a>
                                <a href="#">facebook</a>
                                <a href="#">linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-[#CDEA68] p-12 flex justify-between border-t-[1px] border-[#B3CC5E]'>
                    <div className='approch'>
                        <h1 className='text-[4vw] capitalize pb-2'>our approch</h1>
                        <div className='read w-[12vw] gap-[2vw] flex items-center justify-center h-12 rounded-[50px] bg-zinc-900 text-zinc-50 capitalize'>
                            <a href="#" > read more</a>
                            <div className='rotate-[40deg]'>
                                <FaArrowUpLong />
                            </div>
                        </div>
                    </div>
                    <div className='photo'>
                        <div className='w-[50vw] h-[70vh] bg-[#CDEA68] rounded-lg overflow-hidden'>
                            <img className=' object-cover ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='  w-full h-screen overflow-hidden  '>
                <div data-scroll data-section data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                    <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-[15vw] i h-[15vw] flex justify-center items-center rounded-full bg-zinc-50'>
                            <div className='w-2/3 h-2/3 flex justify-center items-center text-white rounded-full  bg-[#212121]'>
                                <div style={{ rotate: `${rotate}deg` }} className='line w-full h-[4vh]'>
                                    <div className='card w-[2vw] h-full rounded-full bg-zinc-50'></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[15vw] h-[15vw] flex justify-center items-center  rounded-full bg-zinc-50'>
                            <div className='w-2/3 h-2/3 text-white flex justify-center items-center rounded-full  bg-[#212121]'>
                                <div style={{ rotate: `${rotate}deg` }} className='line w-full h-[4vh]'>
                                    <div className='card w-[2vw] h-full rounded-full bg-zinc-50'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full py-10'>
                <div className='text-[4vw] border-b-[1px] border-[#B2B2B2] pb-8 px-10 capitalize'>
                    <h1>Featured projects</h1>
                </div>
                <div className='cards'>
                    <div className=" card w-full p-12 flex gap-10 flex-col ">
                        <div className='flex gap-10'>
                            <div onMouseEnter={() => sethovering(true)} onMouseLeave={() => sethovering(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                                <h1 className=' absolute overflow-hidden flex left-full  -translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                                    {"FYAD".split('').map((items, index) =>
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={hovering ? { y: "0" } : { y: "100%" }}
                                            transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                                            className='inline-block '>{items}
                                        </motion.span>
                                    )}
                                </h1>
                                <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                                </div>
                            </div>
                            <div onMouseEnter={() => sethovering1(true)} onMouseLeave={() => sethovering1(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                                <h1 className=' absolute flex overflow-hidden right-full  translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                                    {"TRAWA".split('').map((items, index) =>
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={hovering1 ? { y: "0" } : { y: "100%" }}
                                            transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                                            className='inline-block '>{items}
                                        </motion.span>
                                    )}
                                </h1>
                                <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <div onMouseEnter={() => sethovering2(true)} onMouseLeave={() => sethovering2(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                                <h1 className=' absolute overflow-hidden flex left-full  -translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                                    {"PREMINUM BLEND".split('').map((items, index) =>
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={hovering2 ? { y: "0" } : { y: "100%" }}
                                            transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                                            className='inline-block '>{items}
                                        </motion.span>
                                    )}
                                </h1>
                                <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                                </div>
                            </div>
                            <div onMouseEnter={() => sethovering3(true)} onMouseLeave={() => sethovering3(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                                <h1 className=' absolute flex overflow-hidden right-full  translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                                    {"VISE".split('').map((items, index) =>
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={hovering3 ? { y: "0" } : { y: "100%" }}
                                            transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                                            className='inline-block '>{items}
                                        </motion.span>
                                    )}
                                </h1>
                                <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[70vh] flex gap-5 px-8'>
                <div className='cardscontainer w-1/2 h-[60vh]'>
                    <div className='card relative w-full rounded-[10px] h-full flex items-center justify-center bg-[#004D43]'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                        <button className=' absolute px-4 py-1 rounded-full border-[#8BB75C] text-[#8BB75C] border-2 left-10 bottom-8'>&copy;2019-2022</button>
                    </div>
                </div>
                <div className='cardscontainer w-1/2 flex gap-4 h-[60vh]'>
                    <div className='card relative w-full rounded-[10px] h-full flex items-center justify-center bg-[#212121]'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <button className=' absolute px-4 py-1 rounded-full  text-[#fff] text-[1vw] border-2 uppercase left-4 bottom-8'>rating5.0 on clutch</button>
                    </div>
                    <div className='card relative w-full rounded-[10px] h-full flex items-center justify-center bg-[#212121]'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <button className=' absolute px-2 py-1 rounded-full  text-[#fff] text-[1vw] border-2 uppercase left-4 bottom-8'>business bootcamp alumin</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home