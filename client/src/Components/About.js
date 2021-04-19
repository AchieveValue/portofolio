import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion, useAnimation } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import { useWindowDimensions } from '../Functions'

import NavBar from './Navbar';

import parent from './Animations';

const About = () => {
    const { width } = useWindowDimensions();
    const [ourTeamContent] = useState([
        {
            animate: useAnimation(),
            id: 0,
            nume: 'Bunea Andrei',
            pozitie: 'Founder & Full Stack Developer',
            descriere: `Hi, my name is Andrei. I really like programming and entrepreneurship. I started AchieveValue because I believe in young peoples, I think we can deliver original applications, fast and modern. I always like to learn new things, but also help. At this moment, I am a Full Stack Web Developer but also the leader of the team.`
        },
        {
            animate: useAnimation(),
            id: 1,
            nume: 'Jomaa Abbas',
            pozitie: 'Co-Founder & Full Stack Developer',
            descriere: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.`
        },
        {
            animate: useAnimation(),
            id: 2,
            nume: 'Kevin Porter',
            pozitie: 'Back-end Developer',
            descriere: `Hello! I’m Kevin. I’m currently 18 years old, and I primarily write code for AV (AchieveValue’s) back-end. I joined the team so I could gain experience in a variety of fields, such as the back-end, front-end, UI design, and gain proficiency in working with other like-minded people. I’m never afraid to start a new project, or to learn a new skill, and I’ll always put my best foot forward so I can be the best at any task I do.`
        },
        {
            animate: useAnimation(),
            id: 3,
            nume: 'Bîra Paola',
            pozitie: 'Project Manager & Social Media Expert',
            descriere: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.`
        },
        {
            animate: useAnimation(),
            id: 4,
            nume: 'Denisa',
            pozitie: 'Graphic & UI Designer',
            descriere: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.`
        },
    ]);
    const [selectedTeamate, setSelectedTeamate] = useState(ourTeamContent[0]);

    useEffect(() => {
        [...ourTeamContent].map(el => {
            if(el.id === selectedTeamate.id) {
                el.animate.start({
                    boxShadow: '0 0 0px 10px #E57016'
                })
            } else {
                el.animate.start({
                    boxShadow: '0 0 0px 0px #E57016',
                })
            }

            return true;
        })
    }, [selectedTeamate, ourTeamContent])

    const children = {
        hidden: {
            opacity: 0, 
            x: (width < 900 ? 0 : -600) 
        },
        show: {
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.8, 
                ease: "easeOut"  
            }
        }
    }

    const children2 = {
        hidden: {
            opacity: 0, 
            x: (width < 900 ? 0 : 600) 
        },
        show: {
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.8, 
                ease: "easeOut"  
            }
        }
    }

    return (
        <>
        <NavBar dark={true}/>
        <motion.div variants={parent} initial="hidden" animate="show" exit="exit">

            <motion.div className="container-fluid p-0 m-0 d-flex align-items-center d-flex flex-column-reverse justify-content-start px-5 px-lg-0" style={{ width: '100%', height: '70vh', backgroundImage: `url('https://wallpaperbat.com/img/446956-developer-wallpaper-picture.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container" style={{ marginBottom: '6%'}}>
                    <h1 style={{ color: '#E57016'}} className="poppins font-weight-bold">This is <span className="text-light">Achieve</span>Value</h1>
                    <h5 className="poppins text-light font-weight-light w-75">We are a startup company that aims to develop and deliver modern, rapid and engaging web-based applications.</h5>
                </div>
            </motion.div>

            <LazyLoad height={200}>
                <motion.div className="container" variants={children2} style={{ background: '#FFFFFF' }}>
                    <div className="container d-flex align-items-center justify-content-between w-100" style={{ padding: '9%' }}>
                        <div className="d-flex align-items-center align-items-lg-start justify-content-lg-between align-items-center justify-content-center flex-column flex-lg-row">
                            <div className="pr-lg-5 mr-lg-5 mb-5 mb-lg-0">
                                <h2 className="poppins font-weight-bold mb-1" style={{ color: '#222335' }}>How we are</h2>
                                <h2 className="poppins font-weight-bold mb-1" style={{ color: '#E57016' }}>different?</h2>
                            </div>
                            <h5 className="poppins text-dark font-weight-light">Our goal is to learn and apply innovative designs and techniques to create enterprise-quality websites. We achieve to model beautiful websites, fully customized for your needs. Our values are to work proficiently and swiftly to get the most out of your value.</h5>
                        </div>
                    </div>
                </motion.div>
            </LazyLoad>

            <LazyLoad height={200}>
                <div className="container-fluid p-0" style={{ background: '#222335' }}>
                    <motion.div className="container-fluid w-100 d-flex justify-content-center align-items-center flex-column pb-lg-4 pt-lg-5" style={{ backgroundColor: '#222335', paddingTop: '8%', paddingBottom: '25%' }} variants={children}>
                        <div className="w-100 mb-5 text-center">
                            <h2 className="poppins font-weight-bold mb-1 text-light">Meet</h2>
                            <h2 className="poppins font-weight-bold mb-1" style={{ color: '#E57016' }}>Our team</h2>
                        </div>
                        <div className="container w-100 row align-items-center justify-content-center d-none d-md-flex" style={{ height: '18vh' }}>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[0])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[0].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 0 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} initial={{ boxShadow: '0 0 0px 10px #E57016' }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[1])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[1].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQHQAp2ZHQ0k8Q/profile-displayphoto-shrink_200_200/0/1618498524576?e=1623888000&v=beta&t=C7swUFbL_b8UFSR_khVTXobGJCao9NVHZ0jcQ8cXeno')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 1 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[2])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[2].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4D03AQG1I3VEhuMmYg/profile-displayphoto-shrink_200_200/0/1618646160415?e=1624492800&v=beta&t=20c7sTMCOFuuu0kriem9d4L7KCaQJfZTUi80dPa9pFE')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 2 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[3])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[3].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 3 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[4])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[4].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 4 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                        </div>

                        <div className="container w-100 row d-flex align-items-center justify-content-center d-md-none" style={{ height: '18vh' }}>
                            <div className="col-4" onClick={() => {setSelectedTeamate(ourTeamContent[0])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[0].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 0 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} initial={{ boxShadow: '0 0 0px 10px #E57016' }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4" onClick={() => {setSelectedTeamate(ourTeamContent[1])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[1].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQHQAp2ZHQ0k8Q/profile-displayphoto-shrink_200_200/0/1618498524576?e=1623888000&v=beta&t=C7swUFbL_b8UFSR_khVTXobGJCao9NVHZ0jcQ8cXeno')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 1 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4" onClick={() => {setSelectedTeamate(ourTeamContent[2])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[2].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4D03AQG1I3VEhuMmYg/profile-displayphoto-shrink_200_200/0/1618646160415?e=1624492800&v=beta&t=20c7sTMCOFuuu0kriem9d4L7KCaQJfZTUi80dPa9pFE')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 2 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4 pt-4" onClick={() => {setSelectedTeamate(ourTeamContent[3])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[3].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 3 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4 pt-4" onClick={() => {setSelectedTeamate(ourTeamContent[4])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[4].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 4 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </LazyLoad>

            <LazyLoad height={200}>
                <div className="container-fluid py-2 d-flex justify-content-center pb-lg-5" style={{ background: '#222335'}}>
                    <motion.div className="container row d-flex justify-content-center justify-content-lg-end px-5 pb-5 pb-lg-0" variants={children2}>
                        <motion.div transition={{ duration: 0.4 }} className="col-12 col-lg-9 bg-light pt-5 pb-4 bg-light mr-0 mr-lg-4" style={{ borderRadius: '30px', paddingLeft: '8%', paddingRight: '8%'}}>
                            <h3 className="rightenous mb-1" style={{ color: '#E57016' }}>{selectedTeamate.nume}</h3>
                            <h6 className="poppins font-weight-regular mb-4">{selectedTeamate.pozitie}</h6>
                            <p>{selectedTeamate.descriere}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </LazyLoad>
        </motion.div>
        </>
    )
}

export default About;