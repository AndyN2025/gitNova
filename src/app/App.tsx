import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "@/shared/ui/ErrorBoundary";

const MainPage = lazy(() => import("@/pages/MainPage/ui/MainPage"));
const RepoDetailPage = lazy(() => import("@/pages/RepoDetailPage/ui/RepoDetailPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-5 flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold tracking-tight">
              GitHub Finder - GitNova
            </Link>
            <div className="text-sm text-gray-500">FSD + RxJS + Skeleton</div>
          </div>
        </header>

        <ErrorBoundary>
          <main>
            <Suspense fallback={<div className="text-center py-40 text-2xl">Загрузка страницы...</div>}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/repo/:owner/:repo" element={<RepoDetailPage />} />
              </Routes>
            </Suspense>
          </main>
        </ErrorBoundary>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}