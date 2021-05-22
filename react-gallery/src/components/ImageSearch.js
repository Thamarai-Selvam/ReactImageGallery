import {React, useState,useEffect} from 'react'

export default function ImageSearch({searchText, inVideo}) {

    const [text, setText] = useState('')
    const [inVideos, setInVideos] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text);
    }

    useEffect(() => {
        searchText(text)
        inVideo(inVideos)
        console.log('v', inVideos);
        console.log('t', text);
    }, [text, inVideos])

    
    return (
        <div className="ImageSearch">
            <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
                <form onSubmit={onSubmit} className="w-full max-w-sm">
                    <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                        <label className="inline-flex items-center mt-3">
                            <input onChange={e => setInVideos(!inVideos)}  type="checkbox" className="form-checkbox h-5 w-5 text-purple-600"/>
                            <span className="ml-2 text-gray-700">Videos</span>
                        </label>
                        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white ml-3 py-1 px-2 rounded" type="submit">
                            Search
                        </button>
                        
                    </div>
                </form>
		    </div>
        </div>
    )
}
