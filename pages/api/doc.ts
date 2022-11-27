
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    code: Number,
    data: Object,
    msg: String,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({
        code: 200,
        data: {
            serverTime: Date.now(),
            imgTitle: "新疆库俄铁路",
            imgUrl:
            "https://p0.meituan.net/scarlett/436ab52281f3f5033f77a48f5c12bd671009047.jpg",
        },
        msg: "成功",
    });
}
