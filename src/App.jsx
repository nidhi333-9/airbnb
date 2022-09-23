import './App.css';
import Card from './components/Card';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Data from './data'

function App() {
  const dataElement = Data.map(item => {
    return <Card img={item.coverImg} rating={item.stats.rating} reviewCount={item.stats.reviewCount} country={item.location} title={item.title} price={item.price} />
  })

  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="container md:flex">
        {dataElement}
      </div>

      {/* <div className="container md:flex">
        <Card
          img="../../public/images/img1.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136} />
        <Card
          img="../../public/images/img1.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136} />
        <Card
          img="../../public/images/img1.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136} />
      </div> */}
    </div>
  )
}

export default App
