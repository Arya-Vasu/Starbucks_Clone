import "./App.css";
import { SecondHeader } from "./components/secondHeader/SecondHeader";
import { GlobalHeader } from "./components/globalHeader/GlobalHeader";

export default function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <br />
      <SecondHeader />
    </div>
  );
}


