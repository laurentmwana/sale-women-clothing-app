import type React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { Skeleton } from "./skeleton"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  color?: string
  strokeWidth?: number
  variant?: "default" | "pulse" | "dual-ring" | "gradient"
}

export const Loader = ({ size = 24, strokeWidth = 2, color, className, variant = "dual-ring", ...props }: LoaderProps) => {
  // Handle the color prop properly
  const iconColor = color || "currentColor"

  if (variant === "pulse") {
    return (
      <div className={cn("relative", className)} style={{ width: size, height: size }} {...props}>
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-75"
          style={{
            backgroundColor: iconColor === "currentColor" ? "currentColor" : iconColor,
            opacity: 0.3,
          }}
        />
        <Loader2 size={size} className="relative animate-spin" style={{ color: iconColor }} strokeWidth={strokeWidth} />
      </div>
    )
  }

  if (variant === "dual-ring") {
    return (
      <div className={cn("relative", className)} style={{ width: size, height: size }} {...props}>
        <div
          className="absolute inset-0 rounded-full border-t-2 border-b-2 animate-spin"
          style={{
            borderColor: iconColor,
            width: size,
            height: size,
          }}
        />
        <Loader2
          size={size * 0.7}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
          style={{ color: iconColor }}
          strokeWidth={strokeWidth}
        />
      </div>
    )
  }

  if (variant === "gradient") {
    return (
      <div className={cn("relative", className)} style={{ width: size, height: size }} {...props}>
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            background: `conic-gradient(transparent, ${iconColor === "currentColor" ? "currentColor" : iconColor})`,
            width: size,
            height: size,
          }}
        />
        <div className="absolute inset-[15%] rounded-full bg-background" />
        <Loader2
          size={size * 0.6}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
          style={{ color: iconColor }}
          strokeWidth={strokeWidth}
        />
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn("animate-spin", className)} {...props}>
      <Loader2 size={size} style={{ color: iconColor }} strokeWidth={strokeWidth} />
    </div>
  )
}


export const LoadingSkeleton =() => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
      <div className="space-y-8 w-full max-w-md">
        {/* Header skeleton */}
        <Skeleton className="h-8 bg-gray-200 rounded-md animate-pulse"></Skeleton>

        {/* Content skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-4 bg-gray-200 rounded-md animate-pulse"></Skeleton>
          <Skeleton className="h-4 bg-gray-200 rounded-md animate-pulse w-5/6"></Skeleton>
          <Skeleton className="h-4 bg-gray-200 rounded-md animate-pulse"></Skeleton>
          <Skeleton className="h-4 bg-gray-200 rounded-md animate-pulse w-4/6"></Skeleton>
        </div>

        <div className="space-y-4 p-4 border border-gray-200 rounded-md">
          <Skeleton className="h-6 rounded-md animate-pulse w-1/2"></Skeleton>
          <Skeleton className="h-4 rounded-md animate-pulse"></Skeleton>
          <Skeleton className="h-4 rounded-md animate-pulse w-5/6"></Skeleton>
          <Skeleton className="h-10 rounded-md animate-pulse w-1/3 mt-4"></Skeleton>
        </div>
      </div>
    </div>
  )


}