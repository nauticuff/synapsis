'use client'

import Button from '@mui/material/Button'
import TestButton from '@/components/TestButton'
import { useEffect, useState } from 'react';

import BlogCard from '@/components/BlogCard';

interface BlogCardProps {
  tags?: string[];
  title: string;
  avatar?: string;
  author?: string;
  category: string;
  description?: string;
  hero?: string
}

export default function PortfolioPage() {

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

    if(userData === undefined) return
    const blogList: BlogCardProps[] = [
        {
            tags: ['Skincare'],
            title: 'Possibilities with different moods and atmospheres.',
            avatar: userData.avatar,
            author: userData.author,
            category: userData.category,
            description: 'Outdoor session photography with models offers fantastic opportunity to capture stunning images in natural settings.',
            hero: userData.hero
        },{
            tags: ['Skincare'],
            title: 'Possibilities with different moods and atmospheres.',
            avatar: userData.avatar,
            author: userData.author,
            category: userData.category,
            description: 'Outdoor session photography with models offers fantastic opportunity to capture stunning images in natural settings.',
            hero: userData.hero
        },{
            tags: ['Skincare'],
            title: 'Possibilities with different moods and atmospheres.',
            avatar: userData.avatar,
            author: userData.author,
            category: userData.category,
            description: 'Outdoor session photography with models offers fantastic opportunity to capture stunning images in natural settings.',
            hero: userData.hero
        }
    ]
    
  return (
    <div>
      <TestButton />
      <Button className='text-purple-500 text-4xl'>TEST</Button>
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
          />
        ))}
    </div>
  )
}
