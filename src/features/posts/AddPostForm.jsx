import { useState } from "react";
import "./AddPostForm.css";

const AddPostForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);

	return (
		<section className="AddPost">
			<h2 className="AddPost__title">Add a New Post</h2>

			<form className="AddPost__form">
				<div className="AddPost__group">
					<label htmlFor="postTitle">Post Title:</label>
					<input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
				</div>

				<div className="AddPost__group">
					<label htmlFor="postContent">Content:</label>
					<textarea type="text" id="postContent" name="postContent" value={content} onChange={onContentChanged}></textarea>
				</div>

				<button type="button" className="AddPost__btn">
					Save Post
				</button>
			</form>
		</section>
	);
};

export default AddPostForm;
