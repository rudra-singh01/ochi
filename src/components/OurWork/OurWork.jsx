import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Power4 } from 'gsap/all';
function OurWork() {
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
  let [hovering4, sethovering4] = useState("")
  let [hovering5, sethovering5] = useState("")
  let [hovering6, sethovering6] = useState("")
  let [hovering7, sethovering7] = useState("")
  let [hovering8, sethovering8] = useState("")
  return (
    <>
      <motion.div initial={{y:"0"}} animate={{y:"-100%"}} transition={{ease: [0.76, 0, 0.24, 10], duration: 5 }} className='floater bg-zinc-900 w-full h-full absolute flex items-center justify-between p-[2vw] z-50 '>
        <h1 className=' text-[6vw] uppercase font-semibold text-white'> our work</h1>
      </motion.div>
      <div className='father w-full min-h-screen relative overflow-hidden'>
        <div className='p-[6.4vw]  pt-[8vw] relative h-[80vh] bg-[#CDEA68] overflow-hidden '>
          <h1 className='text-[7vw] uppercase font-bold'>work</h1>
          <div className=' absolute w-full h-screen overflow-hidden  '><div data-scroll data-section data-scroll-speed="-.7">
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] pr-[10vw] pb-[18vw]'>
              <div className='w-[20vw] i h-[20vw] flex justify-center items-center rounded-full bg-zinc-50'>
                <div className='w-2/3 h-2/3 flex justify-center items-center text-white rounded-full  bg-[#212121]'>
                  <div style={{ rotate: `${rotate}deg` }} className='line w-full h-[4vh]'>
                    <div className='card w-[2vw] h-full rounded-full bg-zinc-50'></div>
                  </div>
                </div>
              </div>
              <div className='w-[20vw] h-[20vw] flex justify-center items-center  rounded-full bg-zinc-50'>
                <div className='w-2/3 h-2/3 text-white flex justify-center items-center rounded-full  bg-[#212121]'>
                  <div style={{ rotate: `${rotate}deg` }} className='line w-full h-[4vh]'>
                    <div className='card w-[2vw] h-full rounded-full bg-zinc-50'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
          <div className=' flex flex-col items-center justify-center mt-[15vw]'>
            <div className='w-[80%] z-10 h-[5vh] bg-[#BFDA62] rounded-tnpm run dev-lg'></div>
            <div className='w-[100%] z-10 h-[5vh] bg-[#B8D25E] rounded-tnpm run dev-lg'></div>
          </div>
        </div>
        <div className='data'>
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
              <div className='flex gap-10'>
                <div onMouseEnter={() => sethovering4(true)} onMouseLeave={() => sethovering4(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                  <h1 className=' absolute overflow-hidden flex left-full  -translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                    {"PLANTELY".split('').map((items, index) =>
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={hovering4 ? { y: "0" } : { y: "100%" }}
                        transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                        className='inline-block '>{items}
                      </motion.span>
                    )}
                  </h1>
                  <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/10-663x550.png" alt="" />
                  </div>
                </div>
                <div onMouseEnter={() => sethovering5(true)} onMouseLeave={() => sethovering5(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                  <h1 className=' absolute flex overflow-hidden right-full  translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                    {"BLACK BOOK".split('').map((items, index) =>
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={hovering5 ? { y: "0" } : { y: "100%" }}
                        transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                        className='inline-block '>{items}
                      </motion.span>
                    )}
                  </h1>
                  <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x550.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className='flex gap-10'>
                <div onMouseEnter={() => sethovering6(true)} onMouseLeave={() => sethovering6(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                  <h1 className=' absolute overflow-hidden flex left-full  -translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                    {"SOFT START".split('').map((items, index) =>
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={hovering6 ? { y: "0" } : { y: "100%" }}
                        transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                        className='inline-block '>{items}
                      </motion.span>
                    )}
                  </h1>
                  <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x550.jpg" alt="" />
                  </div>
                </div>
                <div onMouseEnter={() => sethovering7(true)} onMouseLeave={() => sethovering7(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                  <h1 className=' absolute flex overflow-hidden right-full  translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                    {"OFFICEVIBE".split('').map((items, index) =>
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={hovering7 ? { y: "0" } : { y: "100%" }}
                        transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                        className='inline-block '>{items}
                      </motion.span>
                    )}
                  </h1>
                  <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x550.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className='flex gap-10'>
                <div onMouseEnter={() => sethovering8(true)} onMouseLeave={() => sethovering8(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                  <h1 className=' absolute overflow-hidden flex left-1/2  -translate-x-1/2  top-1/2 -translate-y-1/2 text-[5.5vw] z-[20] text-[#CDEA68]'>
                    {"WORKEASY".split('').map((items, index) =>
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={hovering8 ? { y: "0" } : { y: "100%" }}
                        transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                        className='inline-block '>{items}
                      </motion.span>
                    )}
                  </h1>
                  <div className='card w-full h-full rounded-[1vw] overflow-hidden bg-red-900'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Photo-663x550.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' latest bg-[#004D43]'>
          <div className='BEHANCE'>
            <div data-scroll data-section data-scroll-speed=".1" className='w-full py-10 '>
              <div className='text border-t-2 border-b-2 uppercase  border-zinc-200 whitespace-nowrap flex  overflow-hidden '>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[25vw] leading-none font-bold text-zinc-50 pr-8 '>
                  BEHANCE BEHANCE
                </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[25vw] leading-none font-bold text-zinc-50 pr-8 '>
                  BEHANCE BEHANCE
                </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[25vw] leading-none font-bold text-zinc-50 pr-8 '>
                  BEHANCE BEHANCE
                </motion.h1>
              </div>
            </div>
          </div>
          <div className='flex justify-between p-[2vw]'>
            <div className='publication'>
              latest publication
            </div>
            <div>
              <div className='conatainer flex gap-2'>
                <div className='w-[15vw] h-[30vh] bg-black rounded-lg overflow-hidden'>
                  <img src="https://ochi.design/wp-content/uploads/2022/05/Frame-3878-325x325.jpg" alt="" />
                </div>
                <div className='w-[15vw] h-[30vh] bg-black rounded-lg overflow-hidden'>
                  <img src="https://ochi.design/wp-content/uploads/2022/05/Frame-3878-325x325.jpg" alt="" />
                </div>
                <div className='w-[15vw] h-[30vh] bg-black rounded-lg overflow-hidden'>
                  <img src="https://ochi.design/wp-content/uploads/2022/05/Frame-3878-325x325.jpg" alt="" />
                </div>
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

export default OurWork