import { sql } from "@vercel/postgres";
import recipeStyle from "@/app/recipes/[id]/recipepage.module.css";
import Link from "next/link";

export default async function RecipePage({ params }) {
  const recipes = await sql`
  SELECT * FROM recipes WHERE id = ${params.id};
`;
  const [recipe] = recipes.rows;

  return (
    <div className={recipeStyle.recipebackground}>
      <Link href="/recipes">Back to Recipes</Link>
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
      <h3>Leave a comment</h3>
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" />
        <label htmlFor="comment">Comment</label>
        <input name="comment" />
      </form>
    </div>
  );
}
