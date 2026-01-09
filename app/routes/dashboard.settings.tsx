import type { Route } from "./+types/dashboard.settings";

export function meta({}: Route.MetaArgs) {
	return [{ title: "設定 - WaitLine" }];
}

export default function Settings() {
	return (
		<>
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-slate-900 tracking-tight">
					設定
				</h1>
				<p className="text-slate-500">サービスの基本設定</p>
			</div>

			<div className="space-y-6">
				<div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
					<h2 className="font-semibold text-slate-900 mb-4">
						サービス基本情報
					</h2>
					<div className="space-y-4">
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								サービス名
							</span>
							<input
								type="text"
								defaultValue="AI Writing Assistant"
								className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								短い説明
							</span>
							<input
								type="text"
								defaultValue="AIがあなたの文章作成をサポート"
								className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								詳細説明
							</span>
							<textarea
								defaultValue="AI Writing Assistantは、最新のAI技術を活用して、あなたの文章作成を強力にサポートします。"
								className="w-full border border-slate-200 rounded-xl px-4 py-3 h-24 resize-none bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								カテゴリ
							</span>
							<select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
								<option>テクノロジー / AI</option>
								<option>EC / マーケットプレイス</option>
								<option>フィンテック</option>
								<option>ヘルスケア</option>
								<option>エンタメ / ゲーム</option>
								<option>教育</option>
								<option>ライフスタイル</option>
							</select>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								ローンチ予定日
							</span>
							<input
								type="date"
								defaultValue="2025-03-01"
								className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							/>
						</label>
					</div>
				</div>

				<div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
					<h2 className="font-semibold text-slate-900 mb-4">
						LINE公式アカウント連携
					</h2>
					<div className="space-y-4">
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								チャネルID
							</span>
							<input
								type="text"
								placeholder="1234567890"
								className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								チャネルシークレット
							</span>
							<input
								type="password"
								placeholder="••••••••••••••••"
								className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-slate-700 mb-1.5">
								アクセストークン
							</span>
							<input
								type="password"
								placeholder="••••••••••••••••"
								className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
							/>
						</label>
						<div className="text-sm text-slate-500">
							Webhook URL:{" "}
							<code className="bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700">
								https://waitline.app/api/webhook/xxx
							</code>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
					<h2 className="font-semibold text-slate-900 mb-4">公開設定</h2>
					<div className="space-y-4">
						<label className="flex items-center gap-3 cursor-pointer">
							<input
								type="checkbox"
								defaultChecked
								className="w-4 h-4 text-emerald-500 rounded"
							/>
							<div>
								<div className="font-medium text-slate-900">サービスを公開</div>
								<div className="text-sm text-slate-500">
									公開するとユーザーがLINE登録できるようになります
								</div>
							</div>
						</label>
						<label className="flex items-center gap-3 cursor-pointer">
							<input
								type="checkbox"
								defaultChecked
								className="w-4 h-4 text-emerald-500 rounded"
							/>
							<div>
								<div className="font-medium text-slate-900">掲示板に掲載</div>
								<div className="text-sm text-slate-500">
									WaitLineの掲示板にサービスが表示されます
								</div>
							</div>
						</label>
					</div>
				</div>

				<div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
					<h2 className="font-semibold text-slate-900 mb-4">
						ウェルカムメッセージ
					</h2>
					<div>
						<textarea
							defaultValue="ご登録ありがとうございます！AI Writing Assistantの最新情報をお届けします。ローンチまでお楽しみに！"
							className="w-full border border-slate-200 rounded-xl px-4 py-3 h-24 resize-none bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
						/>
						<p className="text-sm text-slate-500 mt-2">
							LINE友だち追加時に自動送信されるメッセージ
						</p>
					</div>
				</div>

				<div className="flex justify-end">
					<button
						type="button"
						className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
					>
						保存
					</button>
				</div>
			</div>
		</>
	);
}
