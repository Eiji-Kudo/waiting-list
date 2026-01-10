import { Link } from "react-router";
import { WaitlistForm } from "~/components/WaitlistForm";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "WaitLine - LINEで始めるウェイティングリスト" },
		{
			name: "description",
			content:
				"LINEで簡単にウェイティングリストを作成。新サービスのローンチ前にユーザーを集めよう。",
		},
	];
}

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
			<Header />
			<Hero />
			<Features />
			<HowItWorks />
			<EmbedOptions />
			<Pricing />
			<CTA />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200/60 z-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
						<span className="text-white font-bold text-xs sm:text-sm">W</span>
					</div>
					<span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900">
						WaitLine
					</span>
				</div>
				<nav className="hidden md:flex items-center gap-8">
					<a
						href="#features"
						className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
					>
						特徴
					</a>
					<a
						href="#how-it-works"
						className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
					>
						使い方
					</a>
					<a
						href="#pricing"
						className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
					>
						料金
					</a>
					<Link
						to="/board"
						className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
					>
						掲示板
					</Link>
				</nav>
				<div className="flex items-center gap-3">
					<Link
						to="/dashboard"
						className="bg-slate-900 hover:bg-slate-800 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-sm hover:shadow"
					>
						デモを見る
					</Link>
				</div>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section className="pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-20 md:pb-24 px-4 sm:px-6">
			<div className="max-w-4xl mx-auto text-center">
				<div className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
					<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
					<span>30秒でウェイティングリスト完成</span>
				</div>
				<h1 className="text-[2.5rem] sm:text-5xl md:text-7xl font-bold text-slate-900 mb-5 sm:mb-8 leading-[1.1] tracking-tight">
					準備は、
					<br />
					<span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
						たった30秒
					</span>
				</h1>
				<p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
					入力はタイトルと説明文だけ。
					<span className="hidden sm:inline">
						デザインはテンプレートにおまかせ。
					</span>
					<br className="hidden sm:block" />
					<span className="sm:hidden">
						<br />
						デザインはテンプレートにおまかせ。
						<br />
					</span>
					面倒なページ作成は不要。
					<br className="sm:hidden" />
					すぐにLINEで先行登録を集め始められます。
				</p>
				<WaitlistForm />
				<div className="mt-5 sm:mt-6">
					<Link
						to="/board"
						className="text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors"
					>
						掲示板を見る →
					</Link>
				</div>
			</div>
		</section>
	);
}

function Features() {
	const features = [
		{
			icon: "⚡",
			title: "30秒で完成",
			description:
				"タイトルと説明文を入力するだけ。ページビルダーは不要。すぐに始められます。",
		},
		{
			icon: "🎨",
			title: "3つの設置方法",
			description:
				"React/iframe埋め込み、独立LPの3パターン。既存サイトにも新規LPにも対応。",
		},
		{
			icon: "📱",
			title: "LINE完結",
			description:
				"登録から通知まで全てLINE。メールアドレス不要で登録率アップ。",
		},
		{
			icon: "📈",
			title: "開封率60%以上",
			description:
				"メールの開封率10-20%に対し、LINEは60%以上。届くメッセージを。",
		},
		{
			icon: "🤖",
			title: "自動配信",
			description:
				"ステップ配信で自動フォロー。登録1日後、3日後...と自動でメッセージ。",
		},
		{
			icon: "📋",
			title: "掲示板掲載",
			description:
				"プラットフォームの掲示板に掲載。新しいユーザーとの出会いを。",
		},
	];

	return (
		<section
			id="features"
			className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-10 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
						とにかく、楽ちん
					</h2>
					<p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
						複雑なセットアップは一切なし。
						<br />
						タイトルと説明文だけで、あとはWaitLineにおまかせ。
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-sm transition-all group"
						>
							<div className="text-2xl sm:text-4xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
								{feature.icon}
							</div>
							<h3 className="text-sm sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">
								{feature.title}
							</h3>
							<p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function HowItWorks() {
	const steps = [
		{
			step: "1",
			title: "タイトルと説明文を入力",
			description:
				"サービス名と簡単な説明を入力するだけ。デザインはテンプレートにおまかせ。",
		},
		{
			step: "2",
			title: "設置方法を選ぶ",
			description:
				"React埋め込み・iframe埋め込み・独立LPの3パターンから選択。コードをコピペするだけ。",
		},
		{
			step: "3",
			title: "登録開始",
			description:
				"掲示板に自動掲載 + SNSでシェア。LINEで先行登録を集め始めましょう。",
		},
	];

	return (
		<section
			id="how-it-works"
			className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50/70"
		>
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-10 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
						使い方
					</h2>
					<p className="text-sm sm:text-base text-slate-600">
						入力はタイトルと説明文だけ。たった3ステップ。
					</p>
				</div>
				<div className="space-y-3 sm:space-y-6">
					{steps.map((item) => (
						<div
							key={item.step}
							className="flex gap-3 sm:gap-6 items-start bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100"
						>
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0 shadow-sm">
								{item.step}
							</div>
							<div className="pt-0.5 sm:pt-1 min-w-0">
								<h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-0.5 sm:mb-1">
									{item.title}
								</h3>
								<p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function EmbedOptions() {
	const options = [
		{
			icon: "⚛️",
			title: "React コンポーネント",
			description:
				"Reactプロジェクトにnpm installして、コンポーネントとして埋め込み",
			code: '<WaitlistForm projectId="xxx" />',
			badge: "React / Next.js",
		},
		{
			icon: "🖼️",
			title: "iframe 埋め込み",
			description: "どんなサイトにもHTMLタグ1行で埋め込み可能",
			code: '<iframe src="https://wait-line.com/embed/xxx" />',
			badge: "HTML / WordPress",
		},
		{
			icon: "🌐",
			title: "独立LP",
			description: "WaitLineがホスティングするLP。URLをシェアするだけ",
			code: "https://wait-line.com/p/your-project",
			badge: "ホスティング不要",
		},
	];

	return (
		<section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-10 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
						3つの設置方法
					</h2>
					<p className="text-sm sm:text-base text-slate-600">
						あなたの環境に合わせて選べます
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
					{options.map((option) => (
						<div
							key={option.title}
							className="bg-slate-50/50 border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-emerald-200 hover:shadow-sm transition-all"
						>
							<div className="flex items-center justify-between mb-3 sm:mb-4">
								<div className="text-2xl sm:text-3xl">{option.icon}</div>
								<span className="text-[10px] sm:text-xs font-medium text-slate-500 bg-slate-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
									{option.badge}
								</span>
							</div>
							<h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">
								{option.title}
							</h3>
							<p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
								{option.description}
							</p>
							<div className="bg-slate-900 rounded-lg p-2.5 sm:p-3 overflow-x-auto">
								<code className="text-emerald-400 text-[10px] sm:text-xs font-mono whitespace-nowrap">
									{option.code}
								</code>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Pricing() {
	return (
		<section
			id="pricing"
			className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
		>
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-10 sm:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
						料金
					</h2>
					<p className="text-sm sm:text-base text-slate-600">
						シンプルな従量課金。使った分だけ。
					</p>
				</div>

				<div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-white text-center shadow-2xl">
					<div className="text-slate-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3 tracking-wide uppercase">
						完全従量課金
					</div>
					<div className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 tracking-tight">
						LINE送信料の
						<span className="text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
							10%
						</span>
					</div>
					<div className="text-slate-400 text-sm sm:text-base mb-6 sm:mb-10">
						初期費用・月額費用なし
					</div>

					<div className="bg-white/5 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/10">
						<div className="text-left space-y-3 sm:space-y-4">
							<div className="flex justify-between items-center">
								<span className="text-slate-300 text-sm sm:text-base">
									初期費用
								</span>
								<span className="font-semibold text-white text-sm sm:text-base">
									¥0
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-slate-300 text-sm sm:text-base">
									月額基本料
								</span>
								<span className="font-semibold text-white text-sm sm:text-base">
									¥0
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-slate-300 text-sm sm:text-base">
									登録者数上限
								</span>
								<span className="font-semibold text-white text-sm sm:text-base">
									無制限
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-slate-300 text-sm sm:text-base">
									機能制限
								</span>
								<span className="font-semibold text-white text-sm sm:text-base">
									なし
								</span>
							</div>
						</div>
					</div>

					<div className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8">
						例: 月1,000通送信（LINE送信料約3,000円）→ 手数料300円
					</div>

					<WaitlistForm variant="dark" />
				</div>

				<div className="mt-6 sm:mt-8 text-center text-slate-500 text-xs sm:text-sm">
					※ クレジットカード登録は初回メッセージ送信時に必要です
				</div>
			</div>
		</section>
	);
}

function CTA() {
	return (
		<section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50/70">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
					最新情報を受け取る
				</h2>
				<p className="text-sm sm:text-base text-slate-600 mb-8 sm:mb-10">
					WaitLineのリリース情報やアップデートをお届けします。
				</p>
				<WaitlistForm />
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-900 text-slate-400">
			<div className="max-w-6xl mx-auto">
				<div className="flex items-center justify-center gap-2">
					<div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
						<span className="text-white font-bold text-xs sm:text-sm">W</span>
					</div>
					<span className="font-bold text-lg sm:text-xl text-white tracking-tight">
						WaitLine
					</span>
				</div>
				<div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-500">
					© {new Date().getFullYear()} WaitLine. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
