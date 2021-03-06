import React, { useEffect } from 'react';
import Pocketdevs from '../public/img/pocketdevs.png'
import Rightvalley from '../public/img/rightvalley.png'
import Pockethub from '../public/img/pockethub.png'
import NEUMeet from '../public/img/neumeet.png'
import Trial from '../public/img/Trial.png'
import Me from '../public/img/Me.png'
import Particles from "react-tsparticles";
import Parts from '../public/parts.json'

import CSS from '../public/img/css-3.png'
import HTML from '../public/img/html-5.png'
import Python from '../public/img/python.png'
import PHP from '../public/img/php.png'
import ReactJs from '../public/img/react.png'
import django from '../public/img/django.png'
import JS from '../public/img/js.png'
import Bootstrap from '../public/img/bootstrap.png'
import Tailwind from '../public/img/tailwind-css.png'
import MaterialUi from '../public/img/material-ui.png'
import Link from 'next/link'


import Image from 'next/image';
export default function Home() {
  useEffect(() => {

    function scrollTo(element, to = 0, duration= 1000) {
  
      const start = element.scrollTop;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;
    
      const animateScroll = (() => {
    
        currentTime += increment;
    
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
    
        element.scrollTop = val;
    
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      });
    
      animateScroll();
    };
    
    Math.easeInOutQuad = function (t, b, c, d) {
    
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };
    
    document.querySelector('.scroll-top').onclick = function () {
      scrollTo(document.documentElement); 
    }
    
    
  
  
  
  }, [])
  return (
    <main className=" scroll-smooth">
      <section className="h-full p-5 text-white bg-red-900 lg:py-16 lg:px-32" id="home">
        <Particles id="tsparticles" params={Parts} />
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col-reverse items-center w-11/12 py-20 md:flex-row">
            <div className="lg:w-6/12 ">

              <h1 className="text-2xl md:text-4xl md:px-3 font-berkshire-swash "> Zinia Ma. Consuelo Trinidad </h1>
              <h5 className='px-4 text-3xl py-7 k'>I&apos;m a <span className='font-bold text-black font-berkshire-swash'>Web
                  Developer</span> </h5>
              <a href="https://www.facebook.com/zmcrtrinidad/" className='px-5 '><i
                  className="fa-brands fa-facebook fa-2xl"></i></a>
              <a href="https://twitter.com/thb_mnyngi_zn" className='px-5 '><i
                  className="fa-brands fa-twitter fa-2xl"></i></a>
              <a href="https://github.com/zmcrtrinidad" className='px-5 '><i className="fa-brands fa-github fa-2xl"></i></a>
              <a href="https://www.linkedin.com/in/zinia-trinidad/" className='px-5 '><i
                  className="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>

            <div className='rounded-full backdrop-blur-md bg-white/30 '>
              <Image src={Me} />
            </div>

          </div>
        </div>

      </section>
      <section className="flex flex-col h-full " id="about">
        <div className="p-5 text-white bg-black lg:py-16 lg:px-32">
          <div className="section-title">
            <h2 className="font-bigshot-one">About Me</h2>
          </div>
          <div className="grid grid-cols-2 my-5 text-white sm:grid-cols-3 lg:grid-cols-10 justify-items-center">
            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={HTML} width={50} height={50} />
            </div>

            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={CSS} width={50} height={50} />

            </div>

            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={Python} width={50} height={50} />
            </div>

            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={PHP} width={50} height={50} />
            </div>
            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={ReactJs} width={50} height={50} />
            </div>

            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={django} width={50} height={50} />
            </div>
            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={JS} width={50} height={50} />
            </div>
            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={Bootstrap} width={50} height={50} />
            </div>
            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={Tailwind} width={50} height={50} />
            </div>
            <div className="px-5 py-5 rounded-full backdrop-blur-sm bg-white/30">
              <Image src={MaterialUi} width={50} height={50} />
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center px-5 text-white bg-red-900 lg:py-16 lg:px-32">
          <h1 className="p-6 text-2xl">I am a 4th year college IT Student from New era University. Passionate about front-end
            development and building web applications that are clean, easy to use and intuitive.</h1>
        </div>
      </section>
      <section className="h-full p-5 text-white bg-black lg:py-16 lg:px-32" id="works">

        <div className="section-title">
          <h2 className="font-bigshot-one">Works</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 pt-12 mx-auto sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <div className="mx-auto transition-all transform hover:scale-105 md:mx-0">
            <Image src={NEUMeet} height={620} className="shadow" alt='neumeet' />
            <h2>NEUMEET</h2>

          </div>
          <div className="mx-auto transition-all transform hover:scale-105 md:mx-0">
            <Image src={Pockethub} className="shadow" alt='neumeet' />

          </div>
          <div className="mx-auto transition-all transform hover:scale-105 md:mx-0">
            <Image src={Trial} className="shadow" alt='neumeet' />

          </div>
          {/* <div className="mx-auto transition-all transform hover:scale-105 md:mx-0">
            <Image src={NEUMeet} className="shadow" alt='neumeet' />

          </div> */}
        </div>
      </section>
      <section className="h-full p-5 text-white bg-red-900 lg:py-16 lg:px-32" id="experience">
        <div className="section-title">
          <h2 className="font-bigshot-one">My Work Experience</h2>
        </div>

        <div className="relative flex flex-col w-full mx-auto lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>
          <div className="flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image src={Rightvalley} width={180} height={50} alt="company logo" />
                </span>
              </div>
            </div>
            <div className="md:w-3/5">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white ">
                  </div>
                  <time className="mb-1 text-xl font-normal leading-none">September 2020</time>
                  <h3 className="text-2xl font-semibold ">Web Developer Intern</h3>

                </li>

              </ol>
            </div>
          </div>
          <div className="flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image src={Pocketdevs} className="w-32 h-auto " width={150} height={30} alt="company logo" />
                </span>
                <div className="relative hidden w-full ml-3 md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white ">
                  </div>
                  <time className="mb-1 text-xl font-normal leading-none ">February 2022</time>
                  <h3 className="text-2xl font-semibold ">Web Developer Intern</h3>

                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full p-5 text-white bg-black lg:py-16 lg:px-32" id="contact">
        <div className="section-title">
          <h2 className="font-bigshot-one">Contact</h2>
        </div>
        <div className="flex flex-col justify-center min-h-screen py-6 sm:py-12">
          <div className="relative py-3 ">
            <div
              className="relative px-4 py-10 bg-white border border-gray-200 shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60">

              <div className="grid grid-cols-1 gap-6 px-5">
                <label className="block">
                  <span className="font-bold text-white">Full name</span>
                  <input type="text" className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                </label>
                <label className="block">
                  <span className="font-bold text-white">Email address</span>
                  <input type="email" className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="john@example.com" />
                </label>

                <label className="block">
                  <span className="font-bold text-white">Additional details</span>
                  <textarea className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" rows="3"></textarea>
                </label>
              </div>
              <div className="flex flex-col pt-16 lg:flex-row">
                <div
                  className="w-full px-6 py-6 border-t-2 border-b-2 border-l-2 border-r-2 border-grey-60 sm:py-8 lg:w-1/3">
                  <div className="flex items-center">
                    <i className="text-2xl bx bx-phone text-grey-40"></i>
                    <p className="font-bold uppercase font-body text-grey-40 lg:text-lg">
                      <i className="fa-solid fa-mobile"></i>
                      My Phone
                    </p>
                  </div>
                  <p className="pt-2 font-bold text-left font-body text-primary lg:text-lg">
                    09266405551
                  </p>
                </div>
                <div
                  className="w-full px-6 py-6 border-t-0 border-b-2 border-l-2 border-r-2 border-grey-60 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                  <div className="flex items-center">
                    <i className="text-2xl bx bx-envelope text-grey-40"></i>
                    <p className="font-bold uppercase font-body text-grey-40 lg:text-lg">
                      <i className="fa-solid fa-envelope"></i>
                      My Email
                    </p>
                  </div>
                  <p className="pt-2 font-bold text-left font-body text-primary lg:text-lg">
                    zmcrtrinidad@gmail.com
                  </p>
                </div>
                <div
                  className="w-full px-6 py-6 border-t-0 border-b-2 border-l-2 border-r-2 border-grey-60 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                  <div className="flex items-center">
                    <i className="text-2xl bx bx-map text-grey-40"></i>
                    <p className="font-bold uppercase font-body text-grey-40 lg:text-lg">
                      <i className="fa-solid fa-location-pin"></i>
                      My Address
                    </p>
                  </div>
                  <p className="pt-2 font-bold text-left font-body text-primary lg:text-lg">
                    Philippines
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Link href="#">
      <a className="scroll-top">
        <i className="fa-solid fa-angle-up"></i>
      </a>
      </Link>
    </main>
  )
}