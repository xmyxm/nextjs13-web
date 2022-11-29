import Image from "next/image";
import styles from "./styles.module.css";

type propsType = {
    imgUrl: string;
};

export default function Picture(props: propsType) {
    const { imgUrl = "" } = props;

    return (
        <div className={styles.pictureBox}>
            <Image src={imgUrl} alt="picture-ts" width={400} height={300} />
        </div>
    );
}
