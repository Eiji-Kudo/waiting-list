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
		<div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
			<Header />
			<Hero />
			<Features />
			<HowItWorks />
			<Pricing />
			<CTA />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-sm">W</span>
					</div>
					<span className="font-bold text-xl text-gray-900">WaitLine</span>
				</div>
				<nav className="hidden md:flex items-center gap-8">
					<a href="#features" className="text-gray-600 hover:text-gray-900">
						特徴
					</a>
					<a href="#how-it-works" className="text-gray-600 hover:text-gray-900">
						使い方
					</a>
					<a href="#pricing" className="text-gray-600 hover:text-gray-900">
						料金
					</a>
					<a href="/board" className="text-gray-600 hover:text-gray-900">
						掲示板
					</a>
				</nav>
				<div className="flex items-center gap-4">
					<a
						href="/dashboard"
						className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
					>
						デモを見る
					</a>
				</div>
			</div>
		</header>
	);
}

function Hero() {
	return (
		<section className="pt-32 pb-20 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
					日本初 LINE特化のウェイティングリスト
				</div>
				<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
					LINEで集める、
					<br />
					LINEで届ける
				</h1>
				<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
					新サービスのローンチ前にユーザーを集めよう。
					<br />
					LINE友だち追加で登録完了。開封率60%以上のLINEで販促まで。
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/dashboard"
						className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
					>
						無料で始める
					</a>
					<a
						href="/board"
						className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg border border-gray-200 transition-colors"
					>
						掲示板を見る
					</a>
				</div>
				<p className="text-sm text-gray-500 mt-4">
					初期費用・月額費用なし。使った分だけ。
				</p>
			</div>
		</section>
	);
}

function Features() {
	const features = [
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
			icon: "📊",
			title: "分析機能",
			description: "登録者数の推移、流入元などをダッシュボードで簡単に確認。",
		},
		{
			icon: "📋",
			title: "掲示板掲載",
			description:
				"プラットフォームの掲示板に掲載。新しいユーザーとの出会いを。",
		},
		{
			icon: "💳",
			title: "従量課金",
			description:
				"初期費用・月額費用なし。LINE送信料の10%だけ。使った分だけ。",
		},
	];

	return (
		<section id="features" className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
					なぜWaitLineなのか
				</h2>
				<p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
					メール登録のウェイティングリストはもう古い。
					<br />
					LINEなら登録も通知も、もっと届く。
				</p>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-colors"
						>
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600">{feature.description}</p>
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
			title: "サービスを登録",
			description: "サービス名、説明、LINE公式アカウントを設定するだけ。",
		},
		{
			step: "2",
			title: "ユーザーが登録",
			description: "掲示板やあなたのSNSからユーザーがLINE友だち追加で登録。",
		},
		{
			step: "3",
			title: "自動でフォロー",
			description: "ステップ配信で自動的にユーザーをナーチャリング。",
		},
		{
			step: "4",
			title: "ローンチ通知",
			description: "サービス開始時にLINEで一斉通知。高い開封率で届く。",
		},
	];

	return (
		<section id="how-it-works" className="py-20 px-4 bg-gray-50">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
					使い方
				</h2>
				<p className="text-gray-600 text-center mb-12">
					4ステップで今日からウェイティングリストを開始
				</p>
				<div className="space-y-8">
					{steps.map((item, index) => (
						<div key={item.step} className="flex gap-6 items-start">
							<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
								{item.step}
							</div>
							<div className="pt-2">
								<h3 className="text-xl font-bold text-gray-900 mb-1">
									{item.title}
								</h3>
								<p className="text-gray-600">{item.description}</p>
							</div>
							{index < steps.length - 1 && (
								<div className="hidden md:block absolute left-6 mt-12 w-0.5 h-8 bg-green-200" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Pricing() {
	return (
		<section id="pricing" className="py-20 px-4 bg-white">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
					料金
				</h2>
				<p className="text-gray-600 text-center mb-12">
					シンプルな従量課金。使った分だけ。
				</p>

				<div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
					<div className="text-green-100 mb-2">完全従量課金</div>
					<div className="text-5xl font-bold mb-2">
						LINE送信料の<span className="text-6xl">10%</span>
					</div>
					<div className="text-green-100 mb-8">初期費用・月額費用なし</div>

					<div className="bg-white/10 rounded-2xl p-6 mb-8">
						<div className="text-left space-y-3">
							<div className="flex justify-between">
								<span>初期費用</span>
								<span className="font-bold">¥0</span>
							</div>
							<div className="flex justify-between">
								<span>月額基本料</span>
								<span className="font-bold">¥0</span>
							</div>
							<div className="flex justify-between">
								<span>登録者数上限</span>
								<span className="font-bold">無制限</span>
							</div>
							<div className="flex justify-between">
								<span>機能制限</span>
								<span className="font-bold">なし（全機能使える）</span>
							</div>
						</div>
					</div>

					<div className="text-sm text-green-100 mb-6">
						例: 月1,000通送信（LINE送信料約3,000円）→ 手数料300円
					</div>

					<a
						href="/dashboard"
						className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors"
					>
						無料で始める
					</a>
				</div>

				<div className="mt-8 text-center text-gray-500 text-sm">
					※ クレジットカード登録は初回メッセージ送信時に必要です
				</div>
			</div>
		</section>
	);
}

function CTA() {
	return (
		<section className="py-20 px-4 bg-gray-50">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					今すぐ始めよう
				</h2>
				<p className="text-gray-600 mb-8">
					登録者が集まるまで完全無料。リスクなしで始められます。
				</p>
				<a
					href="/dashboard"
					className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
				>
					無料で始める
				</a>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="py-12 px-4 bg-gray-900 text-gray-400">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-sm">W</span>
						</div>
						<span className="font-bold text-xl text-white">WaitLine</span>
					</div>
					<div className="flex gap-8 text-sm">
						<a href="/terms" className="hover:text-white">
							利用規約
						</a>
						<a href="/privacy" className="hover:text-white">
							プライバシーポリシー
						</a>
						<a href="/contact" className="hover:text-white">
							お問い合わせ
						</a>
					</div>
				</div>
				<div className="mt-8 text-center text-sm">
					© 2025 WaitLine. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
