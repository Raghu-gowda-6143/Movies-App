
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SimpleBottomNavigation from "./components/navBar/NavBar";
import Movies from "./components/pages/movies/Movies";
import Series from "./components/pages/series/Series";
import Trending from "./components/pages/trending/Trending";
import Search from "./components/pages/search/Search";
import { Container } from "@material-ui/core";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Container>
                    <Switch>
                        <Route path="/" component={Trending} exact />
                        <Route path="/movies" component={Movies} />
                        <Route path="/series" component={Series} />
                        <Route path="/search" component={Search} />
                    </Switch>
                </Container>
            </div>
            <SimpleBottomNavigation />
        </BrowserRouter>
    );
}

export default App;