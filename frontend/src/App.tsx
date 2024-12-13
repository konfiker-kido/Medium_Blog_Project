import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import BlogEditor from './pages/PublishBlog'
import { Blogs } from './pages/Blogs' 

import FirebaseSignIn from './Components/FirebaseAuthPage'
function App() {
  

  return (
    <>
       <BrowserRouter>
       <Routes>   
          <Route path="/fire" element={<FirebaseSignIn />} />    
          <Route path="/" element={<Signin />} />   
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<BlogEditor />} /> 
          {/* <Route path="/publishBlog" element={<BlogEditor />} /> */}
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
