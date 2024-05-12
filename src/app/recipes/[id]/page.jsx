import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import recipeStyle from "@/app/recipes/[id]/recipepage.module.css";
import Link from "next/link";

export default async function RecipePage({ params }) {
  const recipes = await sql`
  SELECT * FROM recipes WHERE id = ${params.id};
`;
  const [recipe] = recipes.rows;

  const comments = await sql`
  SELECT * FROM comments WHERE recipe_id =${params.id};
  `;

  async function handleNewComment(formData) {
    "use server";

    const name = formData.get("username");
    const comment = formData.get("comment");

    await sql`INSERT INTO comments (recipe_id, username, comment) values (${params.id}, ${name}, ${comment})`;

    revalidatePath("/recipes/[id]");
  }

  return (
    <div className={recipeStyle.recipebackground}>
      <Link href="/recipes">Back to Recipes</Link>
      <Link href={`/recipes/${params.id}/edit`}>Edit</Link>
      <div className={recipeStyle.postcontainer}>
        <div className={recipeStyle.titlecontainer}>
          <p>{recipe.category}</p>
          <h2>{recipe.title}</h2>
          <p>Time: {recipe.hrs} hours</p>
        </div>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
        <h3>Method</h3>
        <p>{recipe.method}</p>
        <p>Posted by {recipe.username}</p>
      </div>
      <div className={recipeStyle.formandcomments}>
        <h3>Leave a comment</h3>
        <form action={handleNewComment} className={recipeStyle.commentform}>
          <label htmlFor="username">Name</label>
          <input placeholder="Your Name" name="username" />
          <label htmlFor="comment">Comment</label>
          <input placeholder="Comment" name="comment" />
          <button type="submit">Add Comment</button>
        </form>
        {comments.rows.map((comment) => (
          <div className={recipeStyle.comment} key={comment.id}>
            <h2>{comment.username}</h2>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
