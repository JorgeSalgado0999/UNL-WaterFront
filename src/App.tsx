import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {ChartExample} from "./ChartExample";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<h2>Chart Example</h2>
				<ChartExample />
			</div>
		</div>
	);
}

export default App;
