import React from 'react'

const ImageCard = ({ image }) => {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a target="_blank" href={image.pageURL}><img src={image.webformatURL} alt="" className="w-full" /></a>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-x1 mb-2">Photo by {image.user}</div>
          <ul>
            <li>
              <strong>Likes:</strong> {image.likes}
            </li>
            <li>
              <strong>Views:</strong> {image.views}
            </li>
            <li>
              <strong>Downloads:</strong> {image.downloads}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {image.tags.split(", ").map(tag => {
            return <span key={image.id} className="inline-block bg-gray-200 rounded-full px-3 py-1text-sm font-semibold text-gray-700 mr-2" id={image.id + image.tag}>{tag}</span>
          })}
        </div>
      </div>
    )
}

export default ImageCard
