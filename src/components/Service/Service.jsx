import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
export default function Service() {
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
  let hover = document.querySelector(".floater")
  // if (hover) {
  //   hover.addEventListener("mouseenter", () =>{
  //     setTimeout(()=>{
  //       hover.style.top = "-100%"
  //   },1000)
  //   })
  // }
  // var elems = document.querySelectorAll(".elm");
  // var fixed = document.querySelectorAll(".cont")
  // elems.forEach(function (dets) {
  //   dets.addEventListener("mouseenter", function () {
  //     var change = dets.getAttribute("data-img")
  //     fixed.style.backgroundImage = `url(${change})`
  //     fixed.style.display = "block"
  //   })
  //   dets.addEventListener("mouseleave", function () {
  //     fixed.style.display = "none"
  //   })
  // })
  return (
    <>
      <motion.div initial={{ y: "0" }} animate={{ y: "-100%" }} transition={{ ease: [0.76, 0, 0.24, 10], duration: 5 }} className='floater bg-zinc-900 w-full h-full absolute flex items-center justify-between p-[2vw] '>
        <h1 className=' text-[6vw] uppercase font-semibold text-white'> service</h1>
      </motion.div>
      <div className='w-full min-h-screen overflow-hidden '>
        <div className="bold pt-[7vw]  ">
          <h1 className='text-[8vw] capitalize tracking-tight border-b-2 pb-[3vw] p-[2vw]'>service</h1>
        </div>
        <div className='we_create border-b-2 pb-[4vw]'>
          <div className='pt-[3vw]'>
            <p className='text-[3.5vw] p-[2vw]'>We create <span className=' underline'>eye-catching</span> and <span className='underline'>eye-opening</span> <br /> presentations that educate, inspire and influence <br /> action.</p>
          </div>
        </div>
        <div className="goal_define pb-[2vw] p-[2vw]">
          <div className=''>
            <div className='flex justify-between pt-[4vw]'>
              <div className='one'>
                <p>We do this by following <br />
                  simple approach:
                </p>
              </div>
              <div className='two flex items-center justify-evenly gap-[3vw]'>
                <div>
                  <h5 className='underline capitalize pb-[2.3vw]'>goal degines it all</h5>
                  <p className='pb-[2vw]'>What do you want to achieve? <br /> Understanding the purpose of your <br /> presentation allows us to tailor it <br /> to ensure it hits the mark and drives results.</p>
                  <h5 className='underline capitalize pb-[2.3vw]'>goal degines it all</h5>
                  <p>What do you want to achieve? <br /> Understanding the purpose of your <br /> presentation allows us to tailor it <br /> to ensure it hits the mark and drives results.</p>
                </div>
                <div className='pb-[10vw]'>
                  <h5 className='underline capitalize pb-[2.3vw]'>context makes a difference</h5>
                  <p>When do you present? Online or live? At a<br /> sales meeting, at a  conference, or just <br /> sending a cold email? We knit the context <br /> together to decide the style of <br /> the presentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holistic">
          <div>
            <h1 className='text-[4.5vw] tracking-tighter p-[2vw]'>Holistic process</h1>
            <motion.div  className='division flex  justify-between border-b-2 border-t-2 p-7'>
              <div>01.phase</div>
              <div className='pl-[14vw]'>
                <h5>discover</h5>
                <div className='image w-[8.5vw] h-[17.5vh] bg-red-700 mt-[3vw] rounded-[1vw] overflow-hidden'>
                  <img src="https://ochi.design/wp-content/uploads/2022/05/1.Discovery-194x194.png" alt="" />
                </div>
                <p className='text-[.9vw] tracking-tight pt-[2vw]'>We define your goals, get to know your audience, and understand <br /> the context. Through a process of exploration, investigation, and <br /> research, we seek the insights that inform our future decisions.</p>
              </div>
              <div className='text-[#dadada]'>
                <a href="#">READ</a>
              </div>
            </motion.div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize'>
              <div>02.phase</div>
              <div>storytelling</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize'>
              <div>03.degine</div>
              <div>storytelling</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize'>
              <div>04.phase</div>
              <div>feedback</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize'>
              <div>05.phase</div>
              <div>delivery</div>
              <div><a href="">READ</a></div>
            </div>
          </div>
        </div>
        <div className="let_be_honest w-full h-[160vh] bg-[#CDEA68] rounded-t-lg mt-[15vw]">
          <div className='wraper'>
            <p className='text-5xl justify-center p-[4vw] border-b-2 border-[#bab9b9]'><span className='underline'>Let’s be honest.</span> There are really no excuses to have <br /> a bad presentation anymore. No one has time for <br /> poorly communicated ideas. Focus on what you do <br /> best — growing your business, while we do our best <br /> at <span className='underline'>making your presentations awesome.</span></p>
          </div>
          <div className='Capabilities'>
            <div className='flex  justify-between p-[2vw]'>
              <div>Our Capabilities:</div>
              <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 4 }} className='cont w-[16vw] h-[20vh] bg-black rounded-lg overflow-hidden '></motion.div>
              <div className='flex items-cneter justify-between gap-[10vw] capitalize'>
                <div className='elm ' data-img="https://images.unsplash.com/photo-1711834232251-41a626d4594f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D">
                  <h6>RAISE FUNDS:</h6>
                  <div className=' flex flex-col items-cneter justify-center'>
                    <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>investor deck</h6>
                  </div>
                  <div className='flex flex-col items-cneter justify-center'>
                    <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Startup pitch</h6>
                  </div>
                </div>
                <div className=''>
                  <h6>SELL PRODUCTS:</h6>
                  <div className='elm flex flex-col items-cneter justify-center ' data-img="https://images.unsplash.com/photo-1707170808684-18eb5d49c58e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Business Proposal</h6>
                  </div>
                  <div className='flex flex-col items-cneter justify-center'>
                    <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Company Presentation</h6>
                  </div>
                  <div className='flex flex-col items-cneter justify-center'>
                    <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Product Presentation</h6>
                  </div>
                  <div className='flex flex-col items-cneter justify-center'>
                    <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Sales Deck</h6>
                  </div>
                  <div className='flex flex-col items-cneter justify-center'>
                    <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Service Deck</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='bottom float-right'>
              <div className='flex  justify-between p-[2vw]'>
                <div className='flex items-cneter justify-between gap-[10vw] capitalize'>
                  <div className=''>
                    <h6>RAISE FUNDS:</h6>
                    <div className='flex flex-col items-cneter justify-center'>
                      <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>investor deck</h6>
                    </div>
                    <div className='flex flex-col items-cneter justify-center'>
                      <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Startup pitch</h6>
                    </div>
                  </div>
                  <div>
                    <h6>SELL PRODUCTS:</h6>
                    <div className='flex flex-col items-cneter justify-center'>
                      <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Business Proposal</h6>
                    </div>
                    <div className='flex flex-col items-cneter justify-center'>
                      <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Company Presentation</h6>
                    </div>
                    <div className='flex flex-col items-cneter justify-center'>
                      <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Product Presentation</h6>
                    </div>
                    <div className='flex flex-col items-cneter justify-center'>
                      <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Sales Deck</h6>
                    </div>
                    <div className='flex flex-col items-cneter justify-center'>
                      <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>Service Deck</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Client_reviews">
          <div>
            <h1 className='text-[4.5vw] tracking-tighter p-[2vw]'>Clients’ reviews</h1>
            <div className='division flex  justify-between border-b-2 border-t-2 p-7'>
              <div>Karman Ventures</div>
              <div className=''>
                <h6>Service</h6>
                <div className='flex flex-col items-cneter justify-center'>
                  <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>investor deck</h6>
                </div>
                <div className='flex flex-col items-cneter justify-center'>
                  <h6 className='rounded-[50px] border-zinc-700 text-zinc-700 border-2 text-sm text-center p-1 mt-2 '>sales deck</h6>
                </div>
              </div>
              <div className=''>
                <h5>discover</h5>
                <div className='image w-[8.5vw] h-[17.5vh] mt-[3vw] rounded-[1vw] overflow-hidden'>
                  <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                </div>
                <p className='text-[.9vw] tracking-tight pt-[2vw]'>We define your goals, get to know your audience, and understand <br /> the context. Through a process of exploration, investigation, and <br /> research, we seek the insights that inform our future decisions.</p>
              </div>
              <div className='text-[#dadada]'>
                <a href="#">READ</a>
              </div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize '>
              <div>Premium Blend</div>
              <div>Ellen Kim</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize '>
              <div>Orderlion</div>
              <div>Stefan Strohmer</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize '>
              <div>Workiz Easy</div>
              <div>Tomer Levy</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize '>
              <div>Hypercare Systems</div>
              <div>Brendan Goss</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize '>
              <div>Planetly</div>
              <div>Nina Walloch</div>
              <div><a href="">READ</a></div>
            </div>
            <div className='wraper flex justify-between items-center border-b-2 p-[1.5vw] capitalize '>
              <div>Officevibe</div>
              <div>Raff Labrie</div>
              <div><a href="">READ</a></div>
            </div>
          </div>
        </div>
        <div data-scroll data-scroll-speed=".1" className='big-pic border-b-2'>
          <div className='parent p-[2vw]'>
            <img src="https://ochi.design/wp-content/uploads/2023/08/Group-61165.png" alt="" />
          </div>
        </div>
        <div className='ochi_in_number'>
          <div className=' flex justify-between p-[2vw]'>
            <div className='number'>
              <h6>Ochi in numbers:</h6>
            </div>
            <div className='data'>
              <div className='parent flex justify-evenly gap-4'>
                <div className='w-[25vw] h-[18vw] rounded-lg bg-[#E1E1E1] capitalize tracking-tighter flex flex-col p-[1vw]'>
                  <h1 className='text-[3.6vw] pb-[8vw]'>100+</h1>
                  <p className='text-[1vw]'>client from 17 country</p>
                </div>
                <div className='w-[25vw] h-[18vw] rounded-lg bg-[#E1E1E1] capitalize tracking-tighter flex flex-col p-[1vw]'>
                  <h1 className='text-[3.6vw] pb-[8vw]'>$280+</h1>
                  <p className='text-[1vw]'>million raised frr our client</p>
                </div>
              </div>
              <div className='parent flex justify-evenly gap-4 mt-3'>
                <div className='w-[25vw] h-[18vw] rounded-lg bg-[#E1E1E1] capitalize tracking-tighter flex flex-col p-[1vw]'>
                  <h1 className='text-[3.6vw] pb-[8vw]'>90%</h1>
                  <p className='text-[1vw]'>our client come back</p>
                </div>
                <div className='w-[25vw] h-[18vw] rounded-lg bg-[#E1E1E1] capitalize tracking-tighter flex flex-col p-[1vw]'>
                  <h1 className='text-[3.6vw] pb-[8vw]'>98%</h1>
                  <p className='text-[1vw]'>net promising score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='what_you_can_except'>
          <div className=' bg-[#004D43] rounded-t-lg'>
            <div data-scroll data-section data-scroll-speed=".1" className='w-full py-10'>
              <div className='text border-t-2 border-b-2 uppercase  border-zinc-200 whitespace-nowrap flex  overflow-hidden '>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                  why us other
                </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                  why us other
                </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[19vw] leading-none font-semibold text-zinc-50 pr-8'>
                  why us other
                </motion.h1>
              </div>
            </div>
            <div className=' flex justify-between p-[2vw]'>
              <div className='number text-white'>
                <h6>what you can except:</h6>
              </div>
              <div className='data'>
                <div className='parent flex justify-evenly gap-4'>
                  <div className='w-[25vw] h-[18vw] rounded-lg bg-[#145B52] text-white capitalize tracking-tighter flex flex-col p-[1vw]'>
                    <h1 className='text-[3.6vw] pb-[8vw]'>01</h1>
                    <div className='flex items-center justify-between'>
                      <p className='underline'>communication</p>
                      <a href="">READ</a>
                    </div>
                  </div>
                  <div className='w-[25vw] h-[18vw] rounded-lg bg-[#145B52] text-white capitalize tracking-tighter flex flex-col p-[1vw]'>
                    <h1 className='text-[3.6vw] pb-[8vw]'>04</h1>
                    <div className='flex items-center justify-between'>
                      <p className='underline'>on point of contract</p>
                      <a href="">READ</a>
                    </div>
                  </div>
                </div>
                <div className='parent flex justify-evenly gap-4 mt-3'>
                  <div className='w-[25vw] h-[18vw] rounded-lg bg-[#145B52] text-white capitalize tracking-tighter flex flex-col p-[1vw]'>
                    <h1 className='text-[3.6vw] pb-[8vw]'>02</h1>
                    <div className='flex items-center justify-between'>
                      <p className='underline'>Ukrainian Business</p>
                      <a href="">READ</a>
                    </div>
                  </div>
                  <div className='w-[25vw] h-[18vw] rounded-lg bg-[#145B52] text-white capitalize tracking-tighter flex flex-col p-[1vw]'>
                    <h1 className='text-[3.6vw] pb-[8vw]'>05</h1>
                    <div className='flex items-center justify-between'>
                      <p className='underline'>Constantly Improving</p>
                      <a href="">READ</a>
                    </div>
                  </div>
                </div>
                <div className='parent flex justify-evenly gap-4 mt-3'>
                  <div className='w-[25vw] h-[18vw] rounded-lg bg-[#145B52] text-white capitalize tracking-tighter flex flex-col p-[1vw]'>
                    <h1 className='text-[3.6vw] pb-[8vw]'>03</h1>
                    <div className='flex items-center justify-between'>
                      <p className='underline'>Holistic Approach</p>
                      <a href="">READ</a>
                    </div>
                  </div>
                  <div className='w-[25vw] h-[18vw] rounded-lg bg-[#145B52] text-white capitalize tracking-tighter flex flex-col p-[1vw]'>
                    <h1 className='text-[3.6vw] pb-[8vw]'>06</h1>
                    <div className='flex items-center justify-between'>
                      <p className='underline'>Limited Amount of Clients</p>
                      <a href="">READ</a>
                    </div>
                  </div>
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
            <div data-scroll data-section data-scroll-speed=".1" className=' absolute w-full h-full bg-cover bg-center mb-[50vw] '>
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
