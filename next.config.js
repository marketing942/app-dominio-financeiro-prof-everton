/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Desabilitar geração estática — o app usa autenticação e dados dinâmicos
  // O Vercel suporta Next.js SSR nativamente
  experimental: {
    // Força todas as páginas a serem renderizadas no servidor dinamicamente
  },
};

module.exports = nextConfig;
