import { Link } from "react-router";
import type { Route } from "./+types/board";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "掲示板 - WaitLine" },
		{ name: "description", content: "新しいサービスを発見しよう" },
	];
}

export default function Board() {
	return (
		<div className="min-h-screen bg-slate-50">
			<Header />
			<main className="max-w-6xl mx-auto px-6 py-10">
				<div className="mb-10">
					<h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
						掲示板
					</h1>
					<p className="text-slate-600">
						新しいサービスを発見して、いち早く登録しよう
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Link
						to="/"
						className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-300/60 transition-all group"
					>
						<div className="aspect-video bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
							<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
								<span className="text-white font-bold text-3xl">W</span>
							</div>
						</div>
						<div className="p-5">
							<div className="text-xs text-emerald-600 font-medium mb-2">
								SaaS / ツール
							</div>
							<h3 className="font-semibold text-slate-900 mb-2">WaitLine</h3>
							<p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
								ウェイトリストを簡単に作成・管理。新サービスのローンチに最適なツール。
							</p>
							<div className="flex items-center justify-between text-sm">
								<span className="text-emerald-600 font-medium">公開中</span>
							</div>
						</div>
					</Link>

					<div className="bg-white/50 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center min-h-[280px]">
						<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
							<svg
								className="w-6 h-6 text-slate-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
						</div>
						<p className="text-slate-500 text-sm mb-2">あなたのサービスをここに</p>
						<p className="text-slate-400 text-xs">
							WaitLineに登録すると掲載されます
						</p>
					</div>

					<div className="bg-white/50 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center min-h-[280px]">
						<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
							<svg
								className="w-6 h-6 text-slate-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
						</div>
						<p className="text-slate-500 text-sm mb-2">Coming Soon...</p>
						<p className="text-slate-400 text-xs">
							新しいサービスが続々登場予定
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

function Header() {
	return (
		<header className="bg-white/90 backdrop-blur-md border-b border-slate-200/60">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2.5">
					<div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
						<span className="text-white font-bold text-sm">W</span>
					</div>
					<span className="font-bold text-xl tracking-tight text-slate-900">
						WaitLine
					</span>
				</Link>
				<nav className="flex items-center gap-6">
					<Link
						to="/board"
						className="text-emerald-600 font-medium text-sm transition-colors"
					>
						掲示板
					</Link>
					<Link
						to="/dashboard"
						className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
					>
						デモを見る
					</Link>
				</nav>
			</div>
		</header>
	);
}
