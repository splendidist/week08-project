import recipesStyles from "@/app/recipes/recipes.module.css";
import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "FolioFlavours | Recipes",
  description: "Vegan Recipes",
};

export default async function Recipes({ searchParams }) {
  const recipes = await sql`SELECT * FROM recipes`;
  // console.log(recipes);

  if (searchParams.sort === "desc") {
    recipes.rows.reverse();
  }
  // console.log("searchParams", searchParams);

  return (
    <div className={recipesStyles.recipesbackground}>
      <h2 className={recipesStyles.subheading}>All Recipes</h2>
      <div className={recipesStyles.sortcontainer}>
        <Link href="/recipes?sort=desc">View Latest</Link>
        <Link href="/recipes?sort=asc">View Oldest</Link>
      </div>

      <div className={recipesStyles.recipescontainer}>
        {recipes.rows.map((recipe) => (
          <div className={recipesStyles.recipecontainer} key={recipe.id}>
            <Image src="/leaf.png" alt="leaf " height={200} width={200} />
            <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
              {recipe.title}
            </Link>
            <p>
              {recipe.category} | {recipe.hrs} hrs
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
