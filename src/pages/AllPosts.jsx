import {React, useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard} from "../components"


function AllPosts() {
    const [post, setPost] = useState([])
    useEffect(()=>{},[])

    appwriteService.getPosts([]).then((posts)=> {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='py-8'>
            <Container>
                {/* {posts.map((post)=>{
                    <PostCard key={post.$id} post={post}/>
                })} */}

                <div className='flex- flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id}className='p-2 w-1/4'>
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
