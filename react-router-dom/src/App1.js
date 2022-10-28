import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Post from "./components/Post";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<h1>Home Page</h1>} />
				<Route path="/home" element={<h1>Home Page</h1>} />
				<Route path="/about" element={<h1>About Page</h1>} />
				<Route path="/contact" element={<h1>Contact Page</h1>} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:postId" element={<Post />} />
				<Route path="*" element={<h1> 404 : Page Not found</h1>} />
			</Routes>
		</>
	);
}

export default App;
