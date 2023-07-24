'use client'

import Navbar from "../components/Navbar";
import Title from "@/components/Title";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";
interface BlogCardProps {
  tags?: string[];
  title: string;
  avatar?: string;
  author?: string;
  category: string;
  description?: string;
  hero?: string
}

export default function Home() {

  const [userData, setUserData] = useState<any>()

    async function fetchData (){
        try {
            const res = await fetch('https://randomuser.me/api');
            const data = await res.json();
            const parsedData = parseData(data.results)
            return parsedData; 
          } catch (error) {
            console.error('Error fetching data:', error);
            throw error; 
          }
    } 

    function parseData(results: any){
      console.log(results)
        const parsedData = {
            avatar: results[0].picture.thumbnail,
            author: results[0].name.first + ' ' + results[0].name.last,
            category: results[0].location.country,
            hero: results[0].picture.large
        };

        setUserData(parsedData)
    }

    
    useEffect(() => {
      async function logData(){
        await fetchData()
      }
      
      logData()
    }, [])

    
    const blogList: BlogCardProps[] = [
        {
            tags: ['Skincare'],
            title: 'Possibilities with different moods and atmospheres.',
            avatar: userData?.avatar,
            author: userData?.author,
            category: userData?.category,
            description: 'Outdoor session photography with models offers fantastic opportunity to capture stunning images in natural settings.',
            hero: userData?.hero
        },{
            tags: ['Skincare'],
            title: 'Possibilities with different moods and atmospheres.',
            avatar: userData?.avatar,
            author: userData?.author,
            category: userData?.category,
            description: 'Outdoor session photography with models offers fantastic opportunity to capture stunning images in natural settings.',
            hero: userData?.hero
        },{
            tags: ['Skincare'],
            title: 'Possibilities with different moods and atmospheres.',
            avatar: userData?.avatar,
            author: userData?.author,
            category: userData?.category,
            description: 'Outdoor session photography with models offers fantastic opportunity to capture stunning images in natural settings.',
            hero: userData?.hero
        }
    ]

  return (
    <StyledEngineProvider>
      <div className='p-5 pt-7 text-black dark:text-white mx-auto max-w-7xl'>
        <Navbar />
        <Title />
        <div className='card-container flex flex-col gap-3 my-5 overflow-visible xs:flex-row xs:items-center xs:overflow-x-scroll md:grid md:grid-cols-2 lg:grid-cols-3'>
          {blogList.map((blogItem, idx) => (
            <BlogCard
              key={idx}
              tags={blogItem.tags} 
              title={blogItem.title}
              avatar={blogItem.avatar}
              author={blogItem.author}
              category={blogItem.category}
              description={blogItem.description}
              hero={blogItem.hero}
              animationDelay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </StyledEngineProvider>
  );
}
