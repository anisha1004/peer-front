import "./App.css";
import Sidebar from "./compnents/Sidebar";

function App() {
	return (
		<div className='app'>
			<div className='app-left'>
				<Sidebar />
			</div>
			<div className='app-right'></div>
		</div>
	);
}

export default App;
