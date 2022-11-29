import Image from "next/image";
import Script from "next/script";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import styles from "../../../styles/Home.module.css";
import { sceneryImgList } from "../../../config/imgList";

type propsType = {
    id: number;
    imgUrl: string;
};

export async function getServerSideProps({
    params,
}: {
    params: { id: string };
}) {
    const id = Number(params.id || "1");
    if (id > sceneryImgList.length) {
        return {
            redirect: {
                destination: "/page/rank/1",
                permanent: false,
            },
        };
    }
    const imgUrl = sceneryImgList[id - 1];
    // 在构建时将接收到 `posts` 参数
    return { props: { id, imgUrl } };
}

export default function SSRPage({ id, imgUrl }: propsType) {
    return (
        <div className={styles.container}>
            <Header title="动态ID页面" />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    体验 <a href="https://nextjs.org">动态ID</a>
                </h1>

                <div className={styles.grid}>
                    <a className={styles.cardmax}>
                        <h2>动态ID：{id} &rarr;</h2>
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
