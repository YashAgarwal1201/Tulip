// import { VideoPlayer } from "./VideoPlayer/VideoPlayer.js";
import { PlayListData } from "./PlayList/PlayListData.js";
const { useState } = React;

const VideoPlayer = () => {
  return (
    <div className="w-full md:w-1/2 h-fit md:h-full flex md:justify-center md:items-center">
      <div className="p-3 mx-1 sm:mx-auto mt-2 w-full sm:w-1/2 md:w-2/3 h-full md:h-auto flex flex-col gap-y-3 bg-emerald-900 rounded-lg overflow-hidden">
        <video className="w-full h-auto md:aspect-video rounded-lg" controls>
          <source src="" type="" />
        </video>
        <div className="p-2 w-full h-1/3 flex flex-wrap justify-between items-center bg-rose-100 text-teal-900 rounded-lg">
          <h3 className="text-2xl capitalize font-medium">A title</h3>
          <span className="p-3 material-symbols-rounded bg-teal-900 text-rose-100 hover:bg-rose-600 hover:cursor-pointer rounded-full">
            expand_more
          </span>
          <p className="w-full hidden md:block">A description</p>
        </div>
      </div>
    </div>
  );
};

const PlayList = () => {
  const [playListView, setPlayListView] = useState("grid");
  // console.log(PlayListData);
  const PlayListCards = PlayListData?.map((values, key) => (
    <div
      className={`playListCard p-2 md:p-4 ${
        playListView === "grid" ? "w-[47.5%]" : "w-[97%]"
      } h-[125px] md:h-[150px] bg-emerald-900 hover:bg-lime-800 hover:cursor-pointer rounded-lg`}
      key={key}
    >
      <p>{values.id + " " + key}</p>
      <p>{values.title}</p>
      <p>{values.description}</p>
      <p>{values.url}</p>
    </div>
  ));
  return (
    <div className="px-1 md:px-4 md:w-1/2 h-fit md:h-full max-h-[50%] flex flex-col md:justify-center md:items-center gap-y-3">
      <div className="p-2 mt-2 md:mt-0 w-full text-2xl flex justify-between items-center bg-emerald-900 rounded-lg">
        <h2>Playlist</h2>
        <div className="flex gap-x-2">
          <span
            className={`material-symbols-rounded p-3 ${
              playListView === "grid"
                ? "bg-rose-600 text-rose-100 hover:cursor-default"
                : "bg-emerald-900 text-rose-100 hover:text-rose-600 hover:cursor-pointer"
            } rounded-full`}
            onClick={() => {
              setPlayListView("grid");
            }}
          >
            grid_view
          </span>
          <span
            className={`material-symbols-rounded p-3 ${
              playListView === "list"
                ? "bg-rose-600 text-rose-100 hover:cursor-default"
                : "bg-emerald-900 text-rose-100 hover:text-rose-600 hover:cursor-pointer"
            } rounded-full`}
            onClick={() => {
              setPlayListView("list");
            }}
          >
            format_list_bulleted
          </span>
        </div>
      </div>
      <div className="pb-2 w-full md:h-3/5 flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-2 overflow-y-auto playListCardsContainer">
        {PlayListCards}
        {PlayListCards}
      </div>
    </div>
  );
};

const Component = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-y-3">
      <VideoPlayer />
      <PlayList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root-element"));
root.render(<Component />);
