import React from 'react';
import About from ('./pages/About')
import Work from ('./pages/Work')
import Skills from ('.pages/Skills')
import Contact from ('.pages/Contact')
import ScrollBar from ('.components/ScrollBar')

const Home = () => {
  const [{ theme }] = useContext(themes)
  return (
    <div>
      <main>
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>

      <ScrollBar />
    </div>
  )
}

export default Home;
