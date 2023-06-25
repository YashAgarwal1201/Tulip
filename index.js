// import { VideoPlayer } from "./VideoPlayer/VideoPlayer.js";
import { PlayListData } from "./PlayList/PlayListData.js";
const { useState } = React;

const VideoPlayer = ({ video }) => {
  console.log(video)
  return (
    <div className="w-full md:w-1/2 lg:w-2/3 h-1/2 md:h-full flex">
      <div className="p-3 w-full h-full md:h-auto flex flex-col gap-y-3 bg-emerald-900 rounded-lg overflow-hidden">
        {video?.type !== "video/Youtube" ? (
          <video key={video?.url} className="w-full h-auto md:aspect-video rounded-lg" controls>
            <source
              src={video?.url}
              type={video?.type}
            />
            <p>Sorry, but some error has occured.</p>
          </video>
        ) : (
          <iframe
            className="w-full h-full rounded-lg"
            title={video?.title}
            src={video?.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        <div className="p-2 w-full h-1/3 flex flex-wrap justify-between items-center bg-rose-100 text-teal-900 rounded-lg">
          <h3 className="text-2xl capitalize font-medium">
            {video?.title}
          </h3>
          <span className="p-3 material-symbols-rounded bg-teal-900 text-rose-100 hover:bg-rose-600 hover:cursor-pointer rounded-full">
            expand_more
          </span>
          <p className="w-full hidden md:block">
              {video?.description
              ? video?.description
              : "No description"}
          </p>
          <p className="w-full hidden md:block">
              {video?.type
              ? video?.type
              : "No description"}
          </p>
        </div>
      </div>
    </div>
  );
};

const PlayList = ({PlayListData, selectedVideo, setSelectedVideo }) => {
  const [playListView, setPlayListView] = useState("grid");
  const PlayListCards = PlayListData?.map((values, key) => (
    <div
      className={`playListCard p-2 md:p-4 ${
        playListView === "grid" ? "w-[47.5%]" : "w-[97%]"
      } h-[125px] md:h-[150px] overflow-hidden ${
        selectedVideo === key ? "bg-lime-800" : "bg-emerald-900"
      } hover:bg-lime-800 hover:cursor-pointer rounded-lg`}
      key={key}
      onClick={() => setSelectedVideo(key)}
    >
      <p>{values.id + " " + key}</p>
      <p>{values.title}</p>
      <p>{values.description}</p>
      <p>{values.url}</p>
    </div>
  ));
  return (
    <div className="md:w-1/2 lg:w-1/3 h-1/2 md:h-full flex flex-col gap-y-3">
      <div className="p-2 w-full text-2xl flex justify-between items-center bg-emerald-900 rounded-lg">
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
      <div className="pb-2 w-full h-full flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-2 overflow-y-auto playListCardsContainer">
        {PlayListCards}
        {PlayListCards}
        {PlayListCards}
      </div>
    </div>
  );
};

const Component = ({PlayListData}) => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-3 gap-3">
      <VideoPlayer video={PlayListData[selectedVideo]} />
      <PlayList
        PlayListData={PlayListData}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root-element"));
root.render(<Component PlayListData={PlayListData} />);
