import * as React from "react"
import type { HeadFC } from "gatsby"
import downloadFile from '../files/manish_resume.pdf'

const pageStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  height: '100vh',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const infoStyles = {
  fontSize: '20px'
}

const comingSoonStyles = {
  fontSize: '50px'
}

const lazyStyles = {
  fontSize: '20px'
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div style={infoStyles}>
        <h1>
          Manish Shrestha
        </h1>
        <p>Programmer, Software Engineer, Full Stack Developer</p>
      </div>
      <div>
        <div style={comingSoonStyles}>
          <h2>Coming SOON</h2>
        </div>
        <div style={lazyStyles}>
          <i>Read: Too lazy and lacking creative ideas on how to start on an actual portfolio site.</i>
          <p>Meanwhile go ahead and download my cv that contains some info about me <a href={downloadFile}>here</a></p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Manish Shrestha: Personal page</title>
