import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
	return [{ title: "ログイン - WaitLine" }];
}

export default function Login() {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<a href="/" className="inline-flex items-center gap-2">
						<div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold">W</span>
						</div>
						<span className="font-bold text-2xl text-gray-900">WaitLine</span>
					</a>
				</div>

				<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
					<h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
						ログイン
					</h1>

					<form className="space-y-4">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								メールアドレス
							</label>
							<input
								type="email"
								id="email"
								className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
								placeholder="you@example.com"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								パスワード
							</label>
							<input
								type="password"
								id="password"
								className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
								placeholder="••••••••"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors"
						>
							ログイン
						</button>
					</form>

					<div className="mt-6 text-center text-sm text-gray-500">
						アカウントをお持ちでない方は{" "}
						<a href="/signup" className="text-green-600 hover:underline">
							新規登録
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
