import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-20">
      <h1 className="mb-6 text-center text-3xl font-semibold">Bags</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div className="flex w-full flex-col" key={i}>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
              <Skeleton className="h-full w-full" />
            </div>
            <Skeleton className="mt-4 h-4 w-2/3 rounded-lg" />
            <Skeleton className="mt-2 h-4 w-16 rounded-lg" />
            <Skeleton className="mt-2 h-4 w-12 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
