import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Resume } from '../components~/source/Resume';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Resume />
  )
}
