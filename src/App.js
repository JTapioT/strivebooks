import AppNavigation from "./components/AppNavigation";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import MyFooter from "./components/MyFooter";


function App() {
  return (
    <> 
    <AppNavigation/>
    <Welcome/>
    <LatestRelease category="fantasy"/>
    <MyFooter/>
    </>
  );
}

export default App;
