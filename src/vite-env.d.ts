/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_SERVER_URL: string;
    // add other env vars here as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  