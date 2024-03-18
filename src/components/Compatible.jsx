import { MAc } from "../utils"
import { useGSAP } from "@gsap/react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const Compatible = () => {

    useGSAP(()=>{
        
            gsap.to('#para',{
              
              scrollTrigger:{
                trigger:"#para",
                start:'20% bottom',
                toggleActions: "restart reverse restart reverse"
              },
              opacity:1,
              y:0,
              duration:1,
              ease:'power1'
            })
            gsap.to('#macImg',{
              
              scrollTrigger:{
                trigger:"#macImg",
                start:'20% bottom',
                toggleActions: "restart reverse restart reverse"
              },
              scale:1.07,
              duration:1,
              ease:'power1'
            })

    },[])


  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5 flex flex-col gap-[10vw] items-center justify-center bg-white">
        <div className="screen-max-width flex items-start flex-col gap-10 ">
            <h1 className="text-black text-4xl md:text-8xl font-bold">USB-C<span className="text-[#00000082]">ompatible.</span></h1>
            <p id="para" className="text-[#828282] text-[2vh] md:text-lg  font-bold translate-y-10 opacity-0">The new USB-C connector lets you <span className="text-black"> charge your Mac or iPad with the <br /> same cable </span> you use to charge iPhone 15. You can even use iPhone 15 <br /> to charge Apple Watch or AirPods.5 Bye-bye, cable clutter.</p>
        </div>
        <div>
            <img id="macImg" className=" relative md:-left-[15vw] md:-top-[17vh]" src={MAc} alt="" />
        </div>

        

    </section>
  )
}

export default Compatible
