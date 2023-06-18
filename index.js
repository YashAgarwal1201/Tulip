// import { VideoPlayer } from "./VideoPlayer/VideoPlayer.js";
import { PlayListData } from "./PlayList/PlayListData.js";
const { useState } = React;

const VideoPlayer = () => {
  return (
    <div className="md:w-1/2 h-1/2 md:h-full flex md:justify-center md:items-center">
      <div className="w-2/3 h-full md:h-1/2 bg-emerald-900 rounded-lg">
        VideoPlayer
      </div>
    </div>
  );
};

const PlayList = () => {
  const [playListView, setPlayListView] = useState("grid");
  // console.log(PlayListData);
  const PlayListCards = PlayListData?.map((values, key) => (
    <div
      className={`playListCard px-3 py-3 ${ playListView === 'grid' ? 'w-[47.5%]' : 'w-[97%]'} h-[125px] md:h-[150px] bg-emerald-900 hover:bg-lime-800 hover:cursor-pointer rounded-lg`}
      key={key}
    >
      <p>{values.id}</p>
      <p>{values.title}</p>
      <p>{values.description}</p>
      <p>{values.url}</p>
    </div>
  ));
  return (
    <div className="px-4 md:w-1/2 h-1/2 md:h-full flex flex-col md:justify-center md:items-center gap-y-3">
      <div className="w-full text-2xl flex justify-between items-center">
        <h2>Playlist</h2>
        <div className="flex gap-x-2">
          <span
            className={`material-symbols-rounded ${
              playListView === "grid"
                ? "text-rose-600 hover:cursor-default"
                : "text-rose-100 hover:text-rose-600 hover:cursor-pointer"
            }`}
            onClick={() => {
              setPlayListView("grid");
            }}
          >
            grid_view
          </span>
          <span
            className={`material-symbols-rounded ${
              playListView === "list"
                ? "text-rose-600 hover:cursor-default"
                : "text-rose-100 hover:text-rose-600 hover:cursor-pointer"
            }`}
            onClick={() => {
              setPlayListView("list");
            }}
          >
            format_list_bulleted
          </span>
        </div>
      </div>
      <div className="w-full md:h-3/5 flex flex-wrap gap-x-3 gap-y-2 overflow-y-auto playListCardsContainer">
        {PlayListCards}
        {PlayListCards}
      </div>
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
