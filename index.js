// import { VideoPlayer } from "./VideoPlayer/VideoPlayer.js";
import { PlayListData } from "./PlayList/PlayListData.js";
const { useState } = React;
const { Sidebar } = primereact.sidebar;

const VideoPlayer = ({ video, sidePlaylistMenu, setSidePlaylistMenu }) => {
  // console.log(sidePlaylistMenu);
  return (
    // <div className="w-full lg:w-2/3 h-full flex  snap-center snap-always">
    <div className="p-3 w-full h-full md:h-auto flex flex-col gap-y-3 bg-emerald-900 rounded-lg overflow-hidden">
      {video?.type !== "video/Youtube" ? (
        <video
          key={video?.url}
          className="w-full h-full aspect-video rounded-lg bg-black"
          controls
        >
          <source src={video?.url} type={video?.type} />
          <p>Sorry, but some error has occured.</p>
        </video>
      ) : (
        <iframe
          className="w-full h-full aspect-video rounded-lg border-2"
          title={video?.title}
          src={video?.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="p-3 w-full h-[200px] flex flex-col gap-y-3 item-start lg:items-center bg-rose-100 text-teal-900 rounded-lg relative">
        <h3 className="w-full text-2xl capitalize font-medium">
          {video?.title}
        </h3>
        <p className="w-full hidden md:block">
          {video?.description ? video?.description : "No description"}
        </p>
        <span
          className="p-3 block lg:hidden material-symbols-rounded h-fit bg-teal-900 text-rose-100 hover:bg-rose-600 hover:cursor-pointer rounded-full absolute bottom-3 right-3"
          onClick={() => setSidePlaylistMenu(true)}
        >
          playlist_play
        </span>
      </div>
    </div>
    // </div>
  );
};

const PlayList = ({
  PlayListData,
  selectedVideo,
  setSelectedVideo,
  sidePlaylistMenu,
  setSidePlaylistMenu,
}) => {
  // console.log(sidePlaylistMenu);
  const [playListView, setPlayListView] = useState("grid");
  const PlayListCards = PlayListData?.map((values, key) => (
    <div
      className={`playListCard p-2 md:p-4 flex ${
        playListView === "grid" ? "flex-col w-[47.5%]" : "flex-row w-[97%]"
      } gap-2 h-40 overflow-hidden ${
        selectedVideo === key ? "bg-lime-800" : "bg-emerald-900"
      } hover:bg-lime-800 hover:cursor-pointer rounded-lg`}
      key={key}
      onClick={() => {
        setSelectedVideo(key);
        sidePlaylistMenu ? setSidePlaylistMenu(false) : "";
      }}
    >
      {!values?.thumbnail ? (
        <img
          className={`rounded-lg ${
            playListView === "grid" ? "w-full aspect-video" : "w-[47.5%]"
          }`}
          src={values?.thumbnail}
          alt={values?.title}
        />
      ) : (
        <span
          className={`material-symbols-rounded ${
            playListView === "grid" ? "w-full aspect-video" : "w-[47.5%]"
          } border-2 rounded-lg flex justify-center items-center`}
        >
          gallery_thumbnail
        </span>
      )}
      <p
        className={`whitespace-nowrap overflow-hidden ${
          playListView === "grid" ? "w-full" : "w-[47.5%]"
        }`}
        title={values.title}
      >
        {values.title}
      </p>
    </div>
  ));
  return (
    <>
      {/* <div
        className={`w-full lg:w-1/3 h-full flex flex-col gap-y-3  snap-start snap-always`}
      > */}
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
      <div className="pb-2 w-full h-auto flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-2 overflow-y-auto playListCardsContainer">
        {PlayListCards}
        {/* {PlayListCards}
        {PlayListCards}
        {PlayListCards} */}
      </div>
      {/* </div> */}
    </>
  );
};

const Component = ({ PlayListData }) => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [sidePlaylistMenu, setSidePlaylistMenu] = useState(false);
  return (
    <div className="w-full h-full flex flex-wrap lg:flex-nowrap flex-column lg:flex-row p-3 gap-3 overflow-y-auto lg:overflow-hidden snap-y snap-mandatory">
      <div className="w-full lg:w-2/3 h-full flex  snap-center snap-always">
        <VideoPlayer
          video={PlayListData[selectedVideo]}
          sidePlaylistMenu={sidePlaylistMenu}
          setSidePlaylistMenu={setSidePlaylistMenu}
        />
      </div>
      <div
        className={`w-full lg:w-1/3 h-full hidden lg:flex flex-col gap-y-3  snap-start snap-always`}
      >
        <PlayList
          PlayListData={PlayListData}
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
      <div>
        <Sidebar
          className="block lg:hidden bg-teal-950 text-rose-100 w-[90vw]"
          visible={sidePlaylistMenu}
          position="right"
          onHide={() => setSidePlaylistMenu(false)}
          modal={false}
          dismissable
        >
          <div
            className={`w-full h-full flex flex-col gap-y-3  snap-start snap-always`}
          >
            <PlayList
              PlayListData={PlayListData}
              selectedVideo={selectedVideo}
              setSelectedVideo={setSelectedVideo}
              sidePlaylistMenu={sidePlaylistMenu}
              setSidePlaylistMenu={setSidePlaylistMenu}
            />
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root-element"));
root.render(<Component PlayListData={PlayListData} />);
