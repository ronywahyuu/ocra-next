import React from "react";
import VideoCard from "@/components/VideoCard";

type Props = {};

const VideoList = (props: Props) => {
  return (
    <div
      className="
      grid
      grid-cols-1
      gap-4

      md:grid-cols-2 lg:grid-cols-4

    "
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />

    </div>
  );
};

export default VideoList;
