import Welcome from "@/components/Welcome/Welcome";
import Cards from "@/components/Cards/Cards";
import SearchInput from "@/components/SearchInput/SearchInput";
import styles from "./Home.module.scss";


export const dynamic = "auto";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className="container">
        <Welcome className={styles.welcome} />
        <SearchInput />
        <Cards />
      </div>
    </section>
  );
}
