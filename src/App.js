import Header from "./structure/Header";
import Footer from "./structure/Footer";
import Home from "./routes/home/Home";
import {SkillsProvider} from "./contexts/skills.context";

function App() {


  return (
    <div>
< SkillsProvider>
      <Header />
      <Home />
      <Footer />
      </SkillsProvider>
    </div>
  );
}

export default App;
