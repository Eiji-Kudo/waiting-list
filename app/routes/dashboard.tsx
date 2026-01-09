import { Outlet, useLocation } from "react-router";

export default function DashboardLayout() {
	const location = useLocation();

	return (
		<div className="min-h-screen bg-gray-100">
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
		<header className="bg-white border-b border-gray-200">
			<div className="px-6 py-4 flex items-center justify-between">
				<a href="/" className="flex items-center gap-2">
					<div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-sm">W</span>
					</div>
					<span className="font-bold text-xl text-gray-900">WaitLine</span>
				</a>
				<div className="flex items-center gap-4">
					<span className="text-sm text-gray-500">demo@example.com</span>
					<button
						type="button"
						className="text-sm text-gray-600 hover:text-gray-900"
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
		<aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)]">
			<div className="p-4">
				<select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
					<option>AI Writing Assistant</option>
					<option>+ 新しいサービスを作成</option>
				</select>
			</div>
			<nav className="px-2">
				{menuItems.map((item) => (
					<a
						key={item.id}
						href={item.href}
						className={`block px-4 py-2 rounded-lg text-sm mb-1 ${
							isActive(item.href)
								? "bg-green-100 text-green-700 font-medium"
								: "text-gray-600 hover:bg-gray-100"
						}`}
					>
						{item.label}
					</a>
				))}
			</nav>
		</aside>
	);
}
