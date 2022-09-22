

import './App.css';
import Card from './components/Card';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Main />
      <Card
        img="../images/img1.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136} />
    </div>
  )
}

export default App
