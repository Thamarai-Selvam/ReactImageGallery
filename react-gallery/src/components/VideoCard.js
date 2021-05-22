import React from 'react'

function getDuration(inSecs) {
    const hours = Math.floor(inSecs / 60 / 60)
    const mins = Math.floor(inSecs / 60) - (hours * 60)
    if(hours !== 0)
        if(mins !== 0)
            return `${hours} : ${mins} : ${inSecs % 60}`
    return `${mins}:${inSecs % 60}`
        
     
    
}
export default function VideoCard({video}) {
    const videos = video !== null ? video.videos : ['Novideos']
    const duration = getDuration(video.duration) 
    console.log(duration);
    return (
        <div className='VideoCard'>
                  
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <video src={videos.medium.url} alt="" className="w-full"/>
            <p className='duration' style={{transform: 'translate(0px,-23px)',textAlign:'end', borderRadius:'3px', paddingRight :'10px', background : 'black',display:'block', opacity:'60%', color : 'white'}}>{duration}</p>
            <div className="px-6 py-4">
              <div className="font-bold text-purple-500 text-xl mb-2">
              Video by {video.user}
              </div>
              <ul>
                <li>
                  <strong>Views: </strong>
                  {video.views}
                </li>
                <li>
                  <strong>Downloads: </strong>
                  {video.downloads}
                </li>
                <li>
                  <strong>Likes: </strong>
                  {video.likes}
                </li>
              </ul>
            </div>
            <div className="px-6 py-4">
              {video.tags.split(',').map((tag, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{tag}
              </span>
              ))}
            </div>
          </div>
            
        </div>
    )
}
