import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <Skeleton className="h-10 w-[400px] mx-auto mb-4" />
        <Skeleton className="h-6 w-[600px] mx-auto" />
      </div>

      <div className="max-w-2xl mx-auto">
        <Skeleton className="h-[300px] w-full rounded-lg" />
      </div>
    </div>
  )
}
