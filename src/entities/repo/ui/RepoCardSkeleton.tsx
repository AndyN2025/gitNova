import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton";

export const RepoCardSkeleton = memo(() => (
  <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden h-full flex flex-col">
    <div className="p-6 flex-1">
      <div className="flex gap-3 mb-5">
        <Skeleton className="w-11 h-11 rounded-2xl" />
        <div className="space-y-2 mt-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      <Skeleton className="h-6 w-4/5 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-11/12 mb-8" />

      <Skeleton className="h-7 w-24 rounded-2xl" />
    </div>

    <div className="border-t px-6 py-5 flex justify-between">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-16" />
    </div>
  </div>
));