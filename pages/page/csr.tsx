import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css";
import log from "../../util/print-log";

type resultType = {
    code: number;
    data: {
        serverTime: number;
        weekDate: string;
        hms: string;
    };
    msg: string;
};

const apiUrl = "/api/csrdata";
const imgUrl =
    "https://p0.meituan.net/scarlett/238a59d7116f011f4d317dc755e1c4bf1932866.jpg";

async function getPageData(): Promise<resultType> {
    const dateInfo: resultType = await axios
        .post(apiUrl)
        .then(res => {
            return res?.data;
        })
        .catch(err => {
            log.error(`接口请求异常: ${JSON.stringify(err)}`);
            return { serverTime: 0, weekDate: "", hms: "" };
        });
    return dateInfo;
}

const DynamicPicture = dynamic(() => import("../../components/picture"), {
    ssr: false,
});

export default function CSRPage() {
    const [isClientSide, setIsClientSide] = useState(false);

    const [dateInfo, setDateInfo] = useState({
        serverTime: 0,
        weekDate: "",
        hms: "",
    });

    const { weekDate, hms } = dateInfo;

    useEffect(() => {
        setIsClientSide(true);
        const interval = setInterval(() => {
            getPageData().then(res => {
                if (res.code === 200) {
                    setDateInfo(res.data);
                } else {
                    log.error(`接口请求失败: ${JSON.stringify(res)}`);
                }
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [hms]);

    return (
        <div className={styles.container}>
            <Header title="CSR测试页面" />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    CSR (SSR+CSR)
                    <p>two-pass rendering OR import + ssr: false</p>
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>
                        nextjs
                        并没有完全的csr，此方案为部分csr，也就是这个页面部分代码也会在服务端渲染执行，useEffect
                        钩子只会在客户端触发，我们通过 useEffect
                        在客户端请求数据更新页面，第二点我们通过使用next.js提供的动态import
                        + 禁用SSR{" "}
                    </code>
                </p>

                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h2>{weekDate} &rarr;</h2>
                        <p>{hms}</p>
                    </a>
                    {isClientSide && (
                        <a className={styles.cardmax}>
                            <DynamicPicture imgUrl={imgUrl} />
                        </a>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
