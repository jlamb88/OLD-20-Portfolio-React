import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'



const About = () => {

  return (
    <div className='about center'>
      <h1>Hi, I am Joseph Lamb and I am a full stack developer</h1>


      <div className='about-contact center'>
        <a href='resume link'>
          <span type='button' className='btn btn-outline'> Resume </span>
        </a>

        <a href="https://github.io/jlamb88" aria-label='github' className='link link-icon'>
          <GitHubIcon />
        </a>

        <a href="linkedIN" aria-label="linkedin" className='link link-icon'>
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}
export default About;
