"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { ModeToggle } from "./DarkLight"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

import { NavigationMenuDemo } from "./Dropdown"
import { ComboboxDemo } from "./Search"


export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
       <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Services
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Portfolio
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="#">
            <MountainIcon className="h-7 w-7" />
            <p>NexTrove</p>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Home
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              About
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              <NavigationMenuDemo/>
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Help
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          <ComboboxDemo/>
            <Button size="sm" variant="outline">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
            <ModeToggle/>
            
          </div>
        </div>
      </div>
    </nav>
  )
}
const MountainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="655.359"
      height="655.359"
      viewBox="0 0 6.827 6.827"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }}
    >
      <defs>
        <style>
          {`
            .fil3{fill:#424143}
            .fil16{fill:#939598}
            .fil17{fill:#f2f2f2}
          `}
        </style>
      </defs>
      <g id="Layer_x0020_1">
        <g id="_625046688">
          <g id="Layer_24">
            <path id="_625050384" className="fil3" d="M1.399 1.94h4.029v2.604H1.399z" />
            <path id="_625050984" d="M5.495 4.61H1.332V1.875h4.162V4.61zm-4.03-.132h3.897V2.007H1.465v2.47z" className="fil3" />
            <path id="_625050360" className="fil3" d="M3.413 2.007h1.955v2.471H3.413z" />
            <path id="_625049736" className="fil3" d="M5.495 4.61H3.413v-.132h1.949V2.007H3.413v-.133h2.082z" />
            <path id="_625050216" className="fil3" d="M5.719 4.953H1.108a.173.173 0 0 1-.173-.173v-.17h4.957v.17a.173.173 0 0 1-.173.173z" />
            <path id="_625050000" d="M5.72 4.953H3.412v-.342h2.48v.17a.173.173 0 0 1-.174.172z" className="fil3" />
            <path id="_625049760" className="fil3" d="M.935 4.611h4.958v.117H.935z" />
            <path id="_625049472" className="fil3" d="M3.413 4.611h2.479v.117H3.413z" />
            <path id="_625049040" className="fil3" d="M2.985 4.611h.856v.117h-.856z" />
            <g>
              <path id="_625048992" className="fil3" d="M3.413 4.611h.428v.117h-.428z" />
            </g>
            <g>
              <path id="_625048824" className="fil16" d="M1.598 2.387h3.634v1.96H1.598z" />
              <path id="_625048320" className="fil16" d="M1.598 2.143h3.634v.244H1.598z" />
              <path id="_625048392" d="M1.811 2.303h-.075a.027.027 0 0 1-.027-.027v-.022c0-.015.012-.027.027-.027h.075c.015 0 .028.012.028.027v.022a.027.027 0 0 1-.028.027z" className="fil17" />
              <path id="_625048128" d="M2.015 2.303H1.94a.027.027 0 0 1-.027-.027v-.022c0-.015.012-.027.027-.027h.075c.015 0 .027.012.027.027v.022a.027.027 0 0 1-.027.027z" className="fil17" />
              <path id="_625048032" d="M2.22 2.303h-.076a.027.027 0 0 1-.027-.027v-.022c0-.015.012-.027.027-.027h.075c.015 0 .027.012.027.027v.022a.027.027 0 0 1-.027.027z" className="fil17" />
            </g>
            <g>
              <path id="_625048104" className="fil16" d="M4.002 4.094H2.824l.129-1.126h.921z" />
            </g>
            <g>
              <path id="_625048584" className="fil16" d="M4.002 4.094h-.589V2.968h.461z" />
            </g>
            <g>
              <ellipse id="_625047432" className="fil17" cx="3.167" cy="3.034" rx=".037" ry=".033" />
            </g>
            <g>
              <ellipse id="_625047648" className="fil16" cx="3.167" cy="3.034" rx=".03" ry=".027" />
            </g>
            <g>
              <ellipse id="_625047504" className="fil17" cx="3.661" cy="3.034" rx=".037" ry=".033" />
            </g>
            <g>
              <ellipse id="_625047984" className="fil16" cx="3.661" cy="3.034" rx=".03" ry=".027" />
            </g>
            <g>
              <path id="_625047840" d="M3.66 3.044a.017.017 0 0 1-.017-.017c0-.1-.025-.194-.07-.264-.043-.068-.1-.106-.16-.106s-.116.038-.16.106a.498.498 0 0 0-.07.264.017.017 0 0 1-.033 0c0-.106.026-.207.075-.283.05-.078.116-.12.188-.12s.14.042.19.12a.532.532 0 0 1 .074.283c0 .01-.008.017-.017.017z" className="fil17" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MountainIcon;

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}