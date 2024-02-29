import React from 'react'
import Card from './Card'

const Courses = () => {
  return (
    
 <div className='flex flex-col justify-center items-center'>

 <h1 className='text-[2rem] text-bolder'>Courses Links and Images below</h1>
<div className="grid gap-4 w-[60%]">
    <div>
        <Card title={''} width={300}/>
    </div>
    <div className="grid grid-cols-3 gap-4">
       
       
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
        </div>
    </div>
</div>
</div>
  )
}

export default Courses
