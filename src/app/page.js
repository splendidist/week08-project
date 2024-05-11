import homeStyles from "@/app/home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={homeStyles.homecontainer}>
      <Image
        className={homeStyles.homeimgcontainer}
        src="/homepage.png"
        alt="collage of vegan food"
        height={1800}
        width={3000}
      />
    </div>
  );
}
