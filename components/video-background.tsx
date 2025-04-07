"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function VideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create YouTube Player
    if (!window.YT) {
      // Load the YouTube IFrame Player API code asynchronously
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = initializePlayer
    } else {
      initializePlayer()
    }

    function initializePlayer() {
      if (!videoRef.current) return

      new window.YT.Player("youtube-player", {
        videoId: "Ozj7_RXzcdM", // Green smoke background video
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1, // Mute the video by default
          playlist: "Ozj7_RXzcdM", // Required for looping
        },
        events: {
          onReady: (event) => {
            event.target.playVideo()
            setIsLoaded(true)
          },
          onStateChange: (event) => {
            // If video ends, replay it
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo()
            }
          },
        },
      })
    }

    return () => {
      // Clean up
      window.onYouTubeIframeAPIReady = null
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className={cn("absolute inset-0 transition-opacity duration-1000", isLoaded ? "opacity-100" : "opacity-0")}>
        {/* Video overlay to control brightness/contrast */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>

        {/* YouTube player container */}
        <div ref={videoRef} className="relative w-full h-full">
          <div
            id="youtube-player"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
        </div>
      </div>
    </div>
  )
}

