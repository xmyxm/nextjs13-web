import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";
import log from "../util/print-log";

interface IProps extends DocumentInitialProps {
    bodyClassName: string;
}

export default class AppDocument extends Document<IProps> {
    static async getInitialProps(ctx: DocumentContext): Promise<IProps> {
        const props = await Document.getInitialProps(ctx);

        log.warn(`执行 Document getInitialProps ${Date.now()}`);

        return { ...props, bodyClassName: "body-test" };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <style>
                        {`.body {
                  background-color: red
                }`}
                    </style>
                </Head>

                <body className={this.props.bodyClassName}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
