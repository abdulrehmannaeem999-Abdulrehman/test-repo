import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <button color="blue">
        <h1><a href="/about">Abdulrehman</a></h1></button>
      
    </div>
  );
}
