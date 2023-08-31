import { Inter } from 'next/font/google'
import Posts from './posts'
import ModalAddNew from '@/components/ModalAddNew'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Posts />
    </>
  )
}
