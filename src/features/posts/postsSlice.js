// a slice is where we divide up our state (Redux Store)
import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid will help us generate a random id
import { sub } from "date-fns";

const initialState = [
	{
		id: "1",
		title: "Blog post 1",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, laudantium vero aut nostrum quidem eos nemo ut alias mollitia minus, quod minima reiciendis dignissimos ducimus obcaecati facere. Ducimus, minima et.",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
	{
		id: "2",
		title: "Blog post 2",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, laudantium vero aut nostrum quidem eos nemo ut alias mollitia minus, quod minima reiciendis dignissimos ducimus obcaecati facere. Ducimus, minima et.",
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer: (state, action) => {
				// So, It's not mutating the state anymore, cause it uses ImmerJS underneath! (Only works in createSlice and ...)
				state.push(action.payload); // uses ImmerJS behind the scenes (under the hood), so we don't have to worry about mutating the state directly!
			},

			prepare: (title, content, userId) => {
				return {
					payload: {
						id: nanoid(), // generates some random id easily
						title,
						content,
						date: new Date().toISOString(),
						userId,
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					},
				};
			},
		},
	},
});

export const selectAllPosts = (state) => state.posts; // a selector function which gives us the posts part of the state.

// That is going to generate an action creator with the same name automatiaclly
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
