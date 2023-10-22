import { Header } from "./components/Header";
import { Album } from "./components/Album";
import data from "./data.json";

export const App = () => {
  const albums = data.albums.items;
  return (
  <div className="app">
    <Header header={"Album and single releases"} />
    <div className="albumContainer">
      {albums.map((album) => (
        <Album key={album.id} albumInfo={album}/>
      ))}
    </div>
  </div>
  );
};


export default App;