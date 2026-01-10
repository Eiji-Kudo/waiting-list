import type { Route } from "./+types/dashboard.automation";

export function meta({}: Route.MetaArgs) {
	return [{ title: "自動化設定 - WaitLine" }];
}

function formatDate(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function addDays(date: Date, days: number): Date {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function getMockData() {
	const now = new Date();
	const launchDate = addDays(now, 60);
	launchDate.setHours(10, 0, 0, 0);

	const mockSteps = [
		{
			id: 1,
			name: "ウェルカムメッセージ",
			timing: "即時",
			content:
				"WaitLineへのご登録ありがとうございます！LINEでウェイティングリストを簡単に作成・管理できるサービスです。ローンチまでお楽しみに！",
			active: true,
		},
		{
			id: 2,
			name: "サービス紹介",
			timing: "1日後",
			content:
				"WaitLineでできることをご紹介します。LINE公式アカウントと連携して、先行登録者の管理、自動メッセージ配信、掲示板での露出など、ローンチ前のマーケティングを強力にサポートします。",
			active: true,
		},
		{
			id: 3,
			name: "特典案内",
			timing: "3日後",
			content:
				"先行登録者限定の特典をご紹介します！正式リリース時に、Proプランを初年度30%オフでご利用いただけます。この機会をお見逃しなく。",
			active: true,
		},
		{
			id: 4,
			name: "リマインド",
			timing: "7日後",
			content:
				"WaitLineのローンチまであと少し！新機能の開発も順調に進んでいます。リリース日が決まり次第、すぐにお知らせしますね。",
			active: false,
		},
	];

	const mockTriggers = [
		{
			id: 1,
			name: "登録者数マイルストーン",
			trigger: "100人達成時",
			content:
				"🎉 100人突破しました！皆さまのご登録に感謝いたします。引き続きWaitLineの開発を進めてまいります。",
			active: true,
		},
		{
			id: 2,
			name: "ローンチカウントダウン",
			trigger: formatDate(launchDate),
			content:
				"🚀 いよいよ明日ローンチ！長らくお待たせしました。明日10時より正式サービス開始です。先行登録者特典をお忘れなく！",
			active: false,
		},
	];

	return { mockSteps, mockTriggers };
}

export default function Automation() {
	const { mockSteps, mockTriggers } = getMockData();

	return (
		<>
			<div className="mb-6 md:mb-8">
				<h1 className="text-2xl font-bold text-slate-900 tracking-tight">
					自動化設定
				</h1>
				<p className="text-slate-500">ステップ配信・条件トリガーを設定</p>
			</div>

			<div className="bg-white rounded-2xl border border-slate-200/80 p-4 md:p-6 mb-6 shadow-sm">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
					<div>
						<h2 className="font-semibold text-slate-900 text-lg">
							ステップ配信
						</h2>
						<p className="text-sm text-slate-500 mt-1">
							登録からの経過時間に応じて自動でメッセージを配信
						</p>
					</div>
					<button
						type="button"
						className="text-sm bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm w-full sm:w-auto shrink-0"
					>
						+ ステップを追加
					</button>
				</div>
				<div className="bg-purple-50/50 border border-purple-100 rounded-xl px-4 py-3 mb-6">
					<p className="text-sm text-purple-700 flex items-center gap-2">
						<span>✨</span>
						各ステップのメッセージはAIで自動生成できます
					</p>
				</div>

				<div className="space-y-4">
					{mockSteps.map((step, index) => (
						<div
							key={step.id}
							className={`relative border rounded-xl p-5 transition-all hover:shadow-md ${
								step.active
									? "border-slate-200 bg-white shadow-sm"
									: "border-slate-200 bg-slate-50/50"
							}`}
						>
							{step.active && (
								<div className="absolute top-4 right-4">
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
										有効
									</span>
								</div>
							)}
							{!step.active && (
								<div className="absolute top-4 right-4">
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
										無効
									</span>
								</div>
							)}
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm shrink-0">
									{index + 1}
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-3">
										<h3 className="font-medium text-slate-900">{step.name}</h3>
										<span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
											{step.timing}
										</span>
									</div>
									<p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
										{step.content}
									</p>
								</div>
								<button
									type="button"
									className="text-sm text-slate-500 hover:text-slate-700 font-medium transition-colors shrink-0"
								>
									編集
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-white rounded-2xl border border-slate-200/80 p-4 md:p-6 shadow-sm">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
					<div>
						<h2 className="font-semibold text-slate-900 text-lg">
							条件トリガー配信
						</h2>
						<p className="text-sm text-slate-500 mt-1">
							特定の条件を満たした時に自動でメッセージを配信
						</p>
					</div>
					<button
						type="button"
						className="text-sm bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm w-full sm:w-auto shrink-0"
					>
						+ トリガーを追加
					</button>
				</div>

				<div className="space-y-4">
					{mockTriggers.map((trigger) => (
						<div
							key={trigger.id}
							className={`relative border rounded-xl p-5 transition-all hover:shadow-md ${
								trigger.active
									? "border-slate-200 bg-white shadow-sm"
									: "border-slate-200 bg-slate-50/50"
							}`}
						>
							{trigger.active && (
								<div className="absolute top-4 right-4">
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
										有効
									</span>
								</div>
							)}
							{!trigger.active && (
								<div className="absolute top-4 right-4">
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
										無効
									</span>
								</div>
							)}
							<div className="flex items-start justify-between gap-4">
								<div className="flex-1 min-w-0">
									<h3 className="font-medium text-slate-900">{trigger.name}</h3>
									<p className="mt-1 text-sm text-slate-500">
										<span className="text-slate-400">トリガー:</span>{" "}
										{trigger.trigger}
									</p>
									<p className="mt-2 text-sm text-slate-600">
										{trigger.content}
									</p>
								</div>
								<button
									type="button"
									className="text-sm text-slate-500 hover:text-slate-700 font-medium transition-colors shrink-0"
								>
									編集
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
