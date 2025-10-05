"use client";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 bg-black/95 border-t  max-w-7xl mx-auto   border-white/10">
      <div className="container mx-auto px-6">
        {/* Top nav row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="" />
            <Image src="/logo.svg" alt="datavec" width={100} height={50} />
          </div>

          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <Link href="#" className="hover:text-white transition-colors">
              The Deck
            </Link>
            <span className="hidden md:block h-5 w-px bg-white/10" />
            <Link href="#" className="hover:text-white transition-colors">
              code
            </Link>
            <span className="hidden md:block h-5 w-px bg-white/10" />
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              contact
            </Link>
            <span className="hidden md:block h-5 w-px bg-white/10" />
            <a
              href="mailto:info@datavec.com"
              className="hover:text-white transition-colors"
            >
              info@datavec.com
            </a>
            <span className="hidden md:block h-5 w-px bg-white/10" />
            <Link
              href="https://www.linkedin.com/company/datavecai/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
            <span className="hidden md:block h-5 w-px bg-white/10" />
            <Link
              href="#demo"
              className="ml-auto md:ml-0 inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium text-white bg-blue-600 ring-1 ring-blue-400/40 shadow-[0_10px_22px_-12px_rgba(59,130,246,0.8)] hover:bg-blue-500 transition-all"
            >
              Book a Demo
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent md:mx-6" />
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        {/* Bottom row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-slate-400" />
            <a href="mailto:info@datavec.com" className="hover:text-white">
              info@datavec.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-4 w-4 text-slate-400" />
            <Link
              href="https://www.linkedin.com/company/datavecai/"
              target="_blank"
              className="hover:text-white"
            >
              DataVec LinkedIn Page
            </Link>
          </div>
          <div className="text-slate-500 md:text-right">
            © {new Date().getFullYear()} DataVec
          </div>
        </div>
      </div>
    </footer>
  );
}
