import React, {useContext, useEffect, useRef, useState} from 'react';
import Store from './Store';
import { Context } from './Store';
import '../css/App.css';
import AboutPage from './pages/About';
import ResumePage from './pages/Resume';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';

function NavBar() {

  const [state, setState] = useContext(Context);
  const [cooledDown, setCooledDown] = useState(true);
  const handleClick = (val) => {
    if(cooledDown){
      setState({ page: val });
      setCooledDown(false);
      setTimeout(()=>{setCooledDown(true)}, 800);
    }
  };
  return (
    <>
      <button class={"Home" + (state.page == 0 ? " Hide" : " Show")} 
        onClick={() => handleClick(0)}>🏠</button>
      <button class="nav" onClick={() => handleClick(1)}>about</button>
      <button class="nav" onClick={() => handleClick(2)}>portfolio</button>
      <button class="nav" onClick={() => handleClick(3)}>resume</button>
      <button class="nav" onClick={() => handleClick(4)}>contact me</button>
    </>);
}

const Page = (props) =>{
  const [state, setState] = useContext(Context);
  const [show, setShow] = useState("");
  useEffect(()=>{
    setShow(props.index == state.page);
  }, [state]);
  return(<>
      <div className={'Page '+show}>{props.children}</div>
  </>);
}

const ScrollingPages = ({children}) =>{
  const container = useRef(null);
  const [scroll, setScroll] = useState({x: 0});
  var scrollableElement = document.body; 
  scrollableElement.addEventListener('wheel', (event)  => {
    //scroll with range check
    let targetScroll = scroll.x + event.wheelDelta;
    let containerWidth = (container.current ? container.current.offsetWidth : 0);
    if(targetScroll > 0){ 
      setScroll({x: 0}); 
    }else if((window.innerWidth - containerWidth - targetScroll) > 0){
      setScroll({x: -containerWidth + window.innerWidth})
    }else{
      setScroll({x: targetScroll});
    }
    
  });
  return(<>
    <div className="ScrollingPages" ref={container} style={{left: scroll.x}}>
      {children}
    </div>
  </>);
}

const OnePage = ({ children }) => {
  return(
    <div className="OnePage">{children}</div>
  );
} 

const WebContent = () => {
  const [state, setState] = useContext(Context);
  const [exiting, setExiting] = useState({page: 0});
  useEffect(()=>{
    setTimeout(()=>{setExiting(state)}, 800);
  }, [state]);
  return (
    <div>
      <div className="NameHolder">
        <p className={state.page == 0 ?  "FullName Show" : "FullName Hide"}>Adrian Nieściur</p>
      </div>
      <div className={state.page > 0 ? "TopObstruction" : "TopObstruction Down"}></div>
      <div className={state.page > 0 ? "NavBar" : "NavBar Down"}> 
      <NavBar></NavBar>  
      </div>
      {(state.page == 1 || exiting.page == 1) && <Page index="1"><OnePage><AboutPage></AboutPage></OnePage></Page> }
      {(state.page == 2 || exiting.page == 2) && <Page index="2"><ScrollingPages><PortfolioPage></PortfolioPage></ScrollingPages></Page> }
      {(state.page == 3 || exiting.page == 3) && <Page index="3"><OnePage><ResumePage></ResumePage></OnePage></Page> }
      {(state.page == 4 || exiting.page == 4) && <Page index="4"><OnePage><ContactPage></ContactPage></OnePage></Page> }
    </div>
  );  

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Store>
        <WebContent></WebContent>
        </Store>
      </header>
    </div>
  );
}

export default App;