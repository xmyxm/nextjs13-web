import Image from "next/image";
import Script from "next/script";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import styles from "../../../styles/Home.module.css";

type propsType = {
    sort: number;
};

export async function getServerSideProps({
    params,
}: {
    params: { id: string };
}) {
    // 在构建时将接收到 `posts` 参数
    return { props: { sort: Number(params.id || "0") } };
}

export default function SSRPage({ sort }: propsType) {
    const imgList: string[] = [
        "https://qqweb.top/other/xinjiang/391624848545_.pic.jpg",
        "https://qqweb.top/other/xinjiang/411624848635_.pic.jpg",
        "https://qqweb.top/other/xinjiang/431624848636_.pic.jpg",
        "https://qqweb.top/other/xinjiang/341624848545_.pic.jpg",
    ];
    const imgUrl = imgList[sort % imgList.length];

    return (
        <div className={styles.container}>
            <Header title="动态ID页面" />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    体验 <a href="https://nextjs.org">动态ID</a>
                </h1>

                <div className={styles.grid}>
                    <a className={styles.cardmax}>
                        <h2>动态ID：{sort} &rarr;</h2>
                        <Image
                            src={imgUrl}
                            alt="景色"
                            width={640}
                            height={480}
                        />
                    </a>
                </div>
            </main>

            <Footer />
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
            />
        </div>
    );
}
