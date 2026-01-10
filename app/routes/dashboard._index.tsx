import type { Route } from "./+types/dashboard._index";

export function meta({}: Route.MetaArgs) {
	return [{ title: "ダッシュボード - WaitLine" }];
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

const mockStats = {
	totalSubscribers: 234,
	todaySubscribers: 12,
	weeklySubscribers: 45,
	blockRate: 2.1,
	boardReferrals: 89,
};

function getMockSubscribers() {
	return [
		{
			id: 1,
			name: "田中 太郎",
			registeredAt: formatDateTime(getRelativeDate(0, 14, 23)),
			source: "Twitter",
		},
		{
			id: 2,
			name: "山田 花子",
			registeredAt: formatDateTime(getRelativeDate(0, 12, 15)),
			source: "掲示板",
		},
		{
			id: 3,
			name: "佐藤 一郎",
			registeredAt: formatDateTime(getRelativeDate(1, 18, 42)),
			source: "Instagram",
		},
		{
			id: 4,
			name: "鈴木 美咲",
			registeredAt: formatDateTime(getRelativeDate(1, 10, 30)),
			source: "YouTube",
		},
		{
			id: 5,
			name: "高橋 健二",
			registeredAt: formatDateTime(getRelativeDate(2, 9, 15)),
			source: "直接",
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

export default function DashboardIndex() {
	const mockSubscribers = getMockSubscribers();

	return (
		<>
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-slate-900 tracking-tight">
					ダッシュボード
				</h1>
				<p className="text-slate-500">AI Writing Assistant</p>
			</div>

			<div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-5 md:p-6 mb-6 md:mb-8 text-white shadow-lg">
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
					<div>
						<h2 className="font-semibold text-lg mb-2">
							ウェイティングリストを設置しよう
						</h2>
						<p className="text-emerald-100 text-sm mb-4">
							3つの方法から選んで、コードをコピペするだけ
						</p>
						<div className="flex flex-wrap gap-2">
							<button
								type="button"
								className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium transition-all"
							>
								React
							</button>
							<button
								type="button"
								className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium transition-all"
							>
								iframe
							</button>
							<button
								type="button"
								className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium transition-all"
							>
								独立LP
							</button>
						</div>
					</div>
					<button
						type="button"
						className="bg-white text-emerald-600 px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-50 transition-all shadow-sm w-full md:w-auto shrink-0"
					>
						埋め込みコードを取得
					</button>
				</div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
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

			<div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
				<div className="p-4 md:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
					<h2 className="font-semibold text-slate-900">登録者一覧</h2>
					<button
						type="button"
						className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
					>
						CSVエクスポート
					</button>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full min-w-[500px]">
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
								</tr>
							))}
						</tbody>
					</table>
				</div>
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
		<div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200/80 shadow-sm">
			<div className="text-xs md:text-sm text-slate-500 mb-1 md:mb-2">
				{label}
			</div>
			<div className="flex items-end gap-1 md:gap-2">
				<span className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
					{value}
				</span>
				<span className="text-slate-500 text-sm md:text-base mb-0.5 md:mb-1">
					{suffix}
				</span>
				{trend && (
					<span className="text-emerald-600 text-xs md:text-sm font-medium mb-0.5 md:mb-1">
						{trend}
					</span>
				)}
			</div>
		</div>
	);
}
