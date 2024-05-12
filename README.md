Link: https://week08-project.vercel.app/

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

Planning (including schema, wireframes, and page tree) - https://www.figma.com/file/oiU1HGDgyWqf6ofmBcg1h8/week08-project?type=whiteboard&node-id=0%3A1&t=OjRCjgvf64VGG57i-1
App Design - https://www.figma.com/file/BPbT4G6jR7JQXY5Wr75tql/week08-project?type=design&mode=design&t=OjRCjgvf64VGG57i-1

User Stories

- As a user, I want to browse a list of posts, sortable by ascending or descending order
- As a user, I want to be able to leave a comment sharing my thoughts on each post

Requirements

- Created using create-next-app
- Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.
- Create a form where users can add posts
- Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.
- Refresh the /posts route data when adding a new post, and redirect the user to the list of posts
- Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

Stretch Goals

- The user can edit their name, ingredients, and method in their posts using the edit button, taking them to /recipes/:id/edit

Future Additions

Some things I want to add to this app in the future include:

- Allowing the user to see recipes by category (e.g breakfast/lunch/dinner)
- Responsive/accessible
- The ingredients and recipes displayed in a more readable way
- Allowing the user to like and edit posts
- Allow the user to press a button to change the font so it is more readable
- Have the comments form clear when a user submits a comment

🎯 Were there any requirements or goals that you were not quite able to achieve?

Some personal goals that I didn't achieve include allowing the user to see recipes by category, and also having the app be responsive.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

I found styling the Image tag to be difficult, as I didn't want it to be xpx by ypx as this makes it more difficult to make the app responsive, but I also found having the Image tag as fill={true} difficult to figure out. I also found figuring out how to display the ingredients/method in a readable way difficult.

🌿 What went really well and what could have gone better?

Making the forms and setting up the database tables went well. Styling with the module.css could have gone better, and making the app responsive if I had more time. I also couldn't figure out how to get my favicon to display.

🌿 Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number - hours/time form input
- https://nextjs.org/docs/pages/api-reference/components/image - Image tag
  https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons - Favicon

🌿 Describing errors or bugs you encountered while completing your assignment.

- I had an error when I had my pages in a 'page' folder, so I moved all my page folders into app and this fixed the issue

🌿 Requesting feedback about a specific part of your submission.

Could I get some feedback about styling the ingredients/method data, or an alternate way for the user to input this information so it is displayed in a readable way for the user.
