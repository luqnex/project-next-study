// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest,res: NextApiResponse) {
  setTimeout(() => {
    res.status(200).json([
      {
        img: '/images/img1.jpg',
        name: 'teste 1 ',
        price: '$ 9.60',
        id: 1,
      },
      {
        img: '/images/img2.jpg',
        name: 'teste 2',
        price: '$ 9.50',
        id: 2,
      },
      {
        img: '/images/img3.jpg',
        name: 'teste 3',
        price: '$ 9.50',
        id: 3,
      },
      {
        img: '/images/img5.jpg',
        name: 'teste 5',
        price: '$ 9.50',
        id: 4,
      },
      {
        img: '/images/img1.jpg',
        name: 'teste 6',
        price: '$ 9.50',
        id: 5,
      },
      {
        img: '/images/img2.jpg',
        name: 'teste 7',
        price: '$ 9.50',
        id: 6,
      },
    ])
  }, 1000)
}
