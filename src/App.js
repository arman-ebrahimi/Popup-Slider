import Slider from "./slider";
import {useState} from 'react';

function App() {

    const [display, setDisplay] = useState(false);

    const showSlider = () => {
        setDisplay(true);
    }

  return (
    <div className="App">
        <button className="onBtn" onClick={showSlider}>Start</button>
      <Slider display={display} />
    </div>
  );
}

export default App;
