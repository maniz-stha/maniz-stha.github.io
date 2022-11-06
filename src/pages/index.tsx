import * as React from "react"
import type { HeadFC } from "gatsby"

const pageStyles = {
  display: 'flex',
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

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div style={infoStyles}>
        <h1>
          Manish Shrestha
        </h1>
        <p>Programmer, Software Engineer, Full Stack Developer</p>
      </div>
      <div style={comingSoonStyles}>
        <h2>Coming SOON</h2>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Manish Shrestha: Personal page</title>
