import { Component, type ReactNode } from 'react'

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <p className="m-8 rounded-md bg-red-100 p-4 text-red-700">Something went wrong. Please refresh and try again.</p>
    }

    return this.props.children
  }
}
