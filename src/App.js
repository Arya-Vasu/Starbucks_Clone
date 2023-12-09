import "./App.css";
import { GlobalHeader } from "./components/globalHeader/GlobalHeader";

// 1. LogIn -
// 2. Home Page -
// 3. Sign Up -

export default function App() {

  return (
    <div className="App">
      <GlobalHeader />
      
      <br />
      <div className="joybell">
        <h5>Joyous Bells: Celebrating Christmas Cheer.</h5>
        <button className="knowmorebutton">Know More</button>
      </div>
    </div>
  );
}

