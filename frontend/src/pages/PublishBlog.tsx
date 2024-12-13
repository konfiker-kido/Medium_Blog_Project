import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Appbar } from '../Components/Appbar'; 


// Dynamically import ReactQuill to ensure it's only loaded on the client-side
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Interface for Blog Post
interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

const BlogEditor: React.FC = () => {
  // State to manage blog posts
//   const [posts, setPosts] = useState<BlogPost>(); 
  const navigate = useNavigate(); 
  
  // State for current post being edited
  const [currentPost, setCurrentPost] = useState<BlogPost>({
    id: '',
    title: '',
    content: '',
    createdAt: new Date()
});

  // Quill modules to enable specific formatting options
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ]
  };

  // Handle title input
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPost(prev => ({
      ...prev,
      title: e.target.value
    }));
  };

  // Handle content change from Quill editor
  const handleContentChange = (content: string) => {
    setCurrentPost(prev => ({
      ...prev,
      content: content
    }));
  };

  return (
    <>
    <Appbar />  
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Blog Editor
        </h1>
        
        {/* Blog Post Input */}
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Enter blog post title" 
            value={currentPost.title}
            onChange={handleTitleChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          
          <div className="border border-gray-400 rounded-md">
            <ReactQuill 
              theme="snow"
              value={currentPost.content}
            //   onChange={handleContentChange}
            onChange={handleContentChange}
              modules={modules}
              placeholder="Write your blog post here..."
              className="h-64"
            />
          </div>
          
          <button onClick={async () => {  
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog/create`, {
                        title:currentPost.title,
                        content: currentPost.content
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    console.log("publish post response: ",response);  
                    navigate(`/blog/${response.data.post.id}`)
                }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post  
                </button>
        </div>

        {/* Saved Blog Posts */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Saved Posts
          </h2>
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              No posts yet. Start writing your first blog post!
            </p>
          ) : (
            <div className="space-y-6"> 
              {posts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {post.title}
                  </h3>
                  <div 
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose max-w-none text-gray-700"
                  />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Created on: {post.createdAt.toLocaleString()}
                  </p>
                </div>
              ))} 
            </div>
          )}
        </div>
          */}
      </div>
    </div>
    </>
  );
};

// function TextEditor({ onChange }: {onChange: (e:any) => void}) {
//     return <div className="mt-2">
//         <div className="w-full mb-4 ">
//             <div className="flex items-center justify-between border">
//             <div className="my-2 bg-white rounded-b-lg w-full">
//                 <label className="sr-only">Publish post</label>
//                 <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required />
//             </div>
//         </div>
//        </div>
//     </div>
    
// }

export default BlogEditor;