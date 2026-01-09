import type { Route } from "./+types/dashboard.automation";

export function meta({}: Route.MetaArgs) {
	return [{ title: "自動化設定 - WaitLine" }];
}

const mockSteps = [
	{
		id: 1,
		name: "ウェルカムメッセージ",
		timing: "即時",
		content: "ご登録ありがとうございます！...",
		active: true,
	},
	{
		id: 2,
		name: "サービス紹介",
		timing: "1日後",
		content: "AI Writing Assistantでできること...",
		active: true,
	},
	{
		id: 3,
		name: "特典案内",
		timing: "3日後",
		content: "先行登録者限定の特典をご紹介...",
		active: true,
	},
	{
		id: 4,
		name: "リマインド",
		timing: "7日後",
		content: "ローンチまであと少し！...",
		active: false,
	},
];

const mockTriggers = [
	{
		id: 1,
		name: "登録者数マイルストーン",
		trigger: "100人達成時",
		content: "100人突破しました！",
		active: true,
	},
	{
		id: 2,
		name: "ローンチカウントダウン",
		trigger: "2025-03-01 10:00",
		content: "いよいよ明日ローンチ！",
		active: false,
	},
];

export default function Automation() {
	return (
		<>
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-gray-900">自動化設定</h1>
				<p className="text-gray-500">ステップ配信・条件トリガーを設定</p>
			</div>

			<div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
				<div className="flex items-center justify-between mb-4">
					<h2 className="font-bold text-gray-900">ステップ配信</h2>
					<button
						type="button"
						className="text-sm text-green-600 hover:underline"
					>
						+ ステップを追加
					</button>
				</div>
				<p className="text-sm text-gray-500 mb-2">
					登録からの経過時間に応じて自動でメッセージを配信
				</p>
				<p className="text-xs text-purple-600 mb-4 flex items-center gap-1">
					<span>✨</span>
					各ステップのメッセージはAIで自動生成できます
				</p>

				<div className="space-y-3">
					{mockSteps.map((step, index) => (
						<div
							key={step.id}
							className={`border rounded-lg p-4 ${step.active ? "border-green-200 bg-green-50/50" : "border-gray-200"}`}
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
										{index + 1}
									</div>
									<div>
										<div className="font-medium text-gray-900">{step.name}</div>
										<div className="text-sm text-gray-500">{step.timing}</div>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<label className="flex items-center gap-2 cursor-pointer">
										<input
											type="checkbox"
											checked={step.active}
											readOnly
											className="w-4 h-4 text-green-500 rounded"
										/>
										<span className="text-sm text-gray-500">有効</span>
									</label>
									<button
										type="button"
										className="text-sm text-gray-500 hover:text-gray-700"
									>
										編集
									</button>
								</div>
							</div>
							<div className="mt-2 ml-12 text-sm text-gray-600 truncate">
								{step.content}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-white rounded-xl border border-gray-200 p-6">
				<div className="flex items-center justify-between mb-4">
					<h2 className="font-bold text-gray-900">条件トリガー配信</h2>
					<button
						type="button"
						className="text-sm text-green-600 hover:underline"
					>
						+ トリガーを追加
					</button>
				</div>
				<p className="text-sm text-gray-500 mb-4">
					特定の条件を満たした時に自動でメッセージを配信
				</p>

				<div className="space-y-3">
					{mockTriggers.map((trigger) => (
						<div
							key={trigger.id}
							className={`border rounded-lg p-4 ${trigger.active ? "border-green-200 bg-green-50/50" : "border-gray-200"}`}
						>
							<div className="flex items-center justify-between">
								<div>
									<div className="font-medium text-gray-900">
										{trigger.name}
									</div>
									<div className="text-sm text-gray-500">
										トリガー: {trigger.trigger}
									</div>
								</div>
								<div className="flex items-center gap-4">
									<label className="flex items-center gap-2 cursor-pointer">
										<input
											type="checkbox"
											checked={trigger.active}
											readOnly
											className="w-4 h-4 text-green-500 rounded"
										/>
										<span className="text-sm text-gray-500">有効</span>
									</label>
									<button
										type="button"
										className="text-sm text-gray-500 hover:text-gray-700"
									>
										編集
									</button>
								</div>
							</div>
							<div className="mt-2 text-sm text-gray-600">
								{trigger.content}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
