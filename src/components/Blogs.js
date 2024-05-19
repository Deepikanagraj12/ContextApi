import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {

    const {posts, loading} = useContext(AppContext);

  return (
    <div className='h-screen pt-20 flex-col justify-center items-center max-w-screen-sm gap-y-10'>
    {   loading ? (<Spinner/>): 
        posts.length === 0 ?
        ( (<p>
        No posts Found</p>) ):
      
        ( posts.map((post) => (<Card post={post} key={post.id}/>)) )
      
    }

    </div>
  )
}

export default Blogs