import Header from "./components/Header";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";


export default function App() {

  const{fetchBlogPosts} = useContext(AppContext);

  useEffect(() =>{
    fetchBlogPosts();
  },[])

  return (
    <div>
       <Header />
       <Blogs/>
       <Footer/>
    </div>
  );
}
