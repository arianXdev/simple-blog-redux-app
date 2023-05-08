import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import "./PostsList.css";

const PostsList = () => {
	// Get the entire posts
	const posts = useSelector(selectAllPosts);

	const renderedPosts = posts.map((post) => (
		<article key={post.id} className="Posts__item">
			<h3 className="Posts__item-title">{post.title}</h3>
			<p className="Posts__item-body">{post.content.substring(0, 100)}</p>
		</article>
	));

	return (
		<section className="Posts">
			<h2 className="Posts__title">Posts</h2>

			<div className="Posts__list">{renderedPosts}</div>
		</section>
	);
};

export default PostsList;
