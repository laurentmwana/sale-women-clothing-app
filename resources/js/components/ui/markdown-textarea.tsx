import type React from "react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface MarkdownTextareaProps {
  id?: string
  name?: string
  placeholder?: string
  defaultValue?: string
  className?: string
  onChange?: (value: string) => void
}

export const MarkdownTextarea = ({
  id,
  name,
  placeholder = "Écrivez votre contenu ici...",
  defaultValue = "",
  className,
  onChange,
}: MarkdownTextareaProps) => {
  const [content, setContent] = useState(defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <Tabs defaultValue="write" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="write">Écrire</TabsTrigger>
          <TabsTrigger value="preview">Aperçu</TabsTrigger>
        </TabsList>
        <TabsContent value="write" className="mt-2">
          <Textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={content}
            onChange={handleChange}
            className="min-h-[200px] font-mono text-sm"
          />
          <p className="mt-2 text-xs text-muted-foreground">
          Prend en charge le formatage Markdown. Utilisez les caractères gras, italique, # pour les titres, - pour les listes, etc.
          </p>
        </TabsContent>
        <TabsContent value="preview" className="mt-2">
          <div className="rounded-md border border-input bg-background p-4 min-h-[200px]">
            {content ? (
              <div
            className="prose dark:prose-invert"

              >
              <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            ) : (
              <p className="text-muted-foreground">Preview will appear here...</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

