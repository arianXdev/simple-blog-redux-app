import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

const App = () => {
	return (
		<main className="App">
			<AddPostForm />
			<div className="divider"></div>
			<PostsList />
		</main>
	);
};

export default App;
