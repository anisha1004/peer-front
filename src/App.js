import "./App.css";
import Sidebar from "./compnents/Sidebar";
import Home from "./pages/Home";

function App() {
	return (
		<div className='app'>
			<div className='app-left'>
				<Sidebar />
			</div>
			<div className='app-right'>
				<Home />
			</div>
		</div>
	);
}

export default App;
