"use client";
import React, { useEffect } from 'react'
import Image from "next/image";
// import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [time, setTime] = React.useState<null | string>(null);
  setTimeout(() => {
    let a = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      second: '2-digit',
    })
    setTime(a);
  }, 1000);


  useEffect(() => {
    //use data-scroll-id to target the element round-wrapper
    //dynamically reduce the height of the div when it's in view and being scrolled
    const updateHeight = () => {
      const roundWrapper = document.querySelector('.round-wrapper') as HTMLDivElement;
      const rect = roundWrapper.getBoundingClientRect();
      const roundWrapperHeight = rect.height;
      const roundWrapperTop = rect.top;
      console.log(roundWrapperHeight, roundWrapperTop);
    }
    window.addEventListener('scroll', updateHeight);

    return () => window.removeEventListener('scroll', updateHeight);
  }, []);

  return (
    <section className='bg-[#1C1D20]' data-scroll-section data-scroll-section-id="footer">
      <div className="round-wrapper" data-scroll data-scroll-id="round-wrapper">
        <div className="rounded-div"></div>
      </div>
      <footer className='text-gray-200 bg-[#1C1D20] w-full md:min-h-screen px-4 sm:px-8 max-w-7xl mx-auto'>
        {/* Lets work together */}
        <div className='pt-20 md:pt-40 px-12 lg:px-20 pb-20 flex flex-col border-b border-0'>
          <div className='flex items-center gap-6'>
            <div className="hexagon-shape h-12 w-12 md:h-24 md:w-24 bg-red-700 overflow-hidden rounded-full">
            <Image
                src="/images/frank-hero.jpeg"
                alt='Frank in a suit'
                width={1680}
                height={800}
                className="w-full h-full object-contain object-center"
            />
            </div>
            <p className='text-gray-50 text-4xl sm:text-6xl md:text-8xl'>Let&apos;s build</p>
          </div>
          <p className='text-gray-50 text-4xl sm:text-6xl md:text-8xl'>together</p>
        </div>
        {/* CTA Buttons */}
        <div className='flex flex-col w-full md:flex-row justify-between items-center mt-20 px-4 md:px-12 lg:px-20 pb-20'>
          <div className='flex flex-col sm:flex-row gap-4 w-full'>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:frankudoags@gmail.com"
              className='cta-btn'
            >
              Contact me via Mail
            </a>
            {/* reach me on whatsapp */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+2349065233174"
              className='cta-btn'
            >
              Reach me on Whatsapp
            </a>
          </div>
        </div>
        <section className='flex gap-12 pb-12 flex-col md:flex-row justify-between items-start'>
          {/* Socials */}
          <div className=''>
            <span className='text-gray-200 font-thin'>SOCIALS</span>
            <div className='w-full mt-8 pb-6'>
              <div className='flex flex-row justify-between items-center gap-12 md:gap-8 w-fit'>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/udoagwa-franklin-226966195/">
                  <LinkedInIcon />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/frank_udoags">
                  <TwitterIcon />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/frankudoags">
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
          {/*   Date and version */}
          <div className=' flex justify-between items-center gap-4 md:gap-8 w-full sm:w-fit'>
            <div className='flex flex-col gap-2'>
              <div className='text-gray-200 font-thin'>LOCAL TIME</div>
              <p className='text-gray-200 font-extralight pt-4'>{time}</p>
            </div>
          </div>
        </section>
      </footer>
    </section>
  )
}

export default Footer




const TwitterIcon = () => (
  <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='white'><path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z" /></svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" className='h-6 w-6' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640" fill='white'><path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z" /></svg>
)

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill='white' className='h-6 w-6' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg>
)
