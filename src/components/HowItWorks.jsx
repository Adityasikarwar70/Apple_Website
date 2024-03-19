import { useGSAP } from "@gsap/react"
import { battery1, chipImg, ios1701, ios1702, ios1703 } from "../utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {

  useGSAP(()=>{
    gsap.from('#chip',{
      
      scrollTrigger:{
        trigger:"#chip",
        start:'20% bottom',
      },
      opacity:0,
      scale:2,
      duration:2,
      ease:'power2.inOut'
    })

  gsap.to('#IOSIMAGE',{
      
    scrollTrigger:{
      trigger:"#IOSIMAGE",
      start:'20% bottom',
      toggleActions: "restart reverse restart reverse",
      
    },
    y:0,
    opacity:1,
    duration:1,
    ease:'power2.inOut',
    stagger:0.1,
  })
  gsap.to('#TEXT',{
      
    scrollTrigger:{
      trigger:"#TEXT",
      start:'20% bottom',
      toggleActions: "restart reverse restart reverse",
      
    },
    y:0,
    opacity:1,
    duration:1,
    ease:'power2.inOut',
    stagger:0.2,
  })
  gsap.to(['#Hours','#playback'],{
      
    scrollTrigger:{
      trigger:"#Hours",
      start:'20% bottom',
      toggleActions: "restart reverse restart reverse",
      
    },
    y:0,
    opacity:1,
    duration:0.5,
    ease:'power1',
    stagger:0.2,
  })
 
  
},[])


  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5 flex flex-col gap-[10vw] items-center justify-center">
      <div className="screen-max-width">
        <div id="chip" className=" flex items-center justify-center w-full my-20">
          <img src={chipImg} alt="chip"  width={180} height={180}/>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-semibold text-center"> A17 Pro Chip. <br /> A monster win for gaming.</h2>
          <p className="text-gray-600 font-semibold text-xl md:text-2xl py-10 text-center"> it is here. the biggest redesign in the history of Apple GPUs </p>
        </div>
      </div>
      <div className="screen-max-width flex flex-col  items-center justify-center mx-20">
      <div  className="flex  md:gap-10 items-center justify-center ">
        <img id="IOSIMAGE" className=" opacity-0 translate-y-20 w-[30vw] md:w-[15vw]"  src={ios1701} alt="" />
        <img id="IOSIMAGE" className=" opacity-0 translate-y-20 w-[30vw] md:w-[16vw]"  src={ios1702} alt="" />
        <img id="IOSIMAGE" className=" opacity-0 translate-y-20 w-[30vw] md:w-[15vw]"  src={ios1703} alt="" />
      </div>
      
      <div className="w-[70%] flex items-center justify-center flex-col md:flex-row mt-10 md:mt-16 gap-5" >
      <div className="flex items-center justify-center flex-1 ">
      <p id="TEXT" className="mt-10 text-white max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]">Contact Poster. <span className="text-gray-600"> Create your own poster that contacts will see when you call. Pick a favourite pic or Memoji, pair it with a favourite font and there you have it — your very own calling card.</span></p>
                </div>

                <div className="flex items-center justify-center flex-1 ">
          <p id="TEXT" className="mt-10 text-white max-w-md text-lg md:text-lg font-semibold opacity-0 translate-y-[100px]">NameDrop. <span className="text-gray-600"> Want to swap contact info with someone? Just bring your iPhone close to theirs. You can both choose what you want to share, and the information transfers instantly.</span></p>
                  
                </div>
                <div className="flex items-center justify-center flex-1 ">
          <p id="TEXT" className="mt-10 text-white max-w-md  text-lg md:text-lg font-semibold opacity-0 translate-y-[100px]">Live Stickers.<span className="text-gray-600"> Touch and hold an object in a photo to lift it from the background and create a sticker. Add effects like Puffy and Shiny. Or create animated stickers from Live Photos.</span></p>
                  
                </div>
          

      </div>
      </div>


      <div className="screen-max-width mx-20">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-bold text-center"> All-day battery life. <br /> For all the things you <br /> want to keep doing.</h2> 
        </div>
        <div className="flex flex-col items-center pt-4">
          <img src={battery1} alt="" />

        </div>
        <div className="screen-max-width md:px-[6vw] flex md:flex-row flex-col items-center md:items-start  md:gap-[15vw]">
          <div className="left flex flex-col">
            <div>
            <div>
              <p className="text-2xl font-bold text-gray-600">Up to</p>
              <h1 id="Hours" className=" relative z-10 text-6xl md:text-8xl  font-bold translate-y-20 opacity-0">26 hours</h1>
            </div>
            <p className="relative z-50 text-2xl font-bold text-gray-600 h-20 bg-black">video playback on iPhone 15 Plus</p>
            </div>

            <div>
            <div>
              <p className="text-2xl font-bold text-gray-600" >Up to</p>
              <h1 id="Hours" className=" relative z-10 text-6xl md:text-8xl font-bold translate-y-20 opacity-0">20 hours</h1>
            </div>
            <p className=" relative z-50 text-2xl font-bold text-gray-600 h-20 bg-black">video playback on iPhone 15</p>
            </div>
          </div>
          <div className="right py-10 border-t-2 ">
            <h1 id="playback" className="text-2xl font-bold text-gray-300 translate-y-20 opacity-0">Up to 3 additional hours <br /> of video playback <br /> compared to iPhone 12</h1>
          </div>
        </div>


      </div>
    </section>
  )
}

export default HowItWorks
