import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40 bg-gradient-to-b from-white-900 to-white'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src='/profile-pic2.jpg' layout="fill" objectFit="cover" />
    </div>
    <h1 className='my-2 text-3xl md:text-5xl font-medium text-black-500'>COLLINS MUHIA MUNGAI</h1>
    
    <h3 className='text-xl md:text-xl text-teal-500'>SOFTWARE ENGINEER | DATA ANALYST | BUSINESS ANALYST</h3>
    <hr className="my-4 border-gray-400 w-1/4 mx-auto"></hr>
    <p className='text-md py-1 md:text-xl text-gray'>Welcome to my portfolio! I am a multi-disciplinary professional with expertise in software engineering, data analysis, and business analysis. With a passion for leveraging technology to solve complex problems, I strive to deliver innovative solutions that drive business success. Through my portfolio, I hope to showcase my skills, experience, and projects that demonstrate my ability to tackle a wide range of challenges and create value for my clients and stakeholders.</p>
    <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
      <a href='https://www.linkedin.com/in/collins-muhia/' target='_blank' rel='noopener noreferrer'><AiFillLinkedin /></a> 
      <a href='https://github.com/Collins-Muhia/' target='_blank' rel='noopener noreferrer'><AiFillGithub /></a>
      <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><AiFillInstagram /></a>
    </div>
    <hr className="my-4 border-gray-400 w-1/4 mx-auto"></hr>
</section>


    <section id='service' className=''>
      <h1 className='text-xl font-medium'>Skills & Experience</h1>
      <p className='mt-1 text-md'>I have experience in building an application and creating cloud architecture as an integration to provide business and consumer solutions. I offer a wide of service, including Frontend & Backend Development, Cloud & IT Solutions Architect, DevOps Architect</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='https://i.etsystatic.com/27690223/r/il/269f46/2924450775/il_fullxfull.2924450775_abtv.jpg' className='w-48' alt='gambar' />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h2 className='text-xl'>Software Development</h2>
          <p className='text-gray-500'>Design, develop, and maintain software applications</p>
          <p className='text-xl '></p>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>Tailwind CSS</li>
            <li>Angular</li>
            <li>PHP</li>
            <li>APIs</li>
            <li>Python</li>
          </ul>
        </div>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png' className='w-48 mt-4 mb-2' alt='gambar' />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <h2 className='text-xl'>Hardware & Networking</h2>
  <p className='text-gray-500'>Design & manage computer networks & infrastructure.</p>
  <p className='text-xl'></p>
  <ul>
    <li>Routers</li>
    <li>LAN/WAN</li>
    <li>Switches</li>
    <li>Firewalls</li>
    <li>Cybersecurity</li>
  </ul>
</div>



        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='https://pbs.twimg.com/media/DbBNKUVW0AAXAQG.jpg' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Enterprise & Solutions Architecture</h2>
          <p className='text-gray-500'>I can help you solve a problem, build a product or grow existing project.</p>
          <p className='text-xl '></p>
          <ul>
            <li>TOGAF 9</li>
            <li>Archimate 3.0</li>
            <li>Cloud Computing</li>
            <li>Emerging Technologies</li>
            <li>ADM Reference</li>
            <li>AI & Machine Learning</li>
            <li>Monitoring & Evaluation</li>
          </ul>
        </div>
        

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='https://i.pinimg.com/originals/f4/e9/f0/f4e9f08970b004ecef7c6d8535ce6736.png' className='w-48' alt='gambar' />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h2 className='text-xl'>Data Engineering</h2>
          <p className='text-gray-500'>Design Databases/ETL Pipelines and Analyze large datasets to extract valuable insights</p>
          <p className='text-xl'></p>
          <ul>
            <li>MYSQL</li>
            <li>Linux</li>
            <li>PowerBI</li>
            <li>R / Python</li>
            <li>Oracle / Postgres</li>
            <li>APACHE Nifi</li>
          </ul>
        </div>

      </div>

    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='text-xl font-medium'>Projects</h1>
      <p className='mt-1 text-md'>Here are some projects that I have managed.</p>
      {/* <div className='flex flex-col md:flex-row gap-8 mt-4'> */}
        {/* <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>
      </div> */}
    </section>


    <section id='license' className='mt-10'>
      <h1 className='text-xl font-medium'>License & Certifications</h1>
      <p className='mt-1 text-md'>Here are just but a few certifications that I have gannered over the time:</p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://seofiles.s3.amazonaws.com/seo/media/uploads/2018/10/22/bachelor-degree.jpg' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Degree in Information Technology</h1>
            <p className=''>Jomo Kenyatta University</p>
            <p className='text-sm text-gray-500'>April 2021</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://media.licdn.com/dms/image/C4E12AQEIrOM3Oe6_LQ/article-cover_image-shrink_600_2000/0/1520043183039?e=2147483647&v=beta&t=BtsfWu-xfUg0Gd-yGM_Zi8FtCw29Zck2cOC8grVyrq8' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>TOGAF 9 Level 1 & 2</h1>
            <p className=''>SkillUP by simplilearn</p>
            <p className='text-sm text-gray-500'>June 2022</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://www.marshall.usc.edu/sites/default/files/inline-images/GSCM_Lean_Six_Sigma_Yellow_1.png' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Six Sigma Yellow Belt</h1>
            <p className=''>6SIGMAstudy</p>
            <p className='text-sm text-gray-500'>March 2022</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://images.credly.com/images/cd769843-4907-4d1a-9702-0512eb87ae6e/cisco_ccnp_security.png' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Intro to Cybersecurity</h1>
            <p className=''>CISCO</p>
            <p className='text-sm text-gray-500'>June 2022</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://www.learningcert.com/wp-content/uploads/cobit-1114-450.png' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>ITIL & COBIT FOUNDATIONS</h1>
            <p className=''>LinkeIn Learning</p>
            <p className='text-sm text-gray-500'>July 2022</p>
          </div>
        </div>
        
      </div>

    </section>
    
    {/* <section id='honor' className='mt-10'>
    <h1 className='text-xl font-medium'>Honors & Rewards</h1>
    <p className='mt-1 text-md'>Here are some of the honor and rewards I have.</p>

    <div className='flex rounded shadow-md flex-col md:flex-row px-2 py-4'> */}
      {/* <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">Top 10 SELEKNAS Asean Skill Competition 2022</p>
        <p className='text-gray-500'>Issued by KEMENAKER RI</p>
        <ul className='list-disc pl-4'>
          <li>Linux Server</li>
          <li>Windows Server</li>
          <li>Linux Routing</li>
          <li>Cisco Troubleshooting</li>
          <li>Cisco Network Analysis</li>
          <li>Network and System Programmabillity</li>
          <li>Containerized Service</li>
        </ul>
      </div> */}
      {/* <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">3rd Place Winner of IT Network System Administration - LKS Jawa Tengah 2022</p>
        <p className='text-gray-500'>Issued by KEMENDIKBUD RI</p>
        <ul className='list-disc pl-4'>
          <li>Linux Server</li>
          <li>Windows Server</li>
          <li>Cisco Configuration</li>
          <li>Cisco Troubleshooting</li>
          <li>Network and System Programmabillity</li>
          <li>Containerized Service</li>
        </ul>
      </div>
      <div className='pl-4 mt-2 md:w-3/6'>
        <p className="font-bold">1st Place winner of IT Network System Administration - LKS Kab. Tegal 2022</p>
        <p className='text-gray-500'>Issued by KEMENDIKBUD RI</p>
        <ul className='list-disc px-4'>
          <li>Linux Server</li>
          <li>Cisco Configuration</li>
        </ul>
      </div> */}
    {/* </div>
    
    </section> */}

<section id="footer" className='mt-5 rounded bg-gray-800 py-8 px-8'>
  <div className='text-white md:text-center'>
    <h1 className='font-medium text-lg'>Contact Me</h1>
    <p>You can reach me through:</p>
    <hr className="my-4 border-gray-400 w-1/4 mx-auto"></hr>

    <ul className='md:flex justify-center gap-4'>
      <li className='flex items-center gap-2'>
        <AiFillMail />
        <p>1muhia.js@gmail.com</p>
      </li>
      <li className='flex items-center gap-2'>
        <AiFillEnvironment />
        <p> Nairobi, KENYA</p>
      </li>
      <li className='flex items-center gap-2'>
        <AiFillPhone/>
        <p>+254790711149</p>
      </li>
    </ul>

    <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
      <a href='https://www.linkedin.com/in/collins-muhia/' target='_blank' rel='noopener noreferrer'><AiFillLinkedin /></a> 
      <a href='https://github.com/Collins-Muhia/' target='_blank' rel='noopener noreferrer'><AiFillGithub /></a>
      <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><AiFillInstagram /></a>
    </div>

    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

    <p className="text-center text-sm text-gray-300 sm:text-center">
      © 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collins Muhia Mungai &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved.
    </p>

  </div>
</section>


    </main>
  );
}

export default App;
