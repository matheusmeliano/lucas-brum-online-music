import "@testing-library/jest-dom";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  value: MockIntersectionObserver,
  writable: true,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => {
    const listeners = new Set<(event: MediaQueryListEvent) => void>();
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: (cb: (event: MediaQueryListEvent) => void) => listeners.add(cb),
      removeListener: (cb: (event: MediaQueryListEvent) => void) => listeners.delete(cb),
      addEventListener: (_: "change", cb: (event: MediaQueryListEvent) => void) => listeners.add(cb),
      removeEventListener: (_: "change", cb: (event: MediaQueryListEvent) => void) => listeners.delete(cb),
      dispatchEvent: (event: Event) => {
        listeners.forEach((cb) => cb(event as MediaQueryListEvent));
        return true;
      },
    } satisfies MediaQueryList;
  },
});

class MockResizeObserver {
  private readonly cb: ResizeObserverCallback;
  constructor(cb: ResizeObserverCallback) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ contentRect: { width: 0 } } as ResizeObserverEntry], this as unknown as ResizeObserver);
  }
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, "ResizeObserver", {
  value: MockResizeObserver,
  writable: true,
});
