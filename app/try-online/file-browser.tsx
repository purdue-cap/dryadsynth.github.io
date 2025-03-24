import { useState } from "react"
import { FileTree } from "./server"
import { FileIcon, Folder, FolderOpen } from "lucide-react"


export type FileBrowserProps = {
  fileTree: FileTree[]
  onSelectFile: (path: string) => void
}


export default function FileBrowser({ fileTree, onSelectFile }: FileBrowserProps) {
  const [expandedDirs, setExpandedDirs] = useState<string[]>([])
  const renderTree = (tree: FileTree[], path: string = "") => {
    return tree.map(node => {
      const currentPath = `${path}/${node.name}`
      const isDirectory = node.type === "directory"
      const isExpanded = expandedDirs.includes(currentPath)

      return (
        <div key={currentPath} className="ml-4">
          <div
            className="flex items-center py-1 cursor-pointer hover:text-green-300"
            onClick={() => {
              if (isDirectory) {
                if (isExpanded) {
                  setExpandedDirs(
                    expandedDirs.filter((dir: any) => dir !== currentPath && !dir.startsWith(`${currentPath}/`)),
                  )
                } else {
                  setExpandedDirs([...expandedDirs, currentPath])
                }
              } else {
                onSelectFile(currentPath)
              }
            }}
          >
            <span className="mr-2">
              {isDirectory ? (
                isExpanded ? <FolderOpen size={16} className="mr-1" /> : <Folder size={16} className="mr-1" />
              ) : (
                <FileIcon size={16} className="mr-1" />
              )}
            </span>
            <span>{node.name}</span>
          </div>
          {isDirectory && isExpanded && (
            <div className="ml-2 border-l border-border pl-2">{renderTree(node.children, currentPath)}</div>
          )}
        </div>
      )
    })
  }

  return <div className="max-h-[50vh] overflow-auto font-code">{renderTree(fileTree)}</div>
}