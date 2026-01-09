import type { Route } from "./+types/dashboard.settings";

export function meta({}: Route.MetaArgs) {
	return [{ title: "設定 - WaitLine" }];
}

export default function Settings() {
	return (
		<>
			<div className="mb-8">
				<h1 className="text-2xl font-bold text-gray-900">設定</h1>
				<p className="text-gray-500">サービスの基本設定</p>
			</div>

			<div className="space-y-6">
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="font-bold text-gray-900 mb-4">サービス基本情報</h2>
					<div className="space-y-4">
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">
								サービス名
							</span>
							<input
								type="text"
								defaultValue="AI Writing Assistant"
								className="w-full border border-gray-200 rounded-lg px-4 py-2"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">
								短い説明
							</span>
							<input
								type="text"
								defaultValue="AIがあなたの文章作成をサポート"
								className="w-full border border-gray-200 rounded-lg px-4 py-2"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">
								詳細説明
							</span>
							<textarea
								defaultValue="AI Writing Assistantは、最新のAI技術を活用して、あなたの文章作成を強力にサポートします。"
								className="w-full border border-gray-200 rounded-lg px-4 py-3 h-24 resize-none"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">
								カテゴリ
							</span>
							<select className="w-full border border-gray-200 rounded-lg px-4 py-2">
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
							<span className="block text-sm font-medium text-gray-700 mb-1">
								ローンチ予定日
							</span>
							<input
								type="date"
								defaultValue="2025-03-01"
								className="w-full border border-gray-200 rounded-lg px-4 py-2"
							/>
						</label>
					</div>
				</div>

				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="font-bold text-gray-900 mb-4">
						LINE公式アカウント連携
					</h2>
					<div className="space-y-4">
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">
								チャネルID
							</span>
							<input
								type="text"
								placeholder="1234567890"
								className="w-full border border-gray-200 rounded-lg px-4 py-2"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">
								チャネルシークレット
							</span>
							<input
								type="password"
								placeholder="••••••••••••••••"
								className="w-full border border-gray-200 rounded-lg px-4 py-2"
							/>
						</label>
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">
								アクセストークン
							</span>
							<input
								type="password"
								placeholder="••••••••••••••••"
								className="w-full border border-gray-200 rounded-lg px-4 py-2"
							/>
						</label>
						<div className="text-sm text-gray-500">
							Webhook URL:{" "}
							<code className="bg-gray-100 px-2 py-1 rounded">
								https://waitline.app/api/webhook/xxx
							</code>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="font-bold text-gray-900 mb-4">公開設定</h2>
					<div className="space-y-4">
						<label className="flex items-center gap-3 cursor-pointer">
							<input
								type="checkbox"
								defaultChecked
								className="w-4 h-4 text-green-500 rounded"
							/>
							<div>
								<div className="font-medium text-gray-900">サービスを公開</div>
								<div className="text-sm text-gray-500">
									公開するとユーザーがLINE登録できるようになります
								</div>
							</div>
						</label>
						<label className="flex items-center gap-3 cursor-pointer">
							<input
								type="checkbox"
								defaultChecked
								className="w-4 h-4 text-green-500 rounded"
							/>
							<div>
								<div className="font-medium text-gray-900">掲示板に掲載</div>
								<div className="text-sm text-gray-500">
									WaitLineの掲示板にサービスが表示されます
								</div>
							</div>
						</label>
					</div>
				</div>

				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="font-bold text-gray-900 mb-4">ウェルカムメッセージ</h2>
					<div>
						<textarea
							defaultValue="ご登録ありがとうございます！AI Writing Assistantの最新情報をお届けします。ローンチまでお楽しみに！"
							className="w-full border border-gray-200 rounded-lg px-4 py-3 h-24 resize-none"
						/>
						<p className="text-sm text-gray-500 mt-2">
							LINE友だち追加時に自動送信されるメッセージ
						</p>
					</div>
				</div>

				<div className="flex justify-end">
					<button
						type="button"
						className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
					>
						保存
					</button>
				</div>
			</div>
		</>
	);
}
