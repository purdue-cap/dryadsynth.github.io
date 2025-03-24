import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white font-serif">
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">DryadSynth</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-xl">
            <Link href="/" className="hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-green-300 transition-colors">
              About
            </Link>
            <Link href="#features" className="hover:text-green-300 transition-colors">
              Features
            </Link>
            <Link href="#documentation" className="hover:text-green-300 transition-colors">
              Documentation
            </Link>
            <Link href="#publications" className="hover:text-green-300 transition-colors">
              Publications
            </Link>
            <Link href="#team" className="hover:text-green-300 transition-colors">
              Team
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/purdue-cap/DryadSynth" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-border hover:bg-muted text-white text-lg">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="text-xl">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 opacity-10 bg-no-repeat bg-center bg-cover"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">DryadSynth</h1>
            <p className="text-2xl md:text-3xl mb-8 text-foreground">A SyGuS Solver for Advanced Program Synthesis</p>
            <p className="text-xl max-w-3xl mx-auto mb-12 text-muted-foreground">
              DryadSynth is an open-source, state-of-the-art syntax-guided synthesis (SyGuS) engine developed at Purdue
              University. It leverages a novel cooperative synthesis framework that seamlessly integrates enumerative
              search and deductive synthesis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/try-online">
                <Button className="text-lg px-8 py-6 bg-green-700 hover:bg-green-600 text-white">Try Online</Button>
              </Link>
              <Link href="https://github.com/purdue-cap/DryadSynth/blob/master/README.md">
                <Button variant="outline" className="text-lg px-8 py-6 border-border hover:bg-muted text-white">
                  Installation Guide
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">About DryadSynth</h2>
            <div className="prose prose-xl prose-invert max-w-4xl mx-auto text-muted-foreground">
              <p>
                DryadSynth is designed to automatically generate programs that satisfy both semantic specifications and
                user–defined syntactic constraints. By combining the strengths of enumerative and deductive techniques,
                DryadSynth employs a divide-and-conquer strategy that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong className="text-green-300">
                    Splits complex synthesis problems into manageable subproblems:
                  </strong>{" "}
                  Using innovative fixed-height enumeration and tailored deductive rules, the engine gradually builds up
                  solutions.
                </li>
                <li>
                  <strong className="text-green-300">Supports concurrent synthesis:</strong> Its concurrent framework
                  (see our string sub-solver "Synthphonia") coordinates asynchronous deduction and enumeration to
                  overcome exponential search spaces.
                </li>
                <li>
                  <strong className="text-green-300">Is versatile across multiple domains:</strong> DryadSynth
                  effectively supports synthesis for conditional linear integer arithmetic (CLIA), bit-vectors, and
                  string transformations.
                </li>
              </ul>
              <p className="mt-6">
                Based on our research published at{" "}
                <a
                  href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/pldi2020.pdf"
                  className="text-green-300 hover:text-green-200 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PLDI 2020
                </a>
                ,{" "}
                <a
                  href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/popl2024.pdf"
                  className="text-green-300 hover:text-green-200 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  POPL 2024
                </a>
                , and{" "}
                <a
                  href="https://yuantianding.github.io/uploads/PLDI_2025.pdf"
                  className="text-green-300 hover:text-green-200 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PLDI 2025
                </a>
                , DryadSynth represents a significant step forward in scaling synthesis to problems previously deemed
                unsolvable.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-green-300">Hybrid Synthesis Approach</h3>
                <p className="text-muted-foreground">
                  Combines enumerative search with deductive synthesis to explore program spaces efficiently.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-green-300">Cooperative Divide-and-Conquer</h3>
                <p className="text-muted-foreground">
                  Uses novel strategies to break down synthesis tasks into subproblems that can be solved independently
                  and later recombined.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-green-300">Concurrent Synthesis Engine</h3>
                <p className="text-muted-foreground">
                  Integrates asynchronous deduction with a versatile enumerator (as seen in our string synthesis module,
                  Synthphonia) for faster convergence.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-green-300">Domain Versatility</h3>
                <p className="text-muted-foreground">
                  Supports multiple synthesis tracks including CLIA, bit-vectors, and string transformations.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-green-300">Lightweight and Extensible</h3>
                <p className="text-muted-foreground">
                  Implemented in approximately 11K lines of Java leveraging the power of Z3, DryadSynth is both easy to
                  understand and extend.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-green-300">Open Source & MIT Licensed</h3>
                <p className="text-muted-foreground">Freely available for both research and commercial applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="documentation" className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Documentation</h2>
            <div className="prose prose-xl prose-invert max-w-4xl mx-auto text-muted-foreground">
              <p>
                DryadSynth is published on <span className="bg-muted px-1 py-0.5 rounded font-code">crates.io</span>, the Rust
                package registry. Explore our packages:
              </p>
              <ul className="list-disc pl-6 space-y-4 mt-4">
                <li>
                  <a
                    href="https://crates.io/crates/dryadsynth"
                    className="text-green-300 hover:text-green-200 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bg-muted px-1 py-0.5 rounded font-code">dryadsynth</span></a> – Main synthesizer package
                </li>
                <li>
                  <a
                    href="https://crates.io/crates/dryadsynth-bv"
                    className="text-green-300 hover:text-green-200 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bg-muted px-1 py-0.5 rounded font-code">dryadsynth-bv</span></a> – Bit-vector solver package
                </li>
                <li>
                  <a
                    href="https://crates.io/crates/synthphonia-rs"
                    className="text-green-300 hover:text-green-200 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bg-muted px-1 py-0.5 rounded font-code">synthphonia-rs</span></a> – String transformation solver
                </li>
                <li>
                  <a
                    href="https://crates.io/crates/simple-rc-async/0.1.0"
                    className="text-green-300 hover:text-green-200 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bg-muted px-1 py-0.5 rounded font-code">simple-rc-async</span></a> – Supporting library for
                    concurrent synthesis
                </li>
              </ul>
              <p className="mt-6">
                For further details on installation, usage, and design, please refer to our
                <a
                  href="https://github.com/purdue-cap/DryadSynth"
                  className="text-green-300 hover:text-green-200 underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  README
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Publications</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-card p-6 pb-4 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-green-300">
                  <a href="https://doi.org/10.1145/3385412.3386027">Reconciling Enumerative and Deductive Program Synthesis</a>
                  </h3>

                <p className="text-muted-foreground mb-1">Kangjing Huang, Xiaokang Qiu, Peiyuan Shen, Yanjun Wang.</p>
                <p className="text-muted-foreground mb-3">
                  In Proc. 41st ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI '20).
                </p>
              </div>
              <div className="bg-card p-6 pb-4 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-green-300">
                  <a href="https://dl.acm.org/doi/10.1145/3632913">Enhanced Enumeration Techniques for Syntax-Guided Synthesis</a>
                  </h3>

                <p className="text-muted-foreground mb-1">Yuantian Ding, Xiaokang Qiu.</p>
                <p className="text-muted-foreground mb-3">
                  In Proc. 51st ACM SIGPLAN Symposium on Principles of Programming Languages (POPL '24).
                </p>
              </div>
              <div className="bg-card p-6 pb-4 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-green-300">
                  <a href="https://yuantianding.github.io/uploads/PLDI_2025.pdf">A Concurrent Approach to String Transformation Synthesis</a>
                  </h3>

                <p className="text-muted-foreground mb-1">Yuantian Ding, Xiaokang Qiu.</p>
                <p className="text-muted-foreground mb-3">
                  Conditional Accepted at 46th ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI '25).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Purdue CAP Team</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-xl text-muted-foreground mb-8">
                DryadSynth is developed by the Purdue Computer-Aided Programming (CAP) research group, focusing on
                program synthesis, verification, and automated reasoning.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-green-300">XQ</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-300">Xiaokang Qiu</h3>
                  <p className="text-muted-foreground">Principal Investigator</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-green-300">KH</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-300">Kangjing Huang</h3>
                  <p className="text-muted-foreground">Researcher</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-green-300">YD</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-300">Yuantian Ding</h3>
                  <p className="text-muted-foreground">Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Downloads</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Get the latest version of DryadSynth from our GitHub repository:
            </p>
            <div className="flex justify-center mb-8">
              <Link href="https://github.com/purdue-cap/DryadSynth" target="_blank" rel="noopener noreferrer">
                <Button className="text-lg px-8 py-6 bg-green-700 hover:bg-green-600 text-white">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Repository
                </Button>
              </Link>
            </div>
            {/* <p className="text-muted-foreground">
              You can also access our PLDI 2020 artifact via
              <a
                href="https://zenodo.org/record/3753963"
                className="text-green-300 hover:text-green-200 underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zenodo
              </a>
              .
            </p> */}
          </div>
        </section>
      </main>

      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">DryadSynth</h3>
              <p className="text-muted-foreground">A SyGuS Solver for Advanced Program Synthesis</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">Support</h3>
              <p className="text-muted-foreground mb-2">
                For questions, bug reports, or feature requests, please use our
                <a
                  href="https://github.com/purdue-cap/DryadSynth/issues"
                  className="text-green-300 hover:text-green-200 underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  issue tracker on GitHub
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">License</h3>
              <p className="text-muted-foreground">
                DryadSynth is released under the
                <a
                  href="https://opensource.org/licenses/MIT"
                  className="text-green-300 hover:text-green-200 underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT License
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>
              Embrace the power of cooperative synthesis and join us in advancing the frontier of program synthesis with
              DryadSynth!
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Purdue CAP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

