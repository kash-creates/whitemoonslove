import Link from 'next/link'
import { Mail, Phone, Heart, Share2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#4A3535] border-t border-[#6A4A4A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">WM</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                White Moons Love Events
              </h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Crafting unforgettable celebrations with elegance, creativity, and personalized attention to every detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Book Event', href: '/book' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-white hover:text-yellow-200 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+919781553180"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <Phone size={18} className="text-yellow-300 group-hover:scale-110 transition-transform" />
                  <span>+91 97815 53180</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ashrafshekhalvi@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <Mail size={18} className="text-yellow-300 group-hover:scale-110 transition-transform" />
                  <span className="break-all">ashrafshekhalvi@gmail.com</span>
                </a>
              </li>

              <li>
                <a 
                  href="https://www.instagram.com/whitemoonslove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white hover:text-yellow-200 transition-colors duration-300 group"
                >
                  <Share2 size={18} className="text-yellow-300 group-hover:scale-110 transition-transform"/>
                  <span>@whitemoonslove</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/70">
              © White Moons Love Events. Crafted with <Heart size={14} className="inline text-accent mx-1" /> for unforgettable celebrations.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+919781553180"
               className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 group"
                aria-label="Call us"
              >
                <Phone size={18} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:ashrafshekhalvi@gmail.com"
                className="p-3 bg-white/10 hover:bg-[#8B6B61] hover:text-white rounded-full transition-all duration-300 group"
                aria-label="Email us"
              >
                <Mail size={18} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/whitemoonslove"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-[#8B6B61] hover:text-white rounded-full transition-all duration-300 group"
                aria-label="Follow on Instagram"
              >
                <Share2 size={18} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
