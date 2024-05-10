import homeStyles from "@/app/home.module.css";

export default function Home() {
  return (
    <div className={homeStyles.homecontainer}>
      <h2 className={homeStyles.subheading}>
        Find and Share your favourite vegan recipes!
      </h2>
    </div>
  );
}
