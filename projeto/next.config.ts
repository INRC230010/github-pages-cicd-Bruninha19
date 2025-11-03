import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Faz o Next gerar um site estático
  basePath: "/github-pages-cicd-Bruninha19", // nome EXATO do seu repositório no GitHub
  images: {
    unoptimized: true, // necessário para exportação estática
  },
};

export default nextConfig;
