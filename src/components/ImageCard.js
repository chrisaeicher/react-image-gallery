import React from 'react'

const ImageCard = ({ image, search }) => {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a rel="noreferrer" target="_blank" href={image.pageURL}>
          <img src={image.webformatURL} alt="" className="w-full" />
        </a>
        <div className="px-6 py-4">
        <a rel="noreferrer" target="_blank" href={`https://pixabay.com/users/${image.user}/`}><div className="font-bold text-blue-500 hover:text-blue-700 text-x1 mb-2">Photo by {image.user}</div></a>
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
            return <span key={image.id + tag} onClick={() => search(tag)} className="inline-block mb-2 bg-gray-200 hover:bg-gray-500 hover:text-white cursor-pointer rounded-full px-3 py-1text-sm font-semibold text-gray-700 mr-2" id={image.id + tag}>#{tag}</span>
          })}
        </div>
      </div>
    )
}

export default ImageCard
