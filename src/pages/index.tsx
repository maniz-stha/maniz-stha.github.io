import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <h1>
        Welcome
      </h1>
      <p>To the personal site of Manish Shrestha</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Manish Shrestha: Personal page</title>
