// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    code: number;
    data: {
        serverTime: number;
        url: string;
        paths: string | string[] | undefined;
    };
    msg: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { paths } = req.query;

    res.status(200).json({
        code: 200,
        data: {
            serverTime: Date.now(),
            url: req.url || "",
            paths,
        },
        msg: "成功",
    });
}
