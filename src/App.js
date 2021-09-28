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
    <LatestRelease category="horror"/>
    <LatestRelease category="scifi"/>
    <MyFooter/>
    </>
  );
}

export default App;
