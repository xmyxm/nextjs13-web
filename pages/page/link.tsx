import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import { routerList } from "../../config/router";

export default function Home() {
    const minList = routerList.slice(2, 8);

    return (
        <div className={styles.container}>
            <Header title="Next App" />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    next/link <a href="https://nextjs.org">优化体验</a>
                </h1>

                <p className={styles.description}>
                    首页入口{" "}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    {minList.map(({ title, content, src }) => {
                        return (
                            <Link
                                key={src}
                                href={src}
                                prefetch={false}
                                className={styles.card}
                            >
                                <h2>{title} &rarr;</h2>
                                <p>{content}</p>
                            </Link>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
