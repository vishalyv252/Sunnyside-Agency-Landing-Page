import React from 'react'

{/*For Desktop images */}
import HeaderDesktop from './Images/Desktop/image-header.jpg'
import TransformDesktop from './Images/Desktop/image-transform.jpg'
import StandOutDesktop from './Images/Desktop/image-stand-out.jpg'
import GraphicDesign from './Images/Desktop/image-graphic-design.jpg'
import Photography from './Images/Desktop/image-photography.jpg'
import Cone from './Images/Desktop/image-gallery-cone.jpg'
import MilkBottles from './Images/Desktop/image-gallery-milkbottles.jpg'
import Orange from './Images/Desktop/image-gallery-orange.jpg'
import SugarCubes from './Images/Desktop/image-gallery-sugarcubes.jpg'

{/*For mobile images */}
import HeaderMobile from './Images/Mobile/image-header.jpg'
import TransformMobile from './Images/Mobile/image-transform.jpg'
import StandOutMobile from './Images/Mobile/image-stand-out.jpg'
import GraphicDesignMobile from './Images/Mobile/image-graphic-design.jpg'
import PhotographyMobile from './Images/Mobile/image-photography.jpg'
import ConeMobile from './Images/Mobile/image-gallery-cone.jpg'
import MilkBottlesMobile from './Images/Mobile/image-gallery-milkbottles.jpg'
import OrangeMobile from './Images/Mobile/image-gallery-orange.jpg'
import SugarCubesMobile from './Images/Mobile/image-gallery-sugar-cubes.jpg'

{/*For all devices */}
import { Link } from 'react-router-dom'
import Arrow from './Images/Icons/icon-arrow-down.png'
import AvatarOne from './Images/Persons/image-emily.jpg'
import AvatarTwo from './Images/Persons/image-thomas.jpg'
import AvatarThree from './Images/Persons/image-jennie.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
    <>
        <div>

            {/* This is for Laptop and Design design */}
            <div className='block Tablet:hidden'>
                <main>
                    <div className='relative'>
                        <div>
                            <img src={HeaderDesktop} alt={'Header-Desktop'} className='h-full w-full block z-10'/>
                        </div>
                        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
                            <h1 className='text-5xl text-White font-Fraunces LS:text-4xl text-center'>WE ARE CREATIVES</h1>
                        </div>
                        <div className='absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
                            <img src={Arrow} alt={'Arrow'} className='h-auto w-auto LS:h-24 LS:w-auto'/>
                        </div>
                    </div>
                    <div className='flex w-full h-full'>
                        <div className='w-1/2 flex flex-col h-full my-auto'>
                            <h2 className='font-Fraunces text-3xl w-80 ml-32 mb-10 text-VDDB LS:ml-16 LS:text-2xl LS:mb-5 LS:w-64'>Transform your brand</h2>    
                            <p className='font-Barlow text-[18px] w-[63%] ml-32 mb-10 text-DGB LS:ml-16 LS:w-[70%] LS:mb-5 LS:text-sm'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>  
                            <button className="font-Barlow text-[18px] ml-32 w-32 text-center mx-auto text-VDDB border-b-2 border-transparent relative inline-block cursor-pointer LS:ml-16 LS:text-sm LS:w-28">
                                <span className="relative z-10 font-Fraunces text-VDDB">LEARN MORE</span>
                                <span className="absolute inset-0 top-[80%] left-[-50%] rounded-full bg-Yellow transform -translate-y-1/2 translate-x-1/2 w-full"></span>
                            </button>
                        </div>
                        <div className='w-1/2'>
                            <img src={TransformDesktop} alt={'Transform-Desktop'} className='w-full h-full' />
                        </div>
                    </div>
                    <div className='flex w-full h-full'>
                        <div className='w-1/2'>
                            <img src={StandOutDesktop} alt={'Stand-Out-Desktop'} className='w-full h-full'/>
                        </div>
                        <div className='w-1/2 flex flex-col h-full my-auto'>
                            <h2 className='font-Fraunces text-3xl w-80 ml-32 mb-10 text-VDDB LS:ml-16 LS:text-2xl LS:mb-5 LS:w-64'>Stand out to the right audience</h2>    
                            <p className='font-Barlow text-[18px] w-[63%] ml-32 mb-10 text-DGB LS:ml-16 LS:w-[70%] LS:mb-5 LS:text-sm'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>  
                            <button className="font-Barlow text-[18px] ml-32 w-32 text-center mx-auto text-VDDB border-b-2 border-transparent relative inline-block cursor-pointer LS:ml-16 LS:text-sm LS:w-28">
                                <span className="relative z-10 font-Fraunces text-VDDB">LEARN MORE</span>
                                <span className="absolute inset-0 top-[80%] left-[-50%] rounded-full bg-SR transform -translate-y-1/2 translate-x-1/2 w-full"></span>
                            </button>
                        </div>
                    </div>
                    <div className='flex w-full h-full'>
                        <div className='relative'>
                            <div>
                                <img src={GraphicDesign} alt={'GraphicDesign'} className='h-auto w-auto'/>
                            </div>
                            <div className='absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center'>
                                <h2 className='font-Fraunces text-3xl my-5 mx-auto text-DDC LS:my-3 LS:text-2xl'>Graphic design</h2>
                                <p className='font-Barlow text-[18px] mx-auto w-96 text-DDC LS:w-[300px] LS:text-sm'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <img src={Photography} alt={'Photography'} className='h-auto w-auto'/>
                            </div>
                            <div className='absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center'>
                                <h2 className='font-Fraunces text-3xl my-5 mx-auto text-DB LS:my-3 LS:text-2xl'>Photography</h2>
                                <p className='font-Barlow text-[18px] mx-auto w-96 text-DB LS:w-[300px] LS:text-sm'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col h-full w-full'>
                        <div>
                            <h5 className='text-center font-Fraunces text-3xl mt-24 mb-10 text-DGB LS:text-2xl LS:mt-20 LS:mb-8'>CLIENT TESTIMONIALS</h5>
                        </div>
                        <div className='flex justify-center items-center h-auto w-full mb-24 LS:mb-20'>
                            <div className='flex flex-col justify-center mx-auto ml-44 LS:ml-22'>
                                <div className='flex flex-col justify-center'>
                                    <img src={AvatarOne} alt={'Avatar-One'} className='rounded rounded-full h-20 w-20 mx-auto mb-10 LS:mb-8' />
                                    <p className='text-[18px] font-Barlow mx-auto w-[90%] mb-10 text-center text-VDGB LS:mb-8 LS:text-xs LS:w-60'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <h6 className='text-2xl font-Fraunces mx-auto mb-2 text-VDDB LS:mb-1 LS:text-xl'>Emily R.</h6>
                                    <p className='text-[18px] font-Barlow mx-auto text-GB LS:text-sm'>Marketing Director</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center LS:mx-4'>
                                <div className='flex flex-col justify-center'>
                                    <img src={AvatarTwo} alt={'Avatar-Two'} className='rounded rounded-full h-20 w-20 mx-auto mb-10 LS:mb-8' />
                                    <p className='text-[18px] font-Barlow mx-auto w-[90%] mb-10 text-center text-VDGB LS:mb-8 LS:text-xs LS:w-[260px]'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <h6 className='text-2xl font-Fraunces mx-auto mb-2 text-VDDB LS:mb-1 LS:text-xl'>Thomas S.</h6>
                                    <p className='text-[18px] font-Barlow mx-auto text-GB LS:text-sm'>Chief Operating Officer</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center mx-auto mr-44 LS:mr-22'>
                                <div className='flex flex-col justify-center'>
                                    <img src={AvatarThree} alt={'Avatar-Three'} className='rounded rounded-full h-20 w-20 mx-auto mb-10 LS:mb-8' />
                                    <p className='text-[18px] font-Barlow mx-auto w-[90%] mb-10 text-center text-VDGB LS:mb-8 LS:text-xs LS:w-60'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <h6 className='text-2xl font-Fraunces mx-auto mb-2 text-VDDB LS:mb-1 LS:text-xl'>Jennie F.</h6>
                                    <p className='text-[18px] font-Barlow mx-auto text-GB LS:text-sm'>Business Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={MilkBottles} alt={'MilkBottles'} className='h-auto w-1/4' />
                        <img src={Orange} alt={'Orange'} className='h-auto w-1/4' />
                        <img src={Cone} alt={'Cone'} className='h-auto w-1/4' />
                        <img src={SugarCubes} alt={'SugarCubes'} className='h-auto w-1/4' />
                    </div>
                </main>
                <footer>
                    <div className='flex flex-col bg-DMC'>
                        <div className='text-center'>
                            <h6 className='font-Poppins text-4xl mt-16 text-DDC'>sunnyside</h6>
                        </div>
                        <div className='flex justify-center mt-10 mb-16'>
                            <ul>
                                <li>
                                    <Link className='font-Barlow mr-28 text-[18px] mx-auto text-DDC hover:text-White' to='/About'>About</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link className='font-Barlow text-[18px] mx-auto text-DDC hover:text-White' to='/Services'>Services</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link className='font-Barlow ml-28 text-[18px] mx-auto text-DDC hover:text-White' to='/Projects'>Projects</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex justify-center mb-28'>
                            <FontAwesomeIcon icon={faFacebookSquare} className='mx-5 h-10 w-10 text-DDC cursor-pointer hover:text-White'/>
                            <FontAwesomeIcon icon={faInstagram} className='mx-5 h-10 w-10 text-DDC cursor-pointer hover:text-White'/>
                            <FontAwesomeIcon icon={faTwitter} className='mx-5 h-10 w-10 text-DDC cursor-pointer hover:text-White'/>
                            <FontAwesomeIcon icon={faPinterest} className='mx-5 h-10 w-10 text-DDC cursor-pointer hover:text-White'/>
                        </div>
                    </div>
                </footer>
            </div>
            
            {/* This is for Tablet's design and Mobile's design */}
            <div className='hidden Tablet:block Mobile:block'>
                <main>
                    <div className='relative'>
                        <div>
                            <img src={HeaderMobile} alt={'Header-Mobile'} className='h-full w-full Tablet:block hidden'/>
                        </div>
                        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                            <h1 className='text-6xl text-White font-Fraunces text-center Mobile:text-4xl'>WE ARE CREATIVES</h1>
                        </div>
                        <div className='absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 Tablet:top-[64%]'>
                            <img src={Arrow} alt={'Arrow'} className='h-44 w-auto Mobile:h-auto Mobile:w-auto'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <img src={TransformMobile} alt={'Transform-Mobile'} className='w-full h-full' />
                        </div>
                        <div className='w-full flex flex-col justify-center h-auto mx-auto my-10'>
                            <h2 className='font-Fraunces text-3xl my-12 w-64 text-center mx-auto text-VDDB Mobile:my-4 Mobile:text-2xl Mobile:w-56'>Transform your brand</h2>    
                            <p className='font-Barlow text-xl mb-12 w-[390px] text-center mx-auto text-DGB Mobile:my-4 Mobile:text-sm Mobile:w-64'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>  
                            <button className="font-Barlow text-2xl mb-12 w-44 text-center mx-auto text-VDDB border-b-2 border-transparent relative inline-block Mobile:my-4 Mobile:text-sm Mobile:w-28">
                                <span className="relative z-10 font-Fraunces text-VDDB">LEARN MORE</span>
                                <span className="absolute inset-0 top-[80%] left-[-50%] rounded-full bg-Yellow transform -translate-y-1/2 translate-x-1/2 w-full"></span>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <img src={StandOutMobile} alt={'Stand-Out-Mobile'} className='w-full h-full'/>
                        </div>
                        <div className='w-auto flex flex-col justify-center h-auto mx-auto my-10'>
                            <h2 className='font-Fraunces text-3xl my-12 w-64 text-center mx-auto text-VDDB Mobile:my-4 Mobile:text-2xl Mobile:w-56'>Stand out to the right audience</h2>
                            <p className='font-Barlow text-xl mb-12 w-[350px] text-center mx-auto text-DGB Mobile:my-4 Mobile:text-sm Mobile:w-64'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                            <button className="font-Barlow text-2xl mb-12 w-44 text-center mx-auto text-VDDB border-b-2 border-transparent relative inline-block Mobile:my-4 Mobile:text-sm Mobile:w-28">
                                <span className="relative z-10 font-Fraunces text-VDDB">LEARN MORE</span>
                                <span className="absolute inset-0 top-[80%] left-[-50%] rounded-full bg-SR transform -translate-y-1/2 translate-x-1/2 w-full"></span>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='relative'>
                            <div>
                                <img src={GraphicDesignMobile} alt={'GraphicDesign-Mobile'} className='h-full w-full'/>
                            </div>
                            <div className='absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center'>
                                <h2 className='font-Fraunces text-5xl mx-auto mb-20 text-DDC Mobile:text-2xl Mobile:mb-14'>Graphic design</h2>
                                <p className='font-Barlow text-lg w-[400px] mx-auto text-DDC Mobile:text-xs Mobile:w-64'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <img src={PhotographyMobile} alt={'Photography-Mobile'} className='h-full w-full'/>
                            </div>
                            <div className='absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center'>
                                <h2 className='font-Fraunces text-5xl mx-auto mb-20 text-DB Mobile:text-3xl Mobile:mb-14'>Photography</h2>
                                <p className='font-Barlow text-lg w-[400px] mx-auto text-DB Mobile:text-xs Mobile:w-64'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col text-center my-24 Mobile:my-12'>
                        <div className='flex justify-center'>
                            <h5 className='text-center font-Fraunces text-3xl w-full mx-auto text-DGB Mobile:text-xl'>CLIENT TESTIMONIALS</h5>
                        </div>
                        <div className='flex flex-col justify-center items-center h-full w-full mt-10 Mobile:mt-5'>
                            <div className='flex flex-col mb-24 Mobile:mb-12'>
                                <img src={AvatarOne} alt={'Avatar-One'} className='rounded rounded-full h-32 w-32 mx-auto my-10 Mobile:h-24 Mobile:w-24 Mobile:my-5' />
                                <p className='text-lg font-Barlow w-[350px] mb-10 mx-auto text-VDGB Mobile:w-64 Mobile:text-sm Mobile:mb-5'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                                <div className='flex flex-col'>
                                    <h6 className='text-4xl font-Fraunces text-VDDB Mobile:text-lg'>Emily R.</h6>
                                    <p className='text-2xl font-Barlow text-GB Mobile:text-sm'>Marketing Director</p>
                                </div>
                            </div>
                            <div className='flex flex-col mb-24 Mobile:mb-12'>
                                <img src={AvatarTwo} alt={'Avatar-Two'} className='rounded rounded-full h-32 w-32 mx-auto my-10 Mobile:h-24 Mobile:w-24 Mobile:my-5' />
                                <p className='text-lg font-Barlow w-[350px] mb-9 mx-auto text-VDGB Mobile:w-64 Mobile:text-sm Mobile:mb-5'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                                <div className='flex flex-col'>
                                    <h6 className='text-4xl font-Fraunces text-VDDB Mobile:text-lg'>Thomas S.</h6>
                                    <p className='text-2xl font-Barlow text-GB Mobile:text-sm'>Chief Operating Officer</p>
                                </div>
                            </div>
                            <div className='flex flex-col mb-24 Mobile:mb-12'>
                                <img src={AvatarThree} alt={'Avatar-Three'} className='rounded rounded-full h-32 w-32 mx-auto my-10 Mobile:h-24 Mobile:w-24 Mobile:my-5' />
                                <p className='text-lg font-Barlow w-[350px] mb-9 mx-auto text-VDGB Mobile:w-64 Mobile:text-sm Mobile:mb-5'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                                <div className='flex flex-col'>
                                    <h6 className='text-4xl font-Fraunces text-VDDB Mobile:text-lg'>Jennie F.</h6>
                                    <p className='text-2xl font-Barlow text-GB Mobile:text-sm'>Business Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <img src={MilkBottlesMobile} alt={'MilkBottles-Mobile'} className='h-auto w-1/2' />
                            <img src={OrangeMobile} alt={'Orange-Mobile'} className='h-auto w-1/2' />
                        </div>
                        <div className='flex'>
                            <img src={ConeMobile} alt={'Cone-Mobile'} className='h-auto w-1/2' />
                            <img src={SugarCubesMobile} alt={'SugarCubes-Mobile'} className='h-auto w-1/2' />
                        </div>
                    </div>
                </main>
                <footer>
                    <div className='bg-DMC flex flex-col justify-center items-center'>
                        <div className='text-center mt-20'>
                                <h6 className='font-Poppins text-4xl text-DDC Mobile:text-2xl'>sunnyside</h6>
                            </div>
                            <div className='flex justify-center mt-10 mb-20'>
                                <ul>
                                    <li>
                                        <Link className='font-Barlow mr-20 text-2xl text-DDC Mobile:mr-8 Mobile:text-lg' to='/About'>About</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link className='font-Barlow text-2xl text-DDC Mobile:text-lg' to='/Services'>Services</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link className='font-Barlow ml-20 text-2xl text-DDC Mobile:ml-8 Mobile:text-lg' to='/Projects'>Projects</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex justify-center mb-32'>
                                <FontAwesomeIcon icon={faFacebookSquare} className='mx-5 text-DDC h-10 w-10 Mobile:mx-3 Mobile:h-5 Mobile:w-5' />
                                <FontAwesomeIcon icon={faInstagram} className='mx-5 text-DDC h-10 w-10 Mobile:mx-3 Mobile:h-5 Mobile:w-5' />
                                <FontAwesomeIcon icon={faTwitter} className='mx-5 text-DDC h-10 w-10 Mobile:mx-3 Mobile:h-5 Mobile:w-5' />
                                <FontAwesomeIcon icon={faPinterest} className='mx-5 text-DDC h-10 w-10 Mobile:mx-3 Mobile:h-5 Mobile:w-5' />
                            </div>
                        </div>
                </footer>
            </div>

        </div>
    </>
    )
}

export default Contact;