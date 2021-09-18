import React from 'react'

import { useState } from 'react'

const SearchBox = ({ search }) => {
    const [text, setText] = useState("")
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={(e) => {
                e.preventDefault()
                search(text)
                setText("")
                }} className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input id="searchbox" value={text} type="text" placeholder="Search for images" className="appearance-none bg-gray-900 rounded border-0 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={(e) => setText(e.target.value)}/>
                    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-1 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBox
