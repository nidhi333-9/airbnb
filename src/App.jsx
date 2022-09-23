import './App.css';
import Card from './components/Card';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Data from './data'

function App() {
  const dataElement = Data.map(item => {
    return <Card img={item.coverImg} rating={item.rating} reviewCount={item.reviewCount} country={item.country} title={item.title} price={item.price} />
  })

  return (
    <div className="App">
      <Navbar />
      <Main />
      {dataElement}
      {/* <Card
        img="images/img1.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136} /> */}

    </div>
  )
}

export default App
