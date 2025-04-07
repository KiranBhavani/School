'use client'

interface PlaceholderImageProps {
  text: string
  width?: number
  height?: number
  className?: string
}

export function PlaceholderImage({ text, width = 350, height = 200, className }: PlaceholderImageProps) {
  return (
    <div 
      className={`bg-[#e0f7fa] flex items-center justify-center ${className}`}
      style={{ 
        width: width,
        height: height,
        minHeight: height
      }}
    >
      <span className="text-[#4CAF50] text-lg font-medium">{text}</span>
    </div>
  )
} 