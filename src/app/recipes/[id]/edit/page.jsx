import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import editStyle from "@/app/recipes/[id]/edit/edit.module.css";

export default async function editrecipe({ params }) {
  const recipes = await sql`SELECT * FROM recipes WHERE id = ${params.id};
`;
  const recipe = recipes.rows[0];

  async function editRecipe(formData) {
    "use server";

    const username = formData.get("username");
    const ingredients = formData.get("ingredients");
    const method = formData.get("method");

    await sql`UPDATE recipes SET username=${username}, ingredients=${ingredients}, method=${method} WHERE id=${params.id}`;

    revalidatePath("/recipes");
    revalidatePath(`/recipes/${params.id}`);

    redirect(`/recipes/${params.id}`);
  }
  return (
    <div className={editStyle.editbackground}>
      <form action={editRecipe}>
        <label htmlFor="username">Name</label>
        <input
          name="username"
          placeholder="Your Name"
          required
          defaultValue={recipe.username}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          required
          defaultValue={recipe.ingredients}
        />
        <label htmlFor="method">Method</label>
        <textarea
          name="method"
          placeholder="Method"
          required
          defaultValue={recipe.method}
        />
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
}
