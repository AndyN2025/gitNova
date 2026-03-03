import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchReposQuery } from "@/features/search-repos/model/searchRepos.query";
import { SearchForm } from "@/features/search-repos/ui/SearchForm";
import { RepoList } from "@/features/search-repos/ui/RepoList";

export default function MainPage() {
  const [search, setSearch] = useState("");

  const { data: repos = [], isLoading, error } = useQuery(searchReposQuery(search));

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-5xl font-bold text-center mb-4">GitHub Finder - GitNova</h1>
      <p className="text-center text-gray-500 mb-12">Поиск репозиториев с RxJS debounce и скелетонами</p>

      <SearchForm onSearch={setSearch} />

      <RepoList repos={repos} isLoading={isLoading} error={error} />
    </div>
  );
}