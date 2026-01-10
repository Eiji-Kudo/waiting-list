import type { Route } from "./+types/dashboard.subscribers";

export function meta({}: Route.MetaArgs) {
	return [{ title: "登録者一覧 - WaitLine" }];
}

function formatDateTime(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function getRelativeDate(
	daysAgo: number,
	hours: number,
	minutes: number,
): Date {
	const date = new Date();
	date.setDate(date.getDate() - daysAgo);
	date.setHours(hours, minutes, 0, 0);
	return date;
}

function getMockSubscribers() {
	return [
		{
			id: 1,
			name: "田中 太郎",
			registeredAt: formatDateTime(getRelativeDate(0, 14, 23)),
			source: "Twitter",
			blocked: false,
		},
		{
			id: 2,
			name: "山田 花子",
			registeredAt: formatDateTime(getRelativeDate(0, 12, 15)),
			source: "掲示板",
			blocked: false,
		},
		{
			id: 3,
			name: "佐藤 一郎",
			registeredAt: formatDateTime(getRelativeDate(1, 18, 42)),
			source: "Instagram",
			blocked: false,
		},
		{
			id: 4,
			name: "鈴木 美咲",
			registeredAt: formatDateTime(getRelativeDate(1, 10, 30)),
			source: "YouTube",
			blocked: false,
		},
		{
			id: 5,
			name: "高橋 健二",
			registeredAt: formatDateTime(getRelativeDate(2, 9, 15)),
			source: "直接",
			blocked: false,
		},
		{
			id: 6,
			name: "伊藤 裕子",
			registeredAt: formatDateTime(getRelativeDate(3, 16, 30)),
			source: "Twitter",
			blocked: true,
		},
		{
			id: 7,
			name: "渡辺 大輔",
			registeredAt: formatDateTime(getRelativeDate(4, 11, 20)),
			source: "掲示板",
			blocked: false,
		},
		{
			id: 8,
			name: "小林 さくら",
			registeredAt: formatDateTime(getRelativeDate(5, 9, 45)),
			source: "Instagram",
			blocked: false,
		},
	];
}

const sourceStyles: Record<string, string> = {
	掲示板: "bg-blue-50 text-blue-700",
	Twitter: "bg-sky-50 text-sky-700",
	Instagram: "bg-pink-50 text-pink-700",
	YouTube: "bg-red-50 text-red-700",
	直接: "bg-slate-100 text-slate-600",
};

export default function Subscribers() {
	const mockSubscribers = getMockSubscribers();

	return (
		<>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
				<div>
					<h1 className="text-2xl font-bold text-slate-900 tracking-tight">
						登録者一覧
					</h1>
					<p className="text-slate-500">全 {mockSubscribers.length} 人</p>
				</div>
				<button
					type="button"
					className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow w-full sm:w-auto"
				>
					CSVエクスポート
				</button>
			</div>

			<div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden mb-6 shadow-sm">
				<div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
					<input
						type="text"
						placeholder="名前で検索..."
						className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm w-full sm:flex-1 sm:max-w-xs bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
					/>
					<div className="flex gap-3">
						<select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-slate-50 text-slate-700 flex-1 sm:flex-none">
							<option>すべて</option>
							<option>アクティブ</option>
							<option>ブロック済み</option>
						</select>
						<select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-slate-50 text-slate-700 flex-1 sm:flex-none">
							<option>流入元: すべて</option>
							<option>掲示板</option>
							<option>Twitter</option>
							<option>Instagram</option>
							<option>YouTube</option>
							<option>直接</option>
						</select>
					</div>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full min-w-[600px]">
						<thead className="bg-slate-50/80">
							<tr>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									名前
								</th>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									登録日時
								</th>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									流入元
								</th>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									状態
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-100">
							{mockSubscribers.map((subscriber) => (
								<tr
									key={subscriber.id}
									className="hover:bg-slate-50/50 transition-colors"
								>
									<td className="px-5 py-4 text-sm text-slate-900">
										{subscriber.name}
									</td>
									<td className="px-5 py-4 text-sm text-slate-500">
										{subscriber.registeredAt}
									</td>
									<td className="px-5 py-4 text-sm">
										<span
											className={`px-2.5 py-1 rounded-lg text-xs font-medium ${sourceStyles[subscriber.source] || "bg-slate-100 text-slate-600"}`}
										>
											{subscriber.source}
										</span>
									</td>
									<td className="px-5 py-4 text-sm">
										{subscriber.blocked ? (
											<span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-red-50 text-red-700">
												ブロック
											</span>
										) : (
											<span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700">
												アクティブ
											</span>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="flex items-center justify-between text-sm text-slate-500">
				<span>1-8 / 8件</span>
				<div className="flex gap-2">
					<button
						type="button"
						className="px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
						disabled
					>
						前へ
					</button>
					<button
						type="button"
						className="px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
						disabled
					>
						次へ
					</button>
				</div>
			</div>
		</>
	);
}
