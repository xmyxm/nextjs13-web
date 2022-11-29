import { useEffect, useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import styles from "../../../styles/Home.module.css";
import docList, { bookInfoType } from "../../../util/docs";
import log from "../../../util/print-log";

type propsType = {
    docInfo: bookInfoType;
};

export async function getStaticPaths() {
    // 返回该动态路由可能会渲染的页面数据，比如 params.id
    const paths = [
        {
            params: { id: "0" },
        },
        {
            params: { id: "1" },
        },
        {
            params: { id: "2" },
        },
    ];
    return {
        paths,
        // 命中尚未生成静态页面的路由直接返回 404 页面
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    // 在构建时将接收到 `posts` 参数
    log.warn(`动态路径 SSG 执行 ${Date.now()}`);
    const docInfo: bookInfoType = docList[Number(params.id)];
    return { props: { docInfo }, revalidate: 4 };
}

export default function SSGPage({ docInfo }: propsType) {
    const { title, author, content } = docInfo;
    const [text, setText] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setText(" + CSR");
        }, 1000);
    });

    return (
        <div className={styles.container}>
            <Header title="SSG Page" />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    SSG{text}
                    <p>getStaticProps</p>
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>
                        编译时调用getStaticProps，并把对应的数据传递给组件渲染成一张完整页面，再保存为一张静态页面
                    </code>
                </p>

                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h2>{title} &rarr;</h2>
                        <h3>{author} &rarr;</h3>
                        <p>{content}</p>
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
