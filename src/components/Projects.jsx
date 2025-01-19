import { useEffect, useState } from 'react';
import { myProjects } from '../constants'
import { ComputersCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const projectsCount = myProjects.length;
    const currentProject = myProjects[selectedProjectIndex];
    const isMobile = window.matchMedia("(max-width: 500px)").matches;

    const handleNavigation = (direction) => {
        if (direction === "previous") {
            setSelectedProjectIndex((prevIndex) => {
                return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1
            })
        } else {
            setSelectedProjectIndex((prevIndex) => {
                return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1
            })
        }
    }

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>I have learn a lot doing following</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <section className="c-space my-5">
                <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                    <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 order-2 lg:order-1">
                        <div className='absolute top-0 right-0'>
                            <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                        </div>

                        <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                            <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                        </div>
                        <div className="flex flex-col gap-5 text-white-600 my-5">
                            <p className='text-white font-semibold text-2xl animatedText truncate'>{currentProject.title}</p>

                            {
                                !isMobile && (
                                    <>
                                        <p className="animatedText">
                                            {currentProject.desc}
                                        </p>
                                        <p className="animatedText">
                                            {currentProject?.subdesc}
                                        </p>
                                    </>
                                )
                            }
                        </div>

                        <div className="flex items-center jsutify-between flex-wrap gap-5">
                            <div className="flex items-center gap-3">
                                {currentProject.tags.map((tag, index) => {
                                    return (
                                        <div className="tech-logo" key={index}>
                                            <img src={tag.path} alt={tag.name} />
                                        </div>
                                    )
                                })}
                            </div>

                            <a href={currentProject.href} target='_blank' rel='noreferrer' className='flex items-center cursor-pointer text-white-600 gap-2'>
                                <p>Check Live Site</p>
                                <img src="/projects/arrow-up.png" alt="visit" className='w-3 h-3' />
                            </a>
                        </div>

                        <div className="flex justify-between items-center mt-7">
                            <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("previous")}>
                                <img src="/projects/left-arrow.png" alt="left-arrow" className='w-4 h-4' />
                            </button>
                            <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("next")}>
                                <img src="/projects/right-arrow.png" alt="right-arrow" className='w-4 h-4' />
                            </button>
                        </div>
                    </div>


                    <div className="bg-primary rounded-lg h-96 md:h-full order-1 lg:order-2 flex">
                       <div className='w-full h-full pointer-events-none' />
                        <ComputersCanvas project={myProjects[selectedProjectIndex]} />
                    </div>
                </div >
            </section >
        </>
    )
}

export default SectionWrapper(Projects, 'projects')