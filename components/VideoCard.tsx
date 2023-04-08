import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VideoCardProps {
  sm?: boolean;
}

const VideoCard = ({ sm }: VideoCardProps) => {
  if (sm) {
    return (
      <Link href="/watch/1398c">
        <div id="card" className="">
          <div>
            {/* <Image src="/hero.png" alt="Ocra Logo" width={1} height={1} /> */}
            <img src="/hero.png" className="h-40 rounded-md" alt="" />
          </div>
          <div>
            {/* avatar */}
            <div className="flex  gap-2 p-2 w-full">
              <div>
                <p className="text-white font-medium">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-gray-400">Windah Basudara</p>
                <p className="text-gray-400">200 views | 10 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link href="/watch/1398c">
      <div
        id="card"
        className=""
      >
        <div>
          {/* <Image src="/hero.png" alt="Ocra Logo" width={1} height={1} /> */}
          <img src="/hero.png" className="h-40 rounded-md" alt="" />
        </div>
        <div>
          {/* avatar */}
          <div className="flex  gap-2 p-2 w-full">
            <div className="w-8 h-8 rounded-full bg-gray-500"></div>
            <div>
              <p className="text-white font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="text-gray-400">Windah Basudara</p>
              <p className="text-gray-400">200 views | 10 minutes ago</p>
            </div>
          </div>
            
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
