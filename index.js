// import { VideoPlayer } from "./VideoPlayer/VideoPlayer.js";

const VideoPlayer = () => {
  return <div className="md:w-1/2 h-1/2 md:h-full border-3 ">Video Player</div>;
};

const PlayList = () => {
  return (
    <div className="md:w-1/2 h-1/2 md:h-full border-3">
      PlayList
    </div>
  )
}

const Component = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <VideoPlayer />
      <PlayList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root-element"));
root.render(<Component />);
