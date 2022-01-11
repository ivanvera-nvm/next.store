interface Window extends Window {
  dataLayer: any[];
  NavigationCapture: {
    sendEvent: (...args: any[]) => void
  }
}
