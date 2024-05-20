import Welcome from "@/components/Welcome/Welcome";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className="container">
        <Welcome />
      </div>
    </section>
  );
}
