import type { Route } from "./+types/dashboard.settings";

export function meta({}: Route.MetaArgs) {
	return [{ title: "設定 - WaitLine" }];
}

export default function Settings() {
	return (
		<div className="min-h-screen bg-gray-100">
			<DashboardHeader />
			<div className="flex">
				<Sidebar active="settings" />
				<main className="flex-1 p-8">
					<div className="mb-8">
						<h1 className="text-2xl font-bold text-gray-900">設定</h1>
						<p className="text-gray-500">サービスの基本設定</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h2 className="font-bold text-gray-900 mb-4">サービス基本情報</h2>
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										サービス名
									</label>
									<input
										type="text"
										defaultValue="AI Writing Assistant"
										className="w-full border border-gray-200 rounded-lg px-4 py-2"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										短い説明
									</label>
									<input
										type="text"
										defaultValue="AIがあなたの文章作成をサポート"
										className="w-full border border-gray-200 rounded-lg px-4 py-2"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										詳細説明
									</label>
									<textarea
										defaultValue="AI Writing Assistantは、最新のAI技術を活用して、あなたの文章作成を強力にサポートします。"
										className="w-full border border-gray-200 rounded-lg px-4 py-3 h-24 resize-none"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										カテゴリ
									</label>
									<select className="w-full border border-gray-200 rounded-lg px-4 py-2">
										<option>テクノロジー / AI</option>
										<option>EC / マーケットプレイス</option>
										<option>フィンテック</option>
										<option>ヘルスケア</option>
										<option>エンタメ / ゲーム</option>
										<option>教育</option>
										<option>ライフスタイル</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										ローンチ予定日
									</label>
									<input
										type="date"
										defaultValue="2025-03-01"
										className="w-full border border-gray-200 rounded-lg px-4 py-2"
									/>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h2 className="font-bold text-gray-900 mb-4">LINE公式アカウント連携</h2>
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										チャネルID
									</label>
									<input
										type="text"
										placeholder="1234567890"
										className="w-full border border-gray-200 rounded-lg px-4 py-2"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										チャネルシークレット
									</label>
									<input
										type="password"
										placeholder="••••••••••••••••"
										className="w-full border border-gray-200 rounded-lg px-4 py-2"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										アクセストークン
									</label>
									<input
										type="password"
										placeholder="••••••••••••••••"
										className="w-full border border-gray-200 rounded-lg px-4 py-2"
									/>
								</div>
								<div className="text-sm text-gray-500">
									Webhook URL: <code className="bg-gray-100 px-2 py-1 rounded">https://waitline.app/api/webhook/xxx</code>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h2 className="font-bold text-gray-900 mb-4">公開設定</h2>
							<div className="space-y-4">
								<label className="flex items-center gap-3 cursor-pointer">
									<input
										type="checkbox"
										defaultChecked
										className="w-4 h-4 text-green-500 rounded"
									/>
									<div>
										<div className="font-medium text-gray-900">サービスを公開</div>
										<div className="text-sm text-gray-500">公開するとユーザーがLINE登録できるようになります</div>
									</div>
								</label>
								<label className="flex items-center gap-3 cursor-pointer">
									<input
										type="checkbox"
										defaultChecked
										className="w-4 h-4 text-green-500 rounded"
									/>
									<div>
										<div className="font-medium text-gray-900">掲示板に掲載</div>
										<div className="text-sm text-gray-500">WaitLineの掲示板にサービスが表示されます</div>
									</div>
								</label>
							</div>
						</div>

						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h2 className="font-bold text-gray-900 mb-4">ウェルカムメッセージ</h2>
							<div>
								<textarea
									defaultValue="ご登録ありがとうございます！AI Writing Assistantの最新情報をお届けします。ローンチまでお楽しみに！"
									className="w-full border border-gray-200 rounded-lg px-4 py-3 h-24 resize-none"
								/>
								<p className="text-sm text-gray-500 mt-2">
									LINE友だち追加時に自動送信されるメッセージ
								</p>
							</div>
						</div>

						<div className="flex justify-end">
							<button
								type="button"
								className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
							>
								保存
							</button>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

function DashboardHeader() {
	return (
		<header className="bg-white border-b border-gray-200">
			<div className="px-6 py-4 flex items-center justify-between">
				<a href="/" className="flex items-center gap-2">
					<div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-sm">W</span>
					</div>
					<span className="font-bold text-xl text-gray-900">WaitLine</span>
				</a>
				<div className="flex items-center gap-4">
					<span className="text-sm text-gray-500">demo@example.com</span>
					<button type="button" className="text-sm text-gray-600 hover:text-gray-900">ログアウト</button>
				</div>
			</div>
		</header>
	);
}

function Sidebar({ active }: { active: string }) {
	const menuItems = [
		{ id: "dashboard", label: "ダッシュボード", href: "/dashboard" },
		{ id: "subscribers", label: "登録者一覧", href: "/dashboard/subscribers" },
		{ id: "messages", label: "メッセージ配信", href: "/dashboard/messages" },
		{ id: "automation", label: "自動化設定", href: "/dashboard/automation" },
		{ id: "settings", label: "設定", href: "/dashboard/settings" },
	];

	return (
		<aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)]">
			<div className="p-4">
				<select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
					<option>AI Writing Assistant</option>
					<option>+ 新しいサービスを作成</option>
				</select>
			</div>
			<nav className="px-2">
				{menuItems.map((item) => (
					<a
						key={item.id}
						href={item.href}
						className={`block px-4 py-2 rounded-lg text-sm mb-1 ${
							item.id === active
								? "bg-green-100 text-green-700 font-medium"
								: "text-gray-600 hover:bg-gray-100"
						}`}
					>
						{item.label}
					</a>
				))}
			</nav>
		</aside>
	);
}
