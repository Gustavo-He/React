import './App.css';
import Banner from "./components/Banner";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Header></Header>
        <Banner></Banner>
        <Main></Main>
            <Card img="/Berserk.jpg" nome={"Berserk"} desc={""}></Card>
            <Card img="/Vagabond.jpg" nome={"Vagabond"} desc={""}></Card>
            <Card img="/Hunter.jpg" nome={"HunterxHunter"} desc={""}></Card>
            <Card img="/Blue.jpg" nome={"Blue Lock"} desc={""}></Card>
            <Card img="/Dragon.jpg" nome={"Dragon Ball Z"} desc={""}></Card>
        <Footer></Footer>
    </div>
  )
}

export default App;