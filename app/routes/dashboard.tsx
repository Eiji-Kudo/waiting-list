import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "ダッシュボード - WaitLine" },
	];
}

const mockStats = {
	totalSubscribers: 234,
	todaySubscribers: 12,
	weeklySubscribers: 45,
	blockRate: 2.1,
	boardReferrals: 89,
};

const mockSubscribers = [
	{ id: 1, name: "田中 太郎", registeredAt: "2025-01-09 14:23", position: 1, referralCount: 5 },
	{ id: 2, name: "山田 花子", registeredAt: "2025-01-09 12:15", position: 2, referralCount: 3 },
	{ id: 3, name: "佐藤 一郎", registeredAt: "2025-01-08 18:42", position: 3, referralCount: 2 },
	{ id: 4, name: "鈴木 美咲", registeredAt: "2025-01-08 10:30", position: 4, referralCount: 1 },
	{ id: 5, name: "高橋 健二", registeredAt: "2025-01-07 09:15", position: 5, referralCount: 0 },
];

export default function Dashboard() {
	return (
		<div className="min-h-screen bg-gray-100">
			<DashboardHeader />
			<div className="flex">
				<Sidebar />
				<main className="flex-1 p-8">
					<div className="mb-8">
						<h1 className="text-2xl font-bold text-gray-900">ダッシュボード</h1>
						<p className="text-gray-500">AI Writing Assistant</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						<StatCard
							label="総登録者数"
							value={mockStats.totalSubscribers}
							suffix="人"
						/>
						<StatCard
							label="本日の登録"
							value={mockStats.todaySubscribers}
							suffix="人"
							trend="+5"
						/>
						<StatCard
							label="今週の登録"
							value={mockStats.weeklySubscribers}
							suffix="人"
						/>
						<StatCard
							label="掲示板からの流入"
							value={mockStats.boardReferrals}
							suffix="人"
						/>
					</div>

					<div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
						<div className="p-4 border-b border-gray-200 flex items-center justify-between">
							<h2 className="font-bold text-gray-900">登録者一覧</h2>
							<button
								type="button"
								className="text-sm text-green-600 hover:underline"
							>
								CSVエクスポート
							</button>
						</div>
						<table className="w-full">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										順位
									</th>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										名前
									</th>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										登録日時
									</th>
									<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
										紹介数
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{mockSubscribers.map((subscriber) => (
									<tr key={subscriber.id} className="hover:bg-gray-50">
										<td className="px-4 py-3 text-sm text-gray-900">
											#{subscriber.position}
										</td>
										<td className="px-4 py-3 text-sm text-gray-900">
											{subscriber.name}
										</td>
										<td className="px-4 py-3 text-sm text-gray-500">
											{subscriber.registeredAt}
										</td>
										<td className="px-4 py-3 text-sm text-gray-500">
											{subscriber.referralCount}人
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

function StatCard({
	label,
	value,
	suffix,
	trend,
}: {
	label: string;
	value: number;
	suffix: string;
	trend?: string;
}) {
	return (
		<div className="bg-white rounded-xl p-6 border border-gray-200">
			<div className="text-sm text-gray-500 mb-1">{label}</div>
			<div className="flex items-end gap-2">
				<span className="text-3xl font-bold text-gray-900">{value}</span>
				<span className="text-gray-500 mb-1">{suffix}</span>
				{trend && (
					<span className="text-green-500 text-sm mb-1">{trend}</span>
				)}
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

function Sidebar() {
	const menuItems = [
		{ label: "ダッシュボード", href: "/dashboard", active: true },
		{ label: "登録者一覧", href: "/dashboard/subscribers", active: false },
		{ label: "メッセージ配信", href: "/dashboard/messages", active: false },
		{ label: "自動化設定", href: "/dashboard/automation", active: false },
		{ label: "設定", href: "/dashboard/settings", active: false },
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
						key={item.label}
						href={item.href}
						className={`block px-4 py-2 rounded-lg text-sm mb-1 ${
							item.active
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
