import React from 'react'
import Image from 'next/image'

export default function author() {
  return (
    <div className='author flex py-5'>
      <Image src={"/images/author.png"}width={60} height={60} className='rounded-full' />
      <div className='flex flex-col justify-center px-4'>
        <a className='text-md font-bold text-gray-800 hover:text-gray-600'>marrie cruso</a>
        <span className='text-sm text-gray-600'>CEO and FOUNDER</span>
      </div>
    </div>
  )
}
