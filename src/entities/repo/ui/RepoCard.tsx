import { memo } from "react";
import type { Repository } from "../model/types";

interface RepoCardProps {
  repo: Repository;
}

export const RepoCard = memo(({ repo }: RepoCardProps) => {
  const repoName = repo.full_name.split("/")[1];

  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
      <div className="p-6 flex-1">
        <div className="flex items-center gap-3 mb-5">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="w-11 h-11 rounded-2xl ring-2 ring-gray-100"
          />
          <div>
            <p className="font-semibold">{repo.owner.login}</p>
            <p className="text-xs text-gray-500">@{repo.full_name.split("/")[0]}</p>
          </div>
        </div>

        <h3 className="font-bold text-xl leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {repoName}
        </h3>

        <p className="text-gray-600 text-[15px] line-clamp-3 mb-5">
          {repo.description || "Описание отсутствует"}
        </p>

        {repo.language && (
          <div className="inline-flex items-center gap-2 text-xs font-medium bg-gray-100 px-4 py-1.5 rounded-2xl">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            {repo.language}
          </div>
        )}
      </div>

      <div className="border-t px-6 py-5 flex justify-between text-sm font-medium text-gray-700">
        <div>⭐ {repo.stargazers_count.toLocaleString()}</div>
        <div>🍴 {repo.forks_count.toLocaleString()}</div>
      </div>
    </div>
  );
});