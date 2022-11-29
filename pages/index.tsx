import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
import { routerList } from "../config/router";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header title="Next App" />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    首页入口{" "}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    {routerList.map(({ title, content, src }) => {
                        return (
                            <a key={src} href={src} className={styles.card}>
                                <h2>{title} &rarr;</h2>
                                <p>{content}</p>
                            </a>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
