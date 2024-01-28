'use client'
import Card from './components/Card'
import { useState, useEffect, useRef } from 'react'
import { IoAddCircle } from "react-icons/io5";
import { FaRandom } from "react-icons/fa";

export default function Home() {
  const isMounted = useRef(false)
  const [topics, setTopics] = useState([""]);

  const [selectedTopic, setSelectedTopic] = useState(0);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    localStorage.setItem("topics", JSON.stringify(topics));
  }, [topics]);

  useEffect(() => {
    const newTopics = localStorage.getItem("topics");
    console.log('new', JSON.parse(newTopics || "[]"));
    if (newTopics) {
      setTopics(JSON.parse(newTopics));
    }
    return () => {
      isMounted.current = false
    }
  }, [])


  return (
    <div>
      <h1 className='text-center text-7xl text-bold p-10 flex justify-center gap-3'>
        <span className=' text-[#0e77c7]'>Talk </span> list
      </h1>
      <div className='flex flex-col w-[80%] md:w-[20%] m-auto gap-4'>
        {topics.map((topic: string, index: number) =>
          <Card key={index} title={topic} topics={topics} setTopics={setTopics} isSelected={selectedTopic == index} />
        )}

        <div className='flex justify-center gap-5'>
          <button className='text-6xl text-center transition opacity-20 scale-75 hover:opacity-100 hover:scale-100' onClick={() => {
            setTopics([...topics, ""]);
          }}>
            <IoAddCircle />
          </button>

          <button className='text-6xl text-center transition opacity-20 scale-75 hover:opacity-100 hover:scale-100' onClick={() => {
            setSelectedTopic(Math.floor(Math.random() * topics.length));
          }}>
            <FaRandom />
          </button>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
