import { useQuery } from "@tanstack/react-query";
import { githubApi } from "@/shared/api/github-api";
import type { Repository } from "@/entities/repo/model/types";

export const searchReposQuery = (search: string) => ({
  queryKey: ["search-repos", search.trim().toLowerCase()],
  queryFn: async (): Promise<Repository[]> => {
    if (!search.trim()) return [];
    const { data } = await githubApi.get<{ items: Repository[] }>("/search/repositories", {
      params: { q: search, per_page: 20, sort: "stars", order: "desc" },
    });
    return data.items;
  },
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 10,
  enabled: search.trim().length >= 2,
});