import React from "react"

import ThreeCanvas from "../components/three-canvas"

const Page = () => {
  return (
    <main className="relative">
      <div className="min-h-full h-[500px]">
        <div className="relative z-10 flex items-center justify-center w-full h-full p-4 mx-auto text-center max-w-section">
          <div className="grid gap-12">
            <div className="grid gap-4">
              <h1 className="text-4xl font-black sm:text-5xl text-brand-gradient">
                Performance Optimization for three.js Web Animations
              </h1>
              <h2 className="text-lg text-white">
                A three.js hero animation lazy-loaded using React.lazy /
                Suspense
              </h2>
            </div>
            <div>
              <a
                href="https://www.gatsbyjs.com/blog/performance-optimization-for-three-js-web-animations"
                rel="noopener"
                className="inline-flex font-bold transition-all duration-500 border-4 border-transparent border-double rounded-full border-rainbow-gradient bg-origin-border hover:scale-105 hover:text-gray-200"
              >
                <span className="block mx-6 my-2 text-lg text-white select-none sm:text-2xl">
                  Read more on the Gatsby Blog
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-brand-background">
          <ThreeCanvas />
        </div>
      </div>
    </main>
  )
}

export default Page
