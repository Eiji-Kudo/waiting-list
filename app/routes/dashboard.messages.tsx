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
			<div className="flex items-center justify-between mb-8">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">メッセージ配信</h1>
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
					<div>
						<div className="flex items-center justify-between mb-1">
							<span className="block text-sm font-medium text-gray-700">
								メッセージ内容
							</span>
							<button
								type="button"
								className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
							>
								<span>✨</span>
								AIで生成
							</button>
						</div>
						<textarea
							className="w-full border border-gray-200 rounded-lg px-4 py-3 h-32 resize-none"
							placeholder="メッセージを入力...または「AIで生成」をクリック"
						/>
						<p className="text-xs text-gray-500 mt-1">
							サービス情報を元に、AIが販促メッセージを自動生成します
						</p>
					</div>
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
		</>
	);
}
