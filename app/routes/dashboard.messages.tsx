import type { Route } from "./+types/dashboard.messages";

export function meta({}: Route.MetaArgs) {
	return [{ title: "メッセージ配信 - WaitLine" }];
}

const mockMessages = [
	{
		id: 1,
		content: "サービスローンチまであと1週間！お楽しみに...",
		sentAt: "2025-01-09 10:00",
		recipients: 234,
		status: "sent",
	},
	{
		id: 2,
		content: "新機能のお知らせ：AIアシスタント機能を追加...",
		sentAt: "2025-01-07 14:30",
		recipients: 220,
		status: "sent",
	},
	{
		id: 3,
		content: "【先行登録者限定】特別割引のご案内",
		scheduledAt: "2025-01-15 10:00",
		recipients: 250,
		status: "scheduled",
	},
];

export default function Messages() {
	return (
		<div className="min-h-screen bg-gray-100">
			<DashboardHeader />
			<div className="flex">
				<Sidebar active="messages" />
				<main className="flex-1 p-8">
					<div className="flex items-center justify-between mb-8">
						<div>
							<h1 className="text-2xl font-bold text-gray-900">
								メッセージ配信
							</h1>
							<p className="text-gray-500">登録者へのメッセージを配信</p>
						</div>
						<button
							type="button"
							className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
						>
							新規メッセージ作成
						</button>
					</div>

					<div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
						<h2 className="font-bold text-gray-900 mb-4">新規メッセージ</h2>
						<div className="space-y-4">
							<label className="block">
								<span className="block text-sm font-medium text-gray-700 mb-1">
									配信対象
								</span>
								<select className="w-full border border-gray-200 rounded-lg px-4 py-2">
									<option>全員（234人）</option>
									<option>上位100人</option>
								</select>
							</label>
							<label className="block">
								<span className="block text-sm font-medium text-gray-700 mb-1">
									メッセージ内容
								</span>
								<textarea
									className="w-full border border-gray-200 rounded-lg px-4 py-3 h-32 resize-none"
									placeholder="メッセージを入力..."
								/>
							</label>
							<div className="flex items-center gap-4">
								<button
									type="button"
									className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
								>
									今すぐ送信
								</button>
								<button
									type="button"
									className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
								>
									配信予約
								</button>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
						<div className="p-4 border-b border-gray-200">
							<h2 className="font-bold text-gray-900">配信履歴</h2>
						</div>
						<table className="w-full">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										内容
									</th>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										配信日時
									</th>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										配信数
									</th>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										状態
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{mockMessages.map((message) => (
									<tr key={message.id} className="hover:bg-gray-50">
										<td className="px-4 py-3 text-sm text-gray-900 max-w-md truncate">
											{message.content}
										</td>
										<td className="px-4 py-3 text-sm text-gray-500">
											{message.status === "scheduled"
												? message.scheduledAt
												: message.sentAt}
										</td>
										<td className="px-4 py-3 text-sm text-gray-500">
											{message.recipients}人
										</td>
										<td className="px-4 py-3 text-sm">
											{message.status === "sent" ? (
												<span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">
													配信済み
												</span>
											) : (
												<span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-700">
													予約中
												</span>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
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
					<button
						type="button"
						className="text-sm text-gray-600 hover:text-gray-900"
					>
						ログアウト
					</button>
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
