import React, { Component, ErrorInfo, ReactNode } from "react";
import Error from "./Error";
import { Button } from "./ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col w-72 mx-auto">
          <Error error="Oops, there is an error!" />

          <Button
            variant="outline"
            onClick={() => this.setState({ hasError: false })}
            className="my-4"
          >
            Try again?
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
