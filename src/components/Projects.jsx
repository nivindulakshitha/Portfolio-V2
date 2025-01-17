import { useState } from 'react';
import { myProjects } from '../constants'
import { ComputersCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const projectsCount = myProjects.length;
    const currentProject = myProjects[selectedProjectIndex];

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
        <section className="c-space my-20">
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className='absolute top-0 right-0'>
                        <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </div>

                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className='text-white font-semibold text-2xl animatedText'>{currentProject.title}</p>
                        <p className="animatedText">
                            {currentProject.desc}
                        </p>
                        <p className="animatedText">
                            {currentProject.subdesc}
                        </p>
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
                            <img src="/assets/arrow-up.png" alt="visit" className='w-3 h-3' />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("previous")}>
                            <img src="/assets/left-arrow.png" alt="left-arrow" className='w-4 h-4' />
                        </button>
                        <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("next")}>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className='w-4 h-4' />
                        </button>
                    </div>
                </div>


                <div className=" bg-primary rounded-lg h-96 md:h-full">
                    <ComputersCanvas />
                </div>
            </div >
        </section >
    )
}

export default SectionWrapper(Projects, 'projects')