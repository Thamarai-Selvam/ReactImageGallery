import ImageCard from './components/ImageCard'
import VideoCard from './components/VideoCard'
import ImageSearch from './components/ImageSearch'
import { React, useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([])
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('random')
  const [inVideos, setInVideos] = useState(false)

  const APIKEY = process.env.REACT_APP_PIXABAY_API_KEY
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${APIKEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term])

  useEffect(() => {
    if(inVideos){
      console.log('Seaching Videos ', term);
      fetch(`https://pixabay.com/api/videos/?key=${APIKEY}&q=${term}&pretty=true`)
      .then(res => res.json())
        .then(data => {
          console.log(data.hits);
          setVideos(data.hits);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }
    
  }, [inVideos])

  return (
    <div className="App">
      <div className="container mx-auto">
        <ImageSearch inVideo={(inVideo) => setInVideos(inVideo)} searchText={(text) => setTerm(text)} />
          
          {!isLoading && videos.length === 0 && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images/Videos Found</h1> }

          {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> 
                    : <div className="grid grid-cols-3 gap-4">
                          {images.map(image => (
                            <ImageCard key={image.id} image={image}/>
                          ))
                          }
                      </div>
          }
          
          {isLoading && videos.length !== 0 ? 
                    <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> 
                    : <div className="grid grid-cols-3 gap-4">
                          {videos.map(video => (
                            <VideoCard key={video.id} video={video}/>
                          ))
                          }
                      </div>
          }
      </div>
    </div>
  );
}

export default App;
