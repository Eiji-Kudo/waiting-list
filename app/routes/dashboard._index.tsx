import type { Route } from "./+types/dashboard._index";

export function meta({}: Route.MetaArgs) {
	return [{ title: "ダッシュボード - WaitLine" }];
}

const mockStats = {
	totalSubscribers: 234,
	todaySubscribers: 12,
	weeklySubscribers: 45,
	blockRate: 2.1,
	boardReferrals: 89,
};

const mockSubscribers = [
	{
		id: 1,
		name: "田中 太郎",
		registeredAt: "2025-01-09 14:23",
		source: "掲示板",
	},
	{
		id: 2,
		name: "山田 花子",
		registeredAt: "2025-01-09 12:15",
		source: "掲示板",
	},
	{
		id: 3,
		name: "佐藤 一郎",
		registeredAt: "2025-01-08 18:42",
		source: "直接",
	},
	{
		id: 4,
		name: "鈴木 美咲",
		registeredAt: "2025-01-08 10:30",
		source: "掲示板",
	},
	{
		id: 5,
		name: "高橋 健二",
		registeredAt: "2025-01-07 09:15",
		source: "直接",
	},
];

export default function DashboardIndex() {
	return (
		<>
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
								名前
							</th>
							<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
								登録日時
							</th>
							<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
								流入元
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{mockSubscribers.map((subscriber) => (
							<tr key={subscriber.id} className="hover:bg-gray-50">
								<td className="px-4 py-3 text-sm text-gray-900">
									{subscriber.name}
								</td>
								<td className="px-4 py-3 text-sm text-gray-500">
									{subscriber.registeredAt}
								</td>
								<td className="px-4 py-3 text-sm">
									<span
										className={`px-2 py-1 rounded text-xs ${
											subscriber.source === "掲示板"
												? "bg-blue-100 text-blue-700"
												: "bg-gray-100 text-gray-700"
										}`}
									>
										{subscriber.source}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
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
				{trend && <span className="text-green-500 text-sm mb-1">{trend}</span>}
			</div>
		</div>
	);
}
