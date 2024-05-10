import newRecipeStyle from "@/app/recipes/new/newrecipe.module.css";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata = {
  title: "FolioFlavours | New Recipe",
  description: "Share a Vegan Recipe",
};

export default function NewRecipe() {
  async function handleNewRecipe(formData) {
    "use server";

    const name = formData.get("username");
    const title = formData.get("title");
    const type = formData.get("type");
    const time = formData.get("time");
    const ingredients = formData.get("ingredients");
    const method = formData.get("method");

    await sql`INSERT INTO recipes (username, title, category, hrs, ingredients, method) values (${name}, ${title}, ${type}, ${time}, ${ingredients}, ${method})`;

    revalidatePath("/");
    redirect("/recipes");
  }
  return (
    <div className={newRecipeStyle.formbackground}>
      <h2>Share Your Recipe</h2>
      <form action={handleNewRecipe} className={newRecipeStyle.form}>
        {" "}
        <div className={newRecipeStyle.formone}>
          <label htmlFor="username">Name</label>
          <input name="username" type="text" placeholder="Your Name" required />
          <label htmlFor="title">Recipe</label>
          <input name="title" placeholder="Recipe Title" required />
          <label htmlFor="type">Type</label>
          <select name="type">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Side Dish">Side Dish</option>
            <option value="Snack">Snack</option>
            <option value="Drink">Drink</option>
          </select>
          <label htmlFor="time">Time (in hours)</label>
          <input
            name="time"
            type="number"
            placeholder="1.0"
            step="0.5"
            min="0"
            max="30"
            required
          />
        </div>
        <div className={newRecipeStyle.formtwo}>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea name="ingredients" placeholder="Ingredients" required />
        </div>
        <div className={newRecipeStyle.formthree}>
          <label htmlFor="method">Method</label>
          <textarea name="method" placeholder="Method" required />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
