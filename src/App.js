import {
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import Sidenav from './Components/Sidenav';
import Home from "./Pages/Home";
import Home_1 from "./Pages/Home_1";
import History from "./Pages/History";
import Page from "./Pages/PageWrapper";
import historyStyles from "./Components/Topnav.hist.module.css"
import homeStyles from "./Components/Topnav.home.module.css"



function App() {
    return (
        <div className="App">
            <div><Sidenav/></div>
            <div className="main-content">
                <main>
                    <Routes>
                        <Route path="/" element={
                            <Page keyNavData={"home"} pageComponent={<Home/>} topNavStyle={homeStyles}/>
                        }/>
                        <Route path="/1" element={
                            <Page keyNavData={"home"} pageComponent={<Home_1/>} topNavStyle={homeStyles}/>
                        }/>
                        <Route path="/history/1834" element={
                            <Page keyNavData={"history"} pageComponent={<History/>} topNavStyle={historyStyles}/>
                        }/>
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