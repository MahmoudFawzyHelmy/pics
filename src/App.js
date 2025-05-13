import SearchBar from "./components/SearchBar";
import searchImage from "./Api";
import { useState } from "react";
import ImageList from "./components/ImageList";
export default function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    let results = await searchImage(term);
    console.log(results);
    setImages(results);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
