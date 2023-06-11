// import { VideoPlayer } from "./VideoPlayer/VideoPlayer.js";
import { PlayListData } from "./PlayList/PlayListData.js";

const VideoPlayer = () => {
  return (
    <div className="md:w-1/2 h-1/2 md:h-full flex md:justify-center md:items-center">
      Video Player
    </div>
  );
};

const PlayList = () => {
  console.log(PlayListData);
  const PlayListCards = PlayListData.map((values, key) => (
    <div
      className="playListCard px-3 py-3 w-[97%] md:w-[47.5%] h-[125px] md:h-[150px] bg-emerald-900 hover:bg-lime-800 hover:cursor-pointer rounded-lg"
      key={key}
    >
      <p>{values.id}</p>
      <p>{values.title}</p>
      <p>{values.description}</p>
      <p>{values.url}</p>
    </div>
  ));
  return (
    <div className="px-4 md:w-1/2 h-1/2 md:h-full flex md:justify-center md:items-center">
      <div className="md:h-3/5 flex flex-wrap gap-x-3 gap-y-2 overflow-y-auto playListCardsContainer">
        {PlayListCards}
        {PlayListCards}
      </div>
      {/* {PlayListCards} */}
    </div>
  );
};

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
