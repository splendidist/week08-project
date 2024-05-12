export default function editrecipe({ params }) {
  //   async function editrecipe(formData) {
  //     "user server";
  //     const name = formData.get("username");
  //     const ingredients = formData.get("ingredients");
  //     const method = formData.get("method");
  //   }
  return (
    <div>
      <form>
        <label htmlFor="username">Name</label>
        <input name="username" placeholder="Your Name" />
        <label htmlFor="ingredients">Ingredients</label>
        <textarea name="ingredients" placeholder="Ingredients" required />
        <label htmlFor="method">Method</label>
        <textarea name="method" placeholder="Method" required />
      </form>
    </div>
  );
}
