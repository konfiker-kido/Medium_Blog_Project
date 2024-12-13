import  { useState, useEffect } from 'react';
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from 'react-router-dom';


interface blogPost{
    authorData:{
        email:string,
        id:string,
        name:string,
        role:string
    }, 
    post:{
        authorId:string,
        content:string,
        published:string,
        title:string,
        timeStamp: number
    }
}
export const Blog  = () => {
    // State to store the blog post data
    const [blogPost, setBlogPost] = useState<blogPost>();  
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
     let blogID = useParams().id?.toString() || "";        
     
    // Function to fetch blog post
    const getBlogPost = async (id: string) => {
        setLoading(true);  
        const token= localStorage.getItem('token');
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);   
            setBlogPost(response.data);
            setError(null);
        } catch (e) {
            setError('Failed to fetch blog post');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    // Example of using the fetch function (you'd typically call this with an actual ID)
    useEffect(() => {
        getBlogPost(blogID); 
    }, []);
     
    const month=['Jan','Feb','Mar','April', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    var timeStr:string="";
    if(blogPost && blogPost.post && blogPost?.post.timeStamp){
        const time =new Date(blogPost?.post.timeStamp );
        timeStr+=`${time.getDate()} ${month[(time.getMonth()-1)]} , ${time.getFullYear()}`;
    }

    return (
        <div className='h-screen'> 
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            { blogPost && (
                <div > 
                
                    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white  antialiased h-screen">
                    <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <header className="mb-4 lg:mb-6 not-format">
                                <address className="flex items-center mb-6 not-italic">
                                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">  
                                        <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                                        <div>
                                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 ">{blogPost.authorData.name.toUpperCase()}</a>
                                            <p className="text-base text-gray-500 "> {blogPost.authorData.role?blogPost.authorData.role:'Content Writer'} </p> 
                                            <p className="text-base text-gray-500 "><time pubdate datetime="2022-02-08" title="February 8th, 2022">{timeStr} </time></p>
                                        </div>
                                    </div>
                                </address>
                                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{blogPost.post.title}</h1>
                            </header>
                            <div dangerouslySetInnerHTML={{ __html: blogPost.post.content }} className="prose max-w-none " />
                        </article>
                    </div>
                </main>

                </div>
            )}
        </div>
    );

}