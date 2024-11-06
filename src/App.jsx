import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer"/>
      <Programs/>
      </div>
    </>
  )
}

export default App