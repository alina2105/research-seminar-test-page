import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import Sidenav from './Components/Sidenav';
// import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Topnav from "./Components/Topnav";
import Page from "./Pages/PageWrapper";
// import Settings from "./Pages/Settings";
// import Statistics from "./Pages/Statistics";



function App() {
    return (
        <div className="App">
            <div><Sidenav/></div>
            <div>
                <main>
                    <Routes>
                        <Route path="/" element={<Page keyNavData={"home"} pageComponent={<Home/>}/>}/>
                        <Route path="/1" element={<Page keyNavData={"home"} pageComponent={<Home/>}/>}/>
                        <Route path="/history" element={<Page keyNavData={"history"} pageComponent={<History/>}/>}/>
                        {/*<Route path="/explore" element={<Explore />} />*/}
                        {/*<Route path="/statistics" element={<Statistics />}/>*/}
                        {/*<Route path="/settings" element={<Settings />} />*/}
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;

// TODO c