import VideoCard from "@/components/VideoCard";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const VideoDetail = (props: Props) => {
  const [comments, setComments] = useState('')
  const [disabledComment, setDisabledComment] = useState(false);

  useEffect(() => {
    if (comments.length > 0) {
      setDisabledComment(false)
    } else {
      setDisabledComment(true)
    }
  }, [disabledComment, comments]);
  
  const router = useRouter();
  // console.log(router.query)
  return (
    <div className="flex flex-col lg:flex-row items-start gap-3">
      {/* left side */}
      <div className="w-4/5">
        {/* <video className="w-full h-full" src="https://youtu.be/ZK54OHi5Abo" autoPlay ></video> */}
        <video
          className="w-full  h-full object-cover transition duration-500 "
          autoPlay
          // video dummy
          src="https://storage.googleapis.com/ocra-27c92.appspot.com/data/channels/123/videos/qtUhUPquCDF/video/SawanoHiroyuki[nZk]-Aimer-S-aveft.Aimer.mp4 "
          controls
        ></video>

        {/* video detail */}
        <div className="p-4 ">
          <h1 className="text-xl font-semibold text-white">
            SawanoHiroyuki[nZk]-Aimer-S-aveft.Aimer
          </h1>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-500">1.2M views</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">2 years ago</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 rounded-full bg-gray-500"></div>
            <div>
              <p className="text-white font-medium">
                Windah Basudara
                {/* subsribe button */}
                <button className="bg-red-500 text-white font-semibold px-2 py-1 rounded-md text-sm ml-2 hover:bg-red-900 transition duration-150 ml-3">
                  Subscribe
                </button>
              </p>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
          </div>
        </div>

        {/* comment section */}
        <div className="p-4">
          <h1 className="text-xl  text-white">100 Comments</h1>
          <div>
            <form action="" className="relative">
              <textarea
                name=""
                id=""
                placeholder="Add a public comment..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full bg-gray-800 rounded-md p-2 text-white"
              ></textarea>
              <button
                type="submit"
                disabled={disabledComment}
                className="
                disabled:cursor-not-allowed disabled:opacity-50 
              bg-navy text-white font-semibold px-2 py-1 rounded-md text-sm  hover:bg-red-900 transition duration-150  "
              >
                Comment
              </button>
            </form>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <div className="w-8 h-8 rounded-full bg-gray-500"></div>
            <div>
              <p className="text-white font-medium">Windah Basudara</p>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className=" w-1/5  ">
        <VideoCard sm />
        <VideoCard sm />
        <VideoCard sm />
        <VideoCard sm />
        <VideoCard sm />
        <VideoCard sm />
        <VideoCard sm />
        <VideoCard sm />
        <VideoCard sm />
      </div>
    </div>
  );
};

export default VideoDetail;
