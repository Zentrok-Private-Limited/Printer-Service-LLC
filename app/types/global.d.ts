export {};

declare global {
  interface Window {
    jivo_api: {
      open: () => void;
      close: () => void;
      show: () => void;
      hide: () => void;
    };
  }
}