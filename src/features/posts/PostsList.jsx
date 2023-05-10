import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

import "./PostsList.css";

const PostsList = () => {
	// Get the entire posts
	// we're passing in a selector function called "selectAllPosts" which gives us the entire posts from the state.
	const posts = useSelector(selectAllPosts);

	const renderedPosts = posts.map((post) => (
		<article key={post.id} className="Posts__item">
			<h3 className="Posts__item-title">{post.title}</h3>
			<p className="Posts__item-body">{post.content.substring(0, 100)}...</p>
			<p className="postCredit">
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
		</article>
	));

	return (
		<section className="Posts">
			<h2 className="Posts__title">Posts</h2>
			<div className="Posts__list">
				{posts.length != 0 ? renderedPosts : <p className="warning">There is nothing in here! You may want to consider adding a few posts.</p>}
			</div>
		</section>
	);
};

export default PostsList;
