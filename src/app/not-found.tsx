import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold font-mono text-rose-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Trang không tồn tại / Page Not Found</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Đường dẫn bạn yêu cầu không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ / Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

