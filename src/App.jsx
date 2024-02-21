import "./App.scss";
import videoDetails from "./data/video-details.json";

import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Description from "./components/Description/Description";

function App() {
  console.log(videoDetails);
  return (
    <div className="App">
      <Header />
      <Video />
      <div className="collection">
        <Description />
      </div>
    </div>
  );
}

export default App;
