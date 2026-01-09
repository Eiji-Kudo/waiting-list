import type { Route } from "./+types/board";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "掲示板 - WaitLine" },
		{ name: "description", content: "新しいサービスを発見しよう" },
	];
}

const mockServices = [
	{
		slug: "ai-writing-assistant",
		name: "AI Writing Assistant",
		description:
			"AIがあなたの文章作成をサポート。ブログ、メール、SNS投稿を素早く作成。",
		category: "テクノロジー / AI",
		subscriberCount: 234,
		launchDate: "2025年3月",
		thumbnail:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
	},
	{
		slug: "eco-marketplace",
		name: "エコマーケット",
		description:
			"サステナブルな商品だけを集めたマーケットプレイス。環境に優しい買い物を。",
		category: "EC / マーケットプレイス",
		subscriberCount: 189,
		launchDate: "2025年4月",
		thumbnail:
			"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
	},
	{
		slug: "fitness-ai",
		name: "FitnessAI",
		description:
			"AIパーソナルトレーナー。あなたに最適なトレーニングプランを自動生成。",
		category: "ヘルスケア",
		subscriberCount: 567,
		launchDate: "2025年2月",
		thumbnail:
			"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
	},
	{
		slug: "indie-game-hub",
		name: "インディーゲームハブ",
		description: "インディーゲーム開発者とプレイヤーをつなぐプラットフォーム。",
		category: "エンタメ / ゲーム",
		subscriberCount: 892,
		launchDate: "2025年5月",
		thumbnail:
			"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
	},
	{
		slug: "learn-code",
		name: "LearnCode",
		description:
			"実践的なプログラミング学習プラットフォーム。プロジェクトベースで学ぶ。",
		category: "教育",
		subscriberCount: 445,
		launchDate: "2025年3月",
		thumbnail:
			"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
	},
	{
		slug: "money-tracker",
		name: "MoneyTracker",
		description: "家計簿を自動化。銀行口座と連携して支出を自動分類。",
		category: "フィンテック",
		subscriberCount: 321,
		launchDate: "2025年4月",
		thumbnail:
			"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
	},
];

const categories = [
	"すべて",
	"テクノロジー / AI",
	"EC / マーケットプレイス",
	"フィンテック",
	"ヘルスケア",
	"エンタメ / ゲーム",
	"教育",
	"ライフスタイル",
];

export default function Board() {
	return (
		<div className="min-h-screen bg-slate-50">
			<Header />
			<main className="max-w-6xl mx-auto px-6 py-10">
				<div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-4 mb-8">
					<p className="text-amber-800 text-sm text-center">
						これはデモ画面です。実際にサービスを登録すると、ここにあなたのサービスが表示されます。
					</p>
				</div>

				<div className="mb-10">
					<h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
						掲示板
					</h1>
					<p className="text-slate-600">
						新しいサービスを発見して、いち早く登録しよう
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-8">
					<aside className="md:w-64 shrink-0">
						<div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
							<h2 className="font-semibold text-slate-900 mb-4">カテゴリ</h2>
							<ul className="space-y-1">
								{categories.map((category) => (
									<li key={category}>
										<button
											type="button"
											className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors ${
												category === "すべて"
													? "bg-emerald-50 text-emerald-700 font-medium"
													: "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
											}`}
										>
											{category}
										</button>
									</li>
								))}
							</ul>
						</div>

						<div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm mt-4">
							<h2 className="font-semibold text-slate-900 mb-4">並び替え</h2>
							<select className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
								<option>人気順</option>
								<option>新着順</option>
								<option>ローンチ日順</option>
							</select>
						</div>
					</aside>

					<div className="flex-1">
						<div className="grid md:grid-cols-2 gap-6">
							{mockServices.map((service) => (
								<a
									key={service.slug}
									href={`/service/${service.slug}`}
									className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-300/60 transition-all group"
								>
									<div className="aspect-video bg-slate-100 overflow-hidden">
										<img
											src={service.thumbnail}
											alt={service.name}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										/>
									</div>
									<div className="p-5">
										<div className="text-xs text-emerald-600 font-medium mb-2">
											{service.category}
										</div>
										<h3 className="font-semibold text-slate-900 mb-2">
											{service.name}
										</h3>
										<p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
											{service.description}
										</p>
										<div className="flex items-center justify-between text-sm">
											<span className="text-slate-500">
												<span className="font-medium text-slate-700">
													{service.subscriberCount}
												</span>
												人が登録
											</span>
											<span className="text-slate-400 text-xs">
												{service.launchDate}ローンチ予定
											</span>
										</div>
									</div>
								</a>
							))}
						</div>
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
				<a href="/" className="flex items-center gap-2.5">
					<div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
						<span className="text-white font-bold text-sm">W</span>
					</div>
					<span className="font-bold text-xl tracking-tight text-slate-900">
						WaitLine
					</span>
				</a>
				<nav className="flex items-center gap-6">
					<a
						href="/board"
						className="text-emerald-600 font-medium text-sm transition-colors"
					>
						掲示板
					</a>
					<a
						href="/dashboard"
						className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
					>
						デモを見る
					</a>
				</nav>
			</div>
		</header>
	);
}
