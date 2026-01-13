declare module "react" {
  export type ReactNode = any;
  export type FC<P = {}> = (props: P & { children?: ReactNode }) => JSX.Element | null;
  export type KeyboardEvent<T = Element> = any;
  export function useState<S = any>(initialState: S | (() => S)): [S, (newState: S) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function StrictMode(props: { children?: ReactNode }): JSX.Element | null;
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module "react-dom/client" {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: import("react").ReactNode): void;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

