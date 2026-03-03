import { memo } from "react";
import { Link } from "react-router-dom";
import { RepoCard } from "@/entities/repo/ui/RepoCard";
import { RepoCardSkeleton } from "@/entities/repo/ui/RepoCardSkeleton";
import type { Repository } from "@/entities/repo/model/types";

interface RepoListProps {
  repos: Repository[];
  isLoading: boolean;
  error: Error | null;
}

export const RepoList = memo(({ repos, isLoading, error }: RepoListProps) => {
  if (error) {
    return <div className="text-center py-20 text-red-500 text-xl">Ошибка: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <RepoCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!repos.length) {
    return <div className="text-center py-20 text-xl text-gray-500">Ничего не найдено</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <Link key={repo.id} to={`/repo/${repo.owner.login}/${repo.name}`} className="block">
          <RepoCard repo={repo} />
        </Link>
      ))}
    </div>
  );
});