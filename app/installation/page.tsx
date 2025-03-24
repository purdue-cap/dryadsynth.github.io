import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"

export default function Installation() {
  return (
    <div className="min-h-screen bg-background text-white font-serif">
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-3xl font-bold">
              DryadSynth
            </Link>
          </div>
          <nav className="hidden md:flex gap-8 text-lg">
            <Link href="/" className="hover:text-green-300 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="hover:text-green-300 transition-colors">
              About
            </Link>
            <Link href="/#features" className="hover:text-green-300 transition-colors">
              Features
            </Link>
            <Link href="/#documentation" className="hover:text-green-300 transition-colors">
              Documentation
            </Link>
            <Link href="/#publications" className="hover:text-green-300 transition-colors">
              Publications
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="border-border hover:bg-muted text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>


          <div className="max-w-4xl mx-auto prose prose-xl prose-invert text-muted-foreground">
            <h1 className="text-4xl font-bold mb-8">Installation Guide</h1>
            <h2 className="text-2xl font-bold mb-4 text-green-300">Installation and Running</h2>

            <h3 className="text-xl font-bold mt-6 mb-2 text-green-300">Install the Synthesizer</h3>
            <p>To install DryadSynth, you need:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Basic Linux Utilities: <code>gcc</code>, <code>g++</code>, <code>glibc-dev</code>, <code>zlib-dev</code>
                , <code>zlib-static</code>, <code>libstdc++-static</code> installed (Used for{" "}
                <a
                  href="https://www.graalvm.org/latest/getting-started/linux/"
                  className="text-green-300 hover:text-green-200 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GraalVM
                </a>{" "}
                to compile java scripts).
              </li>
              <li>
                Rust toolchain: <code>rustup</code>, <code>cargo</code>, <code>rustc</code>, <code>rust-std</code>{" "}
                installed.
              </li>
              <li>
                For general solver, make sure <code>z3</code> (recommended version <code>4.14.1</code>) with java
                bindings <code>libz3java.so</code> installed in <code>LD_LIBRARY_PATH</code> or{" "}
                <code>DYLB_LIBRARY_PATH</code>.
              </li>
              <li>
                For bit-vector solver, make sure <code>bitwuzla</code> command installed in <code>PATH</code>.
              </li>
            </ul>

            <p>
              And then simply install DryadSynth by <code>cargo install dryadsynth dryadsynth-bv synthphonia-rs</code>.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-green-300">Supported Platform</h3>
            <div className="overflow-x-auto">
              <table className="border-collapse w-full">
                <thead>
                  <tr>
                    <th className="border border-border p-2 text-center">Platform</th>
                    <th className="border border-border p-2 text-center">Test</th>
                    <th className="border border-border p-2 text-center">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 text-center">linux-x64-glibc</td>
                    <td className="border border-border p-2 text-center">Passed</td>
                    <td className="border border-border p-2">Tested on Fedora 32, March 2025</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 text-center">macos-x64</td>
                    <td className="border border-border p-2 text-center">Passed</td>
                    <td className="border border-border p-2">
                      Homebrew <code>z3</code> package <code>libz3java.dylib</code> missing, install from{" "}
                      <a
                        href="https://github.com/Z3Prover/z3/releases/tag/z3-4.14.1"
                        className="text-green-300 hover:text-green-200 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-2 text-green-300">Run the Synthesizer</h3>
            <p>
              Once DryadSynth in installed in your system. The following command will be available in your environment:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <code>dryadsynth</code> the main entry of the general solver, only general solving strategy options for
                SyGuS-IF (<code>.sl</code>) format supported, will call the sub-solvers in settings restricted in{" "}
                <code>sygus-if2</code> format.
              </li>
              <li>
                <code>dryadsynth-bv</code> the bit-vector sub-solver, used to specify bit-vector specific options in our{" "}
                <a
                  href="https://github.com/purdue-cap/DryadSynth/blob/master/docs/popl2024.pdf"
                  className="text-green-300 hover:text-green-200 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  POPL'24 paper
                </a>
                .
              </li>
              <li>
                <code>synthphonia</code> the string sub-solver, used to specify the string-related grammar and options,
                offering richer grammar in the default settings.
              </li>
            </ul>

            <p className="mt-4">
              <strong>Note:</strong> Some problems run in multithread by default. If you don't specify the number of
              threads, the CPU core count on your system would be used.{" "}
              <strong>This may cause unexpected behavior when the size of the CPU pool is large</strong>.
            </p>

            <div className="mt-8 flex justify-center">
              <Link href="https://github.com/purdue-cap/DryadSynth" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-700 hover:bg-green-600 text-white">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-background py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Purdue CAP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

