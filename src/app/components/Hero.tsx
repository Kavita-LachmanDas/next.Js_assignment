import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
<div className='we'>
    <><link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          integrity="sha384-tViUnnbYAV00FLIhhi3v/dWt3Jxw4gZQcNoSCxCIFNJVCx7/D55/wXsrNIRANwdD"
          crossOrigin="anonymous" /><div>
              <section className="text-gray-600 body-font">
                  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to My Portfolio!!
                              <br className="hidden lg:inline-block" /> I&apos;M Kavita
                          </h1>
                          <p className="mb-8 leading-relaxed text-white">  I am a passionate Frontend Web Developer dedicated to crafting visually appealing and user-friendly
                              websites. With a keen eye for design and a deep understanding of modern web technologies, I bring ideas
                              to life on the web. Explore my work and let&apos;s create something amazing together!.</p>
                          <div className="flex justify-center">
                              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://drive.google.com/file/d/1e-KbaXTQa4esbg55K5H5M9Ol8YXgR_Fv/view?usp=sharing">Hire Me</a></button>
                              <Link href="https://www.linkedin.com/in/kavita-luhana-0a31842ab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BSvRf%2FsYQRdqrW41oBCRIOw%3D%3D">    <h2 className="ml-2 flex justify-around text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><i className="bi bi-linkedin"></i></h2></Link> 
                          <Link href="">    <h2 className="ml-2 flex justify-around text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><i className="bi bi-instagram"></i>  </h2></Link> 

                            <Link href="https://github.com/Kavita-LachmanDas"><h2 className="ml-2 flex justify-around text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> <i className="bi bi-github"></i></h2></Link> 
                          </div>
                      </div>
                      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                          <img className="object-cover object-center rounded" alt="hero" src="https://www.shutterstock.com/image-vector/young-beautiful-woman-using-laptop-600nw-1908448339.jpg" />
                      </div>
                  </div>
              </section>
          </div></></div>
  )
}
