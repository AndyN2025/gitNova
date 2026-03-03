import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
            <h2 className="text-3xl font-bold text-red-600 mb-3">Что-то сломалось 😢</h2>
            <p className="text-gray-600 mb-6 max-w-md">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800"
            >
              Перезагрузить страницу
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}