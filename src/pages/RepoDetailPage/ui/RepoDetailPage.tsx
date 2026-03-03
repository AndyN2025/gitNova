import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { githubApi } from "@/shared/api/github-api";
import type { Repository } from "@/entities/repo/model/types";

const getRepoQuery = (owner: string, repo: string) => ({
  queryKey: ["repo", owner, repo],
  queryFn: async (): Promise<Repository> => {
    const { data } = await githubApi.get(`/repos/${owner}/${repo}`);
    return data;
  },
  staleTime: 1000 * 60 * 30,
});

export default function RepoDetailPage() {
  const { owner = "", repo = "" } = useParams<{ owner: string; repo: string }>();

  const { data, isLoading, error } = useQuery(getRepoQuery(owner, repo));

  if (isLoading)
    return <div className="text-center py-40 text-2xl">Загрузка репозитория...</div>;

  if (error || !data)
    return <div className="text-center py-40 text-red-500">Не удалось загрузить репозиторий</div>;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
        <h1 className="text-4xl font-bold mb-6">{data.full_name}</h1>
      </a>

      <p className="text-xl text-gray-600 mb-12">{data.description || "Нет описания"}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-50 p-8 rounded-3xl text-center">
          <div className="text-5xl font-bold mb-2">{data.stargazers_count.toLocaleString()}</div>
          <div className="text-gray-500">Звёзд</div>
        </div>
        <div className="bg-gray-50 p-8 rounded-3xl text-center">
          <div className="text-5xl font-bold mb-2">{data.forks_count.toLocaleString()}</div>
          <div className="text-gray-500">Форков</div>
        </div>
        <div className="bg-gray-50 p-8 rounded-3xl text-center">
          <div className="text-5xl font-bold mb-2">{data.language || "—"}</div>
          <div className="text-gray-500">Язык</div>
        </div>
      </div>

      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit mx-auto bg-black text-white px-10 py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Открыть на GitHub →
      </a>
    </div>
  );
}