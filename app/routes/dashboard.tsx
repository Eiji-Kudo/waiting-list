import { Outlet, useLocation } from "react-router";

export default function DashboardLayout() {
	const location = useLocation();

	return (
		<div className="min-h-screen bg-slate-50">
			<DashboardHeader />
			<div className="flex">
				<Sidebar currentPath={location.pathname} />
				<main className="flex-1 p-8">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

function DashboardHeader() {
	return (
		<header className="bg-white border-b border-slate-200/80">
			<div className="px-6 py-4 flex items-center justify-between">
				<a href="/" className="flex items-center gap-2.5">
					<div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
						<span className="text-white font-bold text-sm">W</span>
					</div>
					<span className="font-bold text-xl tracking-tight text-slate-900">WaitLine</span>
				</a>
				<div className="flex items-center gap-4">
					<span className="text-sm text-slate-500">demo@example.com</span>
					<button
						type="button"
						className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
					>
						ログアウト
					</button>
				</div>
			</div>
		</header>
	);
}

function Sidebar({ currentPath }: { currentPath: string }) {
	const menuItems = [
		{ id: "dashboard", label: "ダッシュボード", href: "/dashboard" },
		{ id: "subscribers", label: "登録者一覧", href: "/dashboard/subscribers" },
		{ id: "messages", label: "メッセージ配信", href: "/dashboard/messages" },
		{ id: "automation", label: "自動化設定", href: "/dashboard/automation" },
		{ id: "settings", label: "設定", href: "/dashboard/settings" },
	];

	const isActive = (href: string) => {
		if (href === "/dashboard") {
			return currentPath === "/dashboard";
		}
		return currentPath.startsWith(href);
	};

	return (
		<aside className="w-64 bg-white border-r border-slate-200/80 min-h-[calc(100vh-65px)]">
			<div className="p-4">
				<select className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
					<option>AI Writing Assistant</option>
					<option>+ 新しいサービスを作成</option>
				</select>
			</div>
			<nav className="px-3">
				{menuItems.map((item) => (
					<a
						key={item.id}
						href={item.href}
						className={`block px-4 py-2.5 rounded-xl text-sm mb-1 transition-colors ${
							isActive(item.href)
								? "bg-emerald-50 text-emerald-700 font-medium"
								: "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
						}`}
					>
						{item.label}
					</a>
				))}
			</nav>
		</aside>
	);
}
