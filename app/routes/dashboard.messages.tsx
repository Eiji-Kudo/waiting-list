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
		<>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
				<div>
					<h1 className="text-2xl font-bold text-slate-900 tracking-tight">
						メッセージ配信
					</h1>
					<p className="text-slate-500">登録者へのメッセージを配信</p>
				</div>
				<button
					type="button"
					className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow w-full sm:w-auto"
				>
					新規メッセージ作成
				</button>
			</div>

			<div className="bg-white rounded-2xl border border-slate-200/80 p-4 md:p-6 mb-6 shadow-sm">
				<h2 className="font-semibold text-slate-900 mb-4">新規メッセージ</h2>
				<div className="space-y-4">
					<label className="block">
						<span className="block text-sm font-medium text-slate-700 mb-1.5">
							配信対象
						</span>
						<select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
							<option>全員（234人）</option>
							<option>上位100人</option>
						</select>
					</label>
					<div>
						<div className="flex items-center justify-between mb-1.5">
							<span className="block text-sm font-medium text-slate-700">
								メッセージ内容
							</span>
							<button
								type="button"
								className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 transition-colors"
							>
								<span>✨</span>
								AIで生成
							</button>
						</div>
						<textarea
							className="w-full border border-slate-200 rounded-xl px-4 py-3 h-32 resize-none bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							placeholder="メッセージを入力...または「AIで生成」をクリック"
						/>
						<p className="text-xs text-slate-500 mt-1.5">
							サービス情報を元に、AIが販促メッセージを自動生成します
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
						<button
							type="button"
							className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
						>
							今すぐ送信
						</button>
						<button
							type="button"
							className="border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-xl font-medium text-sm transition-colors"
						>
							配信予約
						</button>
					</div>
				</div>
			</div>

			<div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
				<div className="p-4 md:p-5 border-b border-slate-100">
					<h2 className="font-semibold text-slate-900">配信履歴</h2>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full min-w-[600px]">
						<thead className="bg-slate-50/80">
							<tr>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									内容
								</th>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									配信日時
								</th>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									配信数
								</th>
								<th className="px-5 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
									状態
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-100">
							{mockMessages.map((message) => (
								<tr
									key={message.id}
									className="hover:bg-slate-50/50 transition-colors"
								>
									<td className="px-5 py-4 text-sm text-slate-900 max-w-md truncate">
										{message.content}
									</td>
									<td className="px-5 py-4 text-sm text-slate-500 whitespace-nowrap">
										{message.status === "scheduled"
											? message.scheduledAt
											: message.sentAt}
									</td>
									<td className="px-5 py-4 text-sm text-slate-500 whitespace-nowrap">
										{message.recipients}人
									</td>
									<td className="px-5 py-4 text-sm">
										{message.status === "sent" ? (
											<span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700">
												配信済み
											</span>
										) : (
											<span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 text-amber-700">
												予約中
											</span>
										)}
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
