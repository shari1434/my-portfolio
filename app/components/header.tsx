import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">MS</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
          <li><Link href="/services" className="hover:text-red-600 transition-colors">Services</Link></li>
          <li><Link href="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

