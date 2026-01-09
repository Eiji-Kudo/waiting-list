import type { Route } from "./+types/dashboard.subscribers";

export function meta({}: Route.MetaArgs) {
	return [{ title: "登録者一覧 - WaitLine" }];
}

const mockSubscribers = [
	{
		id: 1,
		name: "田中 太郎",
		registeredAt: "2025-01-09 14:23",
		source: "Twitter",
		blocked: false,
	},
	{
		id: 2,
		name: "山田 花子",
		registeredAt: "2025-01-09 12:15",
		source: "掲示板",
		blocked: false,
	},
	{
		id: 3,
		name: "佐藤 一郎",
		registeredAt: "2025-01-08 18:42",
		source: "Instagram",
		blocked: false,
	},
	{
		id: 4,
		name: "鈴木 美咲",
		registeredAt: "2025-01-08 10:30",
		source: "YouTube",
		blocked: false,
	},
	{
		id: 5,
		name: "高橋 健二",
		registeredAt: "2025-01-07 09:15",
		source: "直接",
		blocked: false,
	},
	{
		id: 6,
		name: "伊藤 裕子",
		registeredAt: "2025-01-06 16:30",
		source: "Twitter",
		blocked: true,
	},
	{
		id: 7,
		name: "渡辺 大輔",
		registeredAt: "2025-01-05 11:20",
		source: "掲示板",
		blocked: false,
	},
	{
		id: 8,
		name: "小林 さくら",
		registeredAt: "2025-01-04 09:45",
		source: "Instagram",
		blocked: false,
	},
];

const sourceStyles: Record<string, string> = {
	掲示板: "bg-blue-100 text-blue-700",
	Twitter: "bg-sky-100 text-sky-700",
	Instagram: "bg-pink-100 text-pink-700",
	YouTube: "bg-red-100 text-red-700",
	直接: "bg-gray-100 text-gray-700",
};

export default function Subscribers() {
	return (
		<>
			<div className="flex items-center justify-between mb-8">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">登録者一覧</h1>
					<p className="text-gray-500">全 {mockSubscribers.length} 人</p>
				</div>
				<button
					type="button"
					className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
				>
					CSVエクスポート
				</button>
			</div>

			<div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
				<div className="p-4 border-b border-gray-200 flex items-center gap-4">
					<input
						type="text"
						placeholder="名前で検索..."
						className="border border-gray-200 rounded-lg px-4 py-2 text-sm flex-1 max-w-xs"
					/>
					<select className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
						<option>すべて</option>
						<option>アクティブ</option>
						<option>ブロック済み</option>
					</select>
					<select className="border border-gray-200 rounded-lg px-4 py-2 text-sm">
						<option>流入元: すべて</option>
						<option>掲示板</option>
						<option>Twitter</option>
						<option>Instagram</option>
						<option>YouTube</option>
						<option>直接</option>
					</select>
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
							<th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
								状態
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
										className={`px-2 py-1 rounded text-xs ${sourceStyles[subscriber.source] || "bg-gray-100 text-gray-700"}`}
									>
										{subscriber.source}
									</span>
								</td>
								<td className="px-4 py-3 text-sm">
									{subscriber.blocked ? (
										<span className="px-2 py-1 rounded text-xs bg-red-100 text-red-700">
											ブロック
										</span>
									) : (
										<span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">
											アクティブ
										</span>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex items-center justify-between text-sm text-gray-500">
				<span>1-8 / 8件</span>
				<div className="flex gap-2">
					<button
						type="button"
						className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50"
						disabled
					>
						前へ
					</button>
					<button
						type="button"
						className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50"
						disabled
					>
						次へ
					</button>
				</div>
			</div>
		</>
	);
}
