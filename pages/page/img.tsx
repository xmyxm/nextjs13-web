import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css";
import maxImgUrla from "../../public/a.jpeg";
import maxImgUrlb from "../../public/b.jpeg";

export default function ImagePage() {
    return (
        <div className={styles.container}>
            <Header title="SSR Page" />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    next/image <p> 优化体验</p>
                </h1>

                <p className={styles.description}>
                    <code className={styles.code} />
                </p>

                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h2>新疆库俄铁路 &rarr;</h2>
                        <Image
                            src={maxImgUrlb}
                            alt="铁路"
                            width={768}
                            height={512.4}
                            placeholder="blur"
                        />
                        <h2>武汉长江大桥 &rarr;</h2>
                        <Image
                            src={maxImgUrla}
                            alt="桥"
                            width={800}
                            height={600}
                            placeholder="blur"
                        />
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
