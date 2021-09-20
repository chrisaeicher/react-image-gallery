import React, { useState, useEffect } from "react";
import ImageCard from './components/ImageCard'
import SearchBox from "./components/SearchBox";

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  })
  const searchImages = (word) => {
    setTerm(word)
  }
  return (
    <div className="container md:ml-12 md:mr-12 mx-auto">
      <SearchBox search={searchImages}/>
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No images found.</h1>}
      {isLoading ? <h1 className="text-6xl text-center mt-32">Loading...</h1>
      : <div className="grid ml-2 mr-2 md:ml-12 md:mr-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {images.map(image => {
          return <ImageCard search={searchImages} key={image.id} image={image}/>
        })}
      </div>}
    </div>
  );
}

export default App;
