import recipesStyles from "@/app/recipes/recipes.module.css";

export const metadata = {
  title: "FolioFlavours | Recipes",
  description: "Vegan Recipes",
};

export default function Recipes() {
  return (
    <div className={recipesStyles.recipescontainer}>
      <h2 className={recipesStyles.subheading}>All Recipes</h2>
    </div>
  );
}
