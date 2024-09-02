import React, { Component } from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught in ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="text-red-500">Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
