import type { Route } from "./+types/dashboard.automation";

export function meta({}: Route.MetaArgs) {
	return [{ title: "自動化設定 - WaitLine" }];
}

function UserIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
			/>
		</svg>
	);
}

function LightBulbIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
			/>
		</svg>
	);
}

function CurrencyIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}

function TargetIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 21a9 9 0 100-18 9 9 0 000 18z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 15a3 3 0 100-6 3 3 0 000 6z"
			/>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
		</svg>
	);
}

function RocketIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
			/>
		</svg>
	);
}

function LinkIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
			/>
		</svg>
	);
}

function ClipboardIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
			/>
		</svg>
	);
}

function BoltIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
			/>
		</svg>
	);
}

function EnvelopeIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
			/>
		</svg>
	);
}

function SparklesIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={1.5}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
			/>
		</svg>
	);
}

function ChevronRightIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M8.25 4.5l7.5 7.5-7.5 7.5"
			/>
		</svg>
	);
}

const surveyIconMap: Record<
	string,
	React.ComponentType<{ className?: string }>
> = {
	user: UserIcon,
	lightbulb: LightBulbIcon,
	currency: CurrencyIcon,
	target: TargetIcon,
};

const triggerIconMap: Record<
	string,
	React.ComponentType<{ className?: string }>
> = {
	target: TargetIcon,
	rocket: RocketIcon,
	link: LinkIcon,
};

function getMockData() {
	const mockTriggers = [
		{
			id: 1,
			icon: "target",
			name: "100人達成",
			trigger: "登録者100人",
			active: true,
		},
		{
			id: 2,
			icon: "rocket",
			name: "ローンチ前日",
			trigger: "2025/03/14",
			active: true,
		},
		{
			id: 3,
			icon: "link",
			name: "紹介発生時",
			trigger: "友達紹介時",
			active: false,
		},
	];

	const mockSteps = [
		{ id: 1, name: "ウェルカム", timing: "即時", active: true },
		{ id: 2, name: "サービス紹介", timing: "1日後", active: true },
		{ id: 3, name: "特典案内", timing: "3日後", active: true },
		{ id: 4, name: "リマインド", timing: "7日後", active: false },
	];

	const mockSurveys = [
		{
			id: 1,
			icon: "user",
			name: "属性ヒアリング",
			questions: 4,
			responses: 128,
			active: true,
		},
		{
			id: 2,
			icon: "lightbulb",
			name: "欲しい機能アンケート",
			questions: 3,
			responses: 89,
			active: true,
		},
		{
			id: 3,
			icon: "currency",
			name: "価格感アンケート",
			questions: 2,
			responses: 45,
			active: false,
		},
	];

	const surveyTemplates = [
		{ icon: "user", name: "属性", desc: "職種・業界・規模" },
		{ icon: "lightbulb", name: "機能要望", desc: "欲しい機能を収集" },
		{ icon: "currency", name: "価格調査", desc: "許容価格帯を調査" },
		{ icon: "target", name: "課題", desc: "現状の課題を収集" },
	];

	return { mockTriggers, mockSteps, mockSurveys, surveyTemplates };
}

export default function Automation() {
	const { mockTriggers, mockSteps, mockSurveys, surveyTemplates } =
		getMockData();

	return (
		<>
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-slate-900 tracking-tight">
					自動化設定
				</h1>
				<p className="text-slate-500 mt-1">
					メッセージ配信・ヒアリングを自動化
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
				<section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
					<div className="px-5 py-4 border-b border-slate-100">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
									<ClipboardIcon className="w-[18px] h-[18px] text-white" />
								</div>
								<div>
									<h2 className="font-semibold text-slate-900 text-[15px]">
										ヒアリング
									</h2>
									<p className="text-xs text-slate-500">属性・要望を収集</p>
								</div>
							</div>
							<button
								type="button"
								className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
							>
								+ 追加
							</button>
						</div>
					</div>

					<div className="p-4">
						<div className="grid grid-cols-4 gap-2 mb-4">
							{surveyTemplates.map((t) => {
								const IconComponent = surveyIconMap[t.icon];
								return (
									<button
										key={t.name}
										type="button"
										className="group relative bg-slate-50/80 hover:bg-slate-100 rounded-lg p-3 text-center transition-all"
									>
										<div className="w-8 h-8 mx-auto mb-1.5 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-slate-700 group-hover:border-slate-300 transition-all">
											{IconComponent && <IconComponent className="w-4 h-4" />}
										</div>
										<div className="text-[11px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
											{t.name}
										</div>
									</button>
								);
							})}
						</div>

						<button
							type="button"
							className="w-full mb-4 px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-100 flex items-center gap-2.5 transition-all group"
						>
							<SparklesIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
							<span className="text-xs font-medium text-slate-600">
								AIで質問項目を自動生成
							</span>
							<ChevronRightIcon className="w-3.5 h-3.5 text-slate-400 ml-auto" />
						</button>

						<div className="space-y-1">
							{mockSurveys.map((survey) => {
								const IconComponent = surveyIconMap[survey.icon];
								return (
									<div
										key={survey.id}
										className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer ${
											survey.active ? "hover:bg-slate-50" : "opacity-50"
										}`}
									>
										<div
											className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
												survey.active
													? "bg-slate-100 text-slate-600"
													: "bg-slate-100 text-slate-400"
											}`}
										>
											{IconComponent && <IconComponent className="w-4 h-4" />}
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2">
												<span className="font-medium text-slate-900 text-sm">
													{survey.name}
												</span>
												{survey.active && (
													<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-medium">
														有効
													</span>
												)}
											</div>
											<div className="text-[11px] text-slate-400 mt-0.5">
												{survey.questions}問 · {survey.responses}件回答
											</div>
										</div>
										<ChevronRightIcon className="w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors" />
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
					<div className="px-5 py-4 border-b border-slate-100">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
									<BoltIcon className="w-[18px] h-[18px] text-white" />
								</div>
								<div>
									<h2 className="font-semibold text-slate-900 text-[15px]">
										トリガー配信
									</h2>
									<p className="text-xs text-slate-500">
										条件を満たした時に配信
									</p>
								</div>
							</div>
							<button
								type="button"
								className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
							>
								+ 追加
							</button>
						</div>
					</div>

					<div className="p-4">
						<div className="space-y-1">
							{mockTriggers.map((trigger) => {
								const IconComponent = triggerIconMap[trigger.icon];
								return (
									<div
										key={trigger.id}
										className={`group flex items-center gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer ${
											trigger.active ? "hover:bg-slate-50" : "opacity-50"
										}`}
									>
										<div
											className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
												trigger.active
													? "bg-slate-100 text-slate-600"
													: "bg-slate-100 text-slate-400"
											}`}
										>
											{IconComponent && (
												<IconComponent className="w-[18px] h-[18px]" />
											)}
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2">
												<span className="font-medium text-slate-900 text-sm">
													{trigger.name}
												</span>
												{trigger.active && (
													<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-medium">
														有効
													</span>
												)}
											</div>
											<div className="text-[11px] text-slate-400 mt-0.5">
												{trigger.trigger}
											</div>
										</div>
										<ChevronRightIcon className="w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors" />
									</div>
								);
							})}
						</div>

						<button
							type="button"
							className="w-full mt-3 py-3 rounded-lg border border-dashed border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300 text-xs font-medium transition-all"
						>
							+ 新しいトリガーを追加
						</button>
					</div>
				</section>
			</div>

			<section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
				<div className="px-5 py-4 border-b border-slate-100">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
								<EnvelopeIcon className="w-[18px] h-[18px] text-white" />
							</div>
							<div>
								<h2 className="font-semibold text-slate-900 text-[15px]">
									ステップ配信
								</h2>
								<p className="text-xs text-slate-500">
									登録からの経過時間に応じて配信
								</p>
							</div>
						</div>
						<button
							type="button"
							className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
						>
							+ 追加
						</button>
					</div>
				</div>

				<div className="p-4">
					<button
						type="button"
						className="w-full mb-4 px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-100 flex items-center gap-2.5 transition-all group"
					>
						<SparklesIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
						<span className="text-xs font-medium text-slate-600">
							AIでステップメッセージを自動生成
						</span>
						<ChevronRightIcon className="w-3.5 h-3.5 text-slate-400 ml-auto" />
					</button>

					<div className="flex items-center gap-1 overflow-x-auto pb-2">
						{mockSteps.map((step, index) => (
							<div key={step.id} className="flex items-center gap-1 shrink-0">
								<div
									className={`flex items-center gap-2.5 pl-2.5 pr-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
										step.active
											? "bg-slate-50 hover:bg-slate-100"
											: "bg-slate-50/50 opacity-50"
									}`}
								>
									<div
										className={`w-7 h-7 rounded-md flex items-center justify-center font-semibold text-xs shrink-0 ${
											step.active
												? "bg-slate-900 text-white"
												: "bg-slate-200 text-slate-500"
										}`}
									>
										{index + 1}
									</div>
									<div>
										<div className="font-medium text-slate-900 text-[13px] whitespace-nowrap">
											{step.name}
										</div>
										<div className="text-[10px] text-slate-400">
											{step.timing}
										</div>
									</div>
								</div>
								{index < mockSteps.length - 1 && (
									<div className="w-3 flex items-center justify-center">
										<div className="w-full h-px bg-slate-200" />
									</div>
								)}
							</div>
						))}
						<button
							type="button"
							className="w-9 h-9 ml-1 rounded-lg border border-dashed border-slate-200 text-slate-400 hover:text-slate-500 hover:border-slate-300 flex items-center justify-center transition-all shrink-0"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
