import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import './App.css';
import RecommendedVideos from './RecommendedVideos';

function App() {
	return (
		<div className="App">
			<Router>
        <Header />

				<Switch>
					<Route path="/search/:searchTerm">
            <div className="App-page">
              <Sidebar />
              <SearchPage />
						</div>
					</Route>
					
          <Route exact path="/">		
						<div className="App-page">
							<Sidebar />
							<RecommendedVideos />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
