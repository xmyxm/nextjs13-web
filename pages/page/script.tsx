import Script from "next/script";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css";
import log from "../../util/print-log";

export default function ImagePage() {
    return (
        <div className={styles.container}>
            <Header title="SSR Page" />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    next/script <p> 使用体验</p>
                </h1>

                <p className={styles.description}>
                    <code className={styles.code} />
                </p>

                <div className={styles.grid}>
                    <a className={styles.cardmax}>
                        <h2>4 种脚本加载策略: </h2>
                        <p>
                            beforeInteractive：在任何 Next.js
                            代码之前和任何页面注水发生之前加载
                        </p>
                        <p>afterInteractive：页面注水发生之后加载</p>
                        <p>lazyOnload：在浏览器空闲时间加载</p>
                        <p>worker：加载到 web worker 中</p>
                        <Script id="show-banner" strategy="lazyOnload">
                            {`document.body.style.backgroundColor = '#fafafa'`}
                        </Script>
                        <Script
                            id="stripe-js"
                            src="https://analytics.meituan.net/analytics.js"
                            onLoad={() => {
                                log.info("js 加载完成");
                            }}
                            onReady={() => {
                                log.info("执行页面渲染");
                            }}
                            onError={() => {
                                log.error("js 加载失败");
                            }}
                        />
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
