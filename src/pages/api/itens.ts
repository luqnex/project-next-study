// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  setTimeout(() => {
    res.status(200).json([
      {
        img: 'url img testeeee',
        name: 'teste 1 ',
        price: '$ 9.60',
        id: 1,
      },
      {
        img: 'url img',
        name: 'teste 2',
        price: '$ 9.50',
        id: 2,
      },
      {
        img: 'url img',
        name: 'teste 3',
        price: '$ 9.50',
        id: 3,
      },
      {
        img: 'url img',
        name: 'teste 4',
        price: '$ 9.50',
        id: 4,
      },
      {
        img: 'url img',
        name: 'teste 5',
        price: '$ 9.50',
        id: 5,
      },
      {
        img: 'url img',
        name: 'teste 6',
        price: '$ 9.50',
        id: 6,
      },
      {
        img: 'url img',
        name: 'teste 7',
        price: '$ 9.50',
        id: 7,
      },
      {
        img: 'url img',
        name: 'teste 8',
        price: '$ 9.50',
        id: 8,
      },
    ])
  }, 1000)
}
