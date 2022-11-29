import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css";
import docList from "../../util/docs";
import log from "../../util/print-log";

type dataType = {
    title: string;
    author: string;
    content: string;
};

type propsType = {
    docInfo: dataType;
};

export async function getStaticProps() {
    // 在构建时将接收到 `posts` 参数
    log.warn(`SSG 执行 ${Date.now()}`);
    return { props: { docInfo: docList[2] } };
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
