import React, { useEffect, useState, useRef } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import '/src/styles.css';
import { EffectCards } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
function AboutUs() {
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
    return (
        <>
            <motion.div initial={{y:"0"}} animate={{y:"-100%"}} transition={{ease: [0.76, 0, 0.24, 10], duration: 5 }} className='floater bg-zinc-900 w-full h-full absolute flex items-center justify-between p-[2vw] z-10 '>
                <h1 className=' text-[6vw] uppercase font-semibold text-white'> about us</h1>
            </motion.div>
            <div className='father w-full min-h-screen relative overflow-hidden'>
                <div className='we_are_ochi p-[6.4vw]  pt-[8vw] text-[9vw] font-bold uppercase tracking-tighter border-b-2'>
                    <h1 className=' leading-[10vw]'>we are</h1>
                    <div>
                        <h1 className='leading-[6vw]'><motion.span initial={{ width: 0 }} animate={{ width: '10%' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }} className=' inline-block w-[9vw] h-[13vh] bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] rounded-lg overflow-hidden'></motion.span >ochi DESIGN</h1>
                    </div>
                </div>
                <div className="about relative w-full h-[130vh] border-b-2">
                    <div className='wraper flex justify-between capitalize p-[2vw]'>
                        <div className='text-[1vw]'>
                            <p>about us</p>
                        </div>
                        <div className='pl-[20vw] text-[1vw]'>
                            <p>In Ukrainian, ochi - means eyes. It's not <br /> just a beautiful word, but our philosophy .<br /> Almost everything that needs to be <br /> communicated is better shown than <br /> explained.</p>
                            <br />
                            <p>We believe a great presentation evokes <br /> interest and drives business results far <br /> better than any saying can. Hence, we <br /> founded ochi to help you persuade <br /> colleagues and clients by creating eye <br />-opening presentations.</p>
                        </div>
                        <div>
                            <div className='w-[11vw] gap-[2vw] flex items-center justify-center h-8 rounded-[50px] bg-zinc-900 text-zinc-50 capitalize'>
                                <a href="#" > our project</a>
                                <div className='rotate-[40deg]'>
                                    <FaArrowUpLong />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eyes">
                        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                            <div className='w-[20vw] i h-[20vw] flex justify-center items-center rounded-full bg-zinc-50 border-2 border-[#dadada]'>
                                <div className='w-2/3 h-2/3 flex justify-center items-center text-white rounded-full  bg-[#212121]'>
                                    <div style={{ rotate: `${rotate}deg` }} className='line w-full h-[4vh]'>
                                        <div className='card w-[2vw] h-full rounded-full bg-zinc-50'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[20vw] h-[20vw] flex justify-center items-center  rounded-full bg-zinc-50  border-2 border-[#dadada]'>
                                <div className='w-2/3 h-2/3 text-white flex justify-center items-center rounded-full  bg-[#212121]'>
                                    <div style={{ rotate: `${rotate}deg` }} className='line w-full h-[4vh]'>
                                        <div className='card w-[2vw] h-full rounded-full bg-zinc-50'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className=' pt-[30vw] p-[1vw] text-[3vw] tracking-tighter'>
                            <h3>We save businesses from ugly and</h3>
                            <h3 className='leading-3'>ineffective presentations.</h3>
                        </div>
                    </div>
                </div>
                <div className="design">
                    <div className=' flex justify-between p-[1vw]'>
                        <div>
                            <p>We are ochi design:</p>
                        </div>
                        <div className='pr-[25vw]' >
                            <p>The team of designers, storytellers, and <br /> passionate collaborators, who work <br /> together to create industry-shifting <br /> presentations that win people's hearts <br /> and minds.</p>
                            <br />
                            <p>And we strive to become one of the most <br /> recognizable & influential presentation <br /> agencies of the time who does that.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='p-[3vw] '>
                            <img className='rounded-[2vw]' src="https://ochi.design/wp-content/uploads/2022/05/017091720030-1340x858.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="core_of_the bg-[#004D43] ">
                    <div>
                        <div data-scroll data-section data-scroll-speed=".1" className='w-full py-10 '>
                            <div className='text border-t-2 border-b-2 uppercase  border-zinc-200 whitespace-nowrap flex  overflow-hidden '>
                                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                                    core of the team
                                </motion.h1>
                                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                                    core of the team
                                </motion.h1>
                                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                                    core of the team
                                </motion.h1>
                            </div>
                        </div>
                        <div>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                                            <p>IHOR HULYAHRODSKYY</p>
                                        </div>
                                    </div>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                                            <p>IHOR HULYAHRODSKYY</p>
                                        </div>
                                    </div>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                                            <p>IHOR HULYAHRODSKYY</p>
                                        </div>
                                    </div>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                                            <p>IHOR HULYAHRODSKYY</p>
                                        </div>
                                    </div>
                                    <div className='left flex justify-between'>
                                        <div>
                                            <img src="https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="two_principle">
                    <div className='border-b-2 p-[4vw]'>
                        <h1 className='text-[4vw] tracking-tighter leading-[4vw]'>Two principles we stand behind in</h1>
                        <h1 className='text-[4vw] tracking-tighter leading-[2vw]'>every part of our work:</h1>
                    </div>
                    <div className='justify-between flex items-center p-[2vw]'>
                        <div className='w-[49%]'>
                            <div className=' h-[80vh] rounded-lg overflow-hidden'>
                                <img className='h-full w-full' src="https://ochi.design/wp-content/uploads/2022/05/Asset-52@2x-20-1-663x551.jpg" alt="" />
                            </div>
                            <p className=' w-[20vw] pt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque architecto commodi ut ab, corporis voluptas aperiam rerum officia tempore distinctio error, aliquam sit numquam natus quasi dolor mollitia at?</p>
                        </div>
                        <div className='w-[49%]'>
                            <div className=' h-[80vh] rounded-lg overflow-hidden'>
                                <img className='h-full w-full' src="https://ochi.design/wp-content/uploads/2022/05/Asset-51@2x-20-1-663x551.jpg" alt="" />
                            </div>
                            <p className=' w-[20vw] pt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque architecto commodi ut ab, corporis voluptas aperiam rerum officia tempore distinctio error, aliquam sit numquam natus quasi dolor mollitia at?</p>
                        </div>
                    </div>
                    <div className='border-b-2 p-[4vw]'>
                        <h1 className='text-[4vw] tracking-tighter leading-[4vw]'>We’ve built long-lasting partnerships</h1>
                        <h1 className='text-[4vw] tracking-tighter leading-[3vw]'>with the most ambitious brands</h1>
                        <h1 className='text-[4vw] tracking-tighter leading-[3.7vw]'>across the globe:</h1>
                    </div>
                </div>
                <div className="drag">
                    <div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination,]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/05/Vector1.svg" alt="" />
                                </div>
                                <div>
                                    <p>planetly</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/05/Vector1.svg" alt="" />
                                </div>
                                <div>
                                    <p>planetly</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/05/Logo_2-1.svg" alt="" />
                                </div>
                                <div>
                                    <p>nestle</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/05/toyota-logo-freelogovectors.net_.svg" alt="" />
                                </div>
                                <div>
                                    <p>toyota</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="	https://ochi.design/wp-content/uploads/2022/05/Logo_2.svg" alt="" />
                                </div>
                                <div>
                                    <p>lexus</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="	https://ochi.design/wp-content/uploads/2022/05/aflori-logo-freelogovectors.net_.svg" alt="" />
                                </div>
                                <div>
                                    <p>Aflorithmic</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="https://ochi.design/wp-content/uploads/2022/05/Asset-12.svg" alt="" />
                                </div>
                                <div>
                                    <p>Orderlion</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='one'>
                                    <img src="	https://ochi.design/wp-content/uploads/2022/05/Picture2-1.svg" alt="" />
                                </div>
                                <div>
                                    <p>planetly</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta beatae quaerat? Perspiciatis quod enim deleniti neque expedita quam, incidunt suscipit ut eaque, et distinctio aliquam quasi culpa officiis nisi.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-full h-[70vh] flex gap-5 p-[2vw]'>
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
                </div>
                <div className='ready relative'>
                    <div className='flex h-[100vh] font-extrabold flex-col items-center justify-center text-center text-[15vw] bg-[#CDEA68] tracking-tighter uppercase p-[1vw] pt-[4vw] '>
                        <h1 className=' leading-[12vw]'>ready</h1>
                        <h1 className=' leading-[11vw]'>to start</h1>
                        <h1 className=' leading-[12vw]'> the project</h1>
                    </div>
                    <div className='  flex items-center justify-center mr-[4vw]'>
                        <div data-scroll data-section data-scroll-speed="-.7" className=' absolute w-full h-full bg-cover bg-center mb-[50vw] '>
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
                </div>
            </div>
        </>
    )
}

export default AboutUs