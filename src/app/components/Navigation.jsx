import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/recipes/new">Add Recipe</Link>
      </nav>
    </div>
  );
}
