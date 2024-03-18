import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../../constants";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../../utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setvideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, isPlaying, videoId, startPlay } = video;

  useGSAP(() => {
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setvideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });


    gsap.to('#slider',{
        transform:`translateX(${-100*videoId}%)`,
        duration:1,
        ease:'power2.inOut'
    })


  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) { 
      // here we will animate the progress of the video

      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "3vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}% `,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
            if(isPlaying){
                gsap.to(videoDivRef.current[videoId],{
                    width:'12px',
                })
                gsap.to(span[videoId],{
                    backgroundColor:'#afafaf'
                })
            }
        },
      });

      if(videoId===0) {
        anim.restart();
      }
      const animUpdate = ()=>{
        anim.progress(videoRef.current[videoId].currentTime/
        hightlightsSlides[videoId].videoDuration)
      }
      if(isPlaying){
          gsap.ticker.add(animUpdate)
      }else{
          gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay, isPlaying]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setvideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setvideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setvideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
        break;

      case "play":
        setvideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "pause":
        setvideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center ">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="pr-10 sm:pr-20">
            <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-3xl bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setvideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onEnded={()=> i !==3 ? handleProcess('video-end',i):handleProcess('video-last')}
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                  className="pointer-events-none "
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className=" absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" relative flex items-center justify-center mt-10">
        <div className=" flex items-center justify-center py-5 px-7 bg-zinc-800 backdrop-blur rounded-full">
          {videoRef.current.map((_,i) => (
            <span
              key={i}
              ref={(el) => {
                videoDivRef.current[i] = el;
              }}
              className=" mx-2 w-3 h-3 bg-zinc-500 rounded-full relative cursor-pointer"
            >
              <span
                ref={(el) => {
                  videoSpanRef.current[i] = el;
                }}
                className=" absolute h-full w-full rounded-full"/>
            </span>
          ))}
        </div>
        <button className="ml-4 p-4 rounded-full bg-zinc-800 backdrop-blur flex-center">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
