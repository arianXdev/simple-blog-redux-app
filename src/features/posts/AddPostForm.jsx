import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

import "./AddPostForm.css";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [userId, setUserId] = useState("");

	const users = useSelector(selectAllUsers);

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);
	const onAuthorChanged = (e) => setUserId(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded(title, content, userId));

			setTitle("");
			setContent("");
			setUserId("");
		}
	};

	const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

	const usersOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

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

				<div className="AddPost__group">
					<label htmlFor="postAuthor">Author:</label>
					<select id="postAuthor" value={userId} onChange={onAuthorChanged}>
						<option value=""> --- Select an Author --- </option>
						{usersOptions}
					</select>
				</div>

				<button onClick={onSavePostClicked} type="button" className="AddPost__btn" disabled={!canSave}>
					Save Post
				</button>
			</form>
		</section>
	);
};

export default AddPostForm;
