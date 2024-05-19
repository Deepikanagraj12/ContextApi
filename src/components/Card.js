import React from 'react'

const Card = ({post}) => {
  return (
    <div className='gap-3'>
       <h1 className='font-bold text-lg'>{post.title}</h1>
       <p className='text-sm mt-[4px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
       <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
       <p className='text-md mt-[14px]'>{post.content}</p>
       <div className='flex gap-x-3'>{
        post.tags.map((tag) => (
            <span className="text-blue-700 underline font-bold text-xs mt-[5px]">{` #${tag}`}</span>
         ) )
       }
       </div>
    </div>
  )
}

export default Card