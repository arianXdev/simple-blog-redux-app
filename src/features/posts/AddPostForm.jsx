import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"; // nanoid will help us generate a random id

import { postAdded } from "./postsSlice";

import "./AddPostForm.css";

const AddPostForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(
				postAdded({
					id: nanoid(), // generates some random id easily
					title,
					content,
				})
			);

			setTitle("");
			setContent("");
		}
	};

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

				<button onClick={onSavePostClicked} type="button" className="AddPost__btn">
					Save Post
				</button>
			</form>
		</section>
	);
};

export default AddPostForm;
