import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

export const AppContext = createContext();

export default function AppContextProvider ({children}) {

    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);
    const[posts, setPosts] = useState([]);

    async function fetchBlogPosts(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
           const res = await fetch(url);
           const data = await res.json();
           setPage(data.page);
           setTotalPages(data.totalPages);
           setPosts(data.posts);
        }
        catch(error){
            <h1>No data Found</h1>
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setLoading(page);
        fetchBlogPosts(page);
    }

    const value ={
        page,
        setPage,
        loading,
        setLoading,
        totalPages, 
        setTotalPages,
        posts,
        setPosts,
        fetchBlogPosts,
        handlePageChange
    }


return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
}