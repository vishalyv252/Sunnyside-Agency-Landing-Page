import React from 'react'
import { Link } from 'react-router-dom';
import Emoji from './Images/Icons/emoji-out.png';

const About = () => {
    return (
    <>
        <div>
            
            <div className='block Tablet:hidden'>
                <div className='relative bg-red-500'>
                    <div className='flex justify-center items-center h-screen w-full'>
                        <div className='flex justify-center items-center h-auto w-auto'>
                            <div className='flex flex-col justify-center my-auto'>
                                <img src={Emoji} alt={'Emoji'} className='mx-auto h-64 w-64'/>
                                <h1 className='mx-auto text-5xl my-2 font-Barlow'>404</h1>
                                <p className='mx-auto text-3xl w-full my-2 font-Barlow'>The page you're looking for does not seem to exist</p>
                                <button className='mx-auto my-12'>
                                    <Link to='/' className='cursor-pointer p-8 bg-Yellow rounded-full font-Barlow text-3xl'>Go back to Contact</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden Tablet:block'>
                <div className='relative bg-red-500'>
                    <div className='flex justify-center items-center h-screen w-full'>
                        <div className='flex justify-center items-center h-auto w-96 Mobile:w-72'>
                            <div className='flex flex-col justify-center my-auto'>
                                <img src={Emoji} alt={'Emoji'} className='mx-auto h-44 w-44'/>
                                <h1 className='mx-auto text-4xl my-2 font-Barlow'>404</h1>
                                <p className='mx-auto text-xl w-full my-2 font-Barlow w-40 text-center'>The page you're looking for does not seem to exist</p>
                                <button className='mx-auto my-12'>
                                    <Link to='/' className='cursor-pointer p-4 bg-Yellow rounded-full font-Barlow text-xl'>Go back to Contact</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}

export default About;