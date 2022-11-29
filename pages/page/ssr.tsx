import axios from "axios";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.css";

type dataType = {
    serverTime: number;
    imgTitle: string;
    imgUrl: string;
};

type propsType = {
    data: dataType;
};

export async function getServerSideProps() {
    const result = await axios
        .post("http://localhost:3000/api/ssrdata")
        .then(res => {
            return res?.data;
        });
    const { data } = result;

    return { props: { data } };
}

export default function SSRPage({ data }: propsType) {
    const { imgTitle, imgUrl } = data;

    return (
        <div className={styles.container}>
            <Header title="SSR Page" />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    CSR <p> getServerSideProps</p>
                </h1>

                <p className={styles.description}>
                    <code className={styles.code}>
                        服务端执行getServerSideProps，并把返回的数据传递给组件去渲染
                    </code>
                </p>

                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h2>{imgTitle} &rarr;</h2>
                        <Image
                            src={imgUrl}
                            alt={imgTitle}
                            width={256}
                            height={171}
                        />
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
