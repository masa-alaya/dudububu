/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // هاد السطر هو اللي بيخلي الموقع يشتغل كـ static site
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // ملاحظة: إذا اسم المستودع تبعك هو dudububu ضيف السطرين اللي تحت
  basePath: '/dudububu',
  assetPrefix: '/dudububu',
}

export default nextConfig
