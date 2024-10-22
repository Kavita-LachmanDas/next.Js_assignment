import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

  <Image className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded' src={"https://static.vecteezy.com/system/resources/previews/010/519/639/original/a-girl-using-laptop-cartoon-character-free-vector.jpg"} alt='' width={50} height={50} />
    {/* <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://static.vecteezy.com/system/resources/previews/010/519/639/original/a-girl-using-laptop-cartoon-character-free-vector.jpg" width={50%} height={30%}/> */}
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me</h1>
      <p className="mb-8 leading-relaxed">I am a passionate frontend web developer with a strong foundation in HTML, CSS, JavaScript,
                and TypeScript. My expertise also extends to using Bootstrap for creating responsive and visually
                appealing web designs. I am dedicated to building seamless, user-friendly interfaces and continuously
                refining my skills to stay updated with the latest trends in web development. I am committed to turning
                creative ideas into functional and efficient websites.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://drive.google.com/file/d/1e-KbaXTQa4esbg55K5H5M9Ol8YXgR_Fv/view?usp=sharing">click here</a></button>
     
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
