// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getWeekDate, getHMS } from "../../util/tools";
import log from "../../util/print-log";

type Data = {
    code: number;
    data: {
        serverTime: number;
        weekDate: string;
        hms: string;
    };
    msg: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    log.info(`请求 url 地址：${req.url}`);

    res.status(200).json({
        code: 200,
        data: {
            serverTime: Date.now(),
            weekDate: getWeekDate(),
            hms: getHMS(),
        },
        msg: "成功",
    });
}
