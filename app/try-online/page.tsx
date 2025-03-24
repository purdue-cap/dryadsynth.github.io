"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Folder, Loader2, Play } from "lucide-react"
import { useState, useEffect } from "react"
import Editor from "react-simple-code-editor"
import * as server from "./server"
import FileBrowser from "./file-browser"
import { toast } from "sonner"

export default function TryOnline() {
  const [selectedExample, setSelectedExample] = useState("")

  const [inputCode, setInputCode] = useState("")
  const [output, setOutput] = useState("The synthesis result will appear here.")
  const [showFileBrowser, setShowFileBrowser] = useState(false)
  const [fileTree, setFileTree] = useState<server.FileTree[]>([])
  const [running, setRunning] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setFileTree(await server.show_all_bench());
        setInputCode(await server.get_bench("general/max2.sl"));
      } catch (error) {
        console.error("Error fetching file tree:", error)
      }
    })()
  }, [])

  const runSynthesis = async () => {
    try {
      setRunning(true);
      const response = await server.run_dryadsynth(inputCode);
      if(response.result.status === "ok") {
        toast.success("Synthesis successful!");
        setOutput(response.result.stdout);
      } else if(response.result.status === "error") {
        toast.error("Synthesis failed!");
        setOutput(response.result.stderr);
      } else {
        toast.error("Synthesis timeout!");
      }
      setRunning(false);
    } catch (error) {
      console.error("Error running synthesis:", error)
    }
  };


  // Replace the Editor component with a styled textarea until Prism is fully loaded
  // This ensures we don't try to use Prism before it's ready
  return (
    <div className="min-h-screen bg-background text-white font-serif">
      <header className="border-b border-border py-6">
        <div className="2xl:max-w-[80%] mx-auto px-4 flex justify-between items-center">
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
        <div className="2xl:max-w-[80%] mx-auto px-4">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="border-border hover:bg-muted text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-8">Try DryadSynth Online</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-300">Input</h2>
              {/* <p className="mb-4 text-muted-foreground">Enter your SyGuS problem specification below:</p> */}


              <textarea
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="min-h-[400px] w-full bg-background border border-border rounded-md p-4 text-muted-foreground font-mono"
                style={{ minHeight: "600px" }}
              />

              <div className="mt-4 flex justify-between items-center">
                <Button
                  variant="outline"
                  className="w-64 border-border bg-background text-foreground flex justify-between items-center font-mono"
                  onClick={() => setShowFileBrowser(true)}
                >
                    <Folder className="h-4 w-4" />
                  <span>{selectedExample || "Import an example"}</span>
                </Button>
                <Button
                  className={`w-[150px] text-white ${running ? "opacity-50 cursor-not-allowed bg-gray-700 hover:bg-gray-600" : "bg-green-700 hover:bg-green-600"}`}
                  onClick={!running ? runSynthesis : undefined}
                >
                    {running ? (
                    <div className="flex items-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      In Progress...
                    </div>
                    ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Run Synthesis
                    </>
                    )}
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-300">Output</h2>
              {/* <p className="mb-4 text-muted-foreground">Synthesis result will appear here:</p> */}

              <div className="min-h-[600px] bg-background border border-border rounded-md p-4 font-code text-muted-foreground">
                {output}
              </div>

            </div>
          </div>

          <div className="mt-12 bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4 text-green-300">About the Online Interface</h2>
            <p className="text-muted-foreground text-xl">
              This online interface allows you to try DryadSynth without installing it locally. It supports all the
              features of DryadSynth including CLIA, bit-vectors, and string transformations. For more complex problems
              or larger inputs, we recommend installing DryadSynth locally.
            </p>
            <div className="mt-4">
              <Link href="https://github.com/purdue-cap/DryadSynth/blob/master/README.md">
                <Button variant="outline" className="border-border hover:bg-muted text-white">
                  View Installation Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {showFileBrowser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-auto">
              <h3 className="text-xl font-bold mb-4 text-green-300">Import an example</h3>
                <div className="mb-4 h-50">
                <FileBrowser
                  fileTree={fileTree}
                  onSelectFile={(path: any) => {
                  (async () => {
                    setInputCode(await server.get_bench(path))
                    setSelectedExample(path)
                    setShowFileBrowser(false)
                  })()
                  }}
                />
                </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted text-white"
                  onClick={() => setShowFileBrowser(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-background py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Purdue CAP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

