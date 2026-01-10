import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

export default function DashboardLayout() {
	const location = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-slate-50">
			<DashboardHeader onMenuToggle={() => setIsMobileMenuOpen(true)} />
			<div className="flex">
				<Sidebar currentPath={location.pathname} className="hidden md:block" />
				<MobileSidebar
					currentPath={location.pathname}
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}
				/>
				<main className="flex-1 p-4 md:p-8">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

function DashboardHeader({ onMenuToggle }: { onMenuToggle: () => void }) {
	return (
		<header className="bg-white border-b border-slate-200/80">
			<div className="px-4 md:px-6 py-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={onMenuToggle}
						className="md:hidden p-2 -ml-2 text-slate-600 hover:text-slate-900 transition-colors"
						aria-label="メニューを開く"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
					<Link to="/" className="flex items-center gap-2.5">
						<div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
							<span className="text-white font-bold text-sm">W</span>
						</div>
						<span className="font-bold text-xl tracking-tight text-slate-900">
							WaitLine
						</span>
					</Link>
				</div>
				<div className="hidden md:flex items-center gap-4">
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

const menuItems = [
	{ id: "dashboard", label: "ダッシュボード", href: "/dashboard" },
	{ id: "subscribers", label: "登録者一覧", href: "/dashboard/subscribers" },
	{ id: "messages", label: "メッセージ配信", href: "/dashboard/messages" },
	{ id: "automation", label: "自動化設定", href: "/dashboard/automation" },
	{ id: "settings", label: "設定", href: "/dashboard/settings" },
];

function Sidebar({
	currentPath,
	className,
}: {
	currentPath: string;
	className?: string;
}) {
	const isActive = (href: string) => {
		if (href === "/dashboard") {
			return currentPath === "/dashboard";
		}
		return currentPath.startsWith(href);
	};

	return (
		<aside
			className={`w-64 bg-white border-r border-slate-200/80 min-h-[calc(100vh-65px)] ${className ?? ""}`}
		>
			<div className="p-4">
				<select className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
					<option>AI Writing Assistant</option>
					<option>+ 新しいサービスを作成</option>
				</select>
			</div>
			<nav className="px-3">
				{menuItems.map((item) => (
					<Link
						key={item.id}
						to={item.href}
						className={`block px-4 py-2.5 rounded-xl text-sm mb-1 transition-colors ${
							isActive(item.href)
								? "bg-emerald-50 text-emerald-700 font-medium"
								: "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
						}`}
					>
						{item.label}
					</Link>
				))}
			</nav>
		</aside>
	);
}

function MobileSidebar({
	currentPath,
	isOpen,
	onClose,
}: {
	currentPath: string;
	isOpen: boolean;
	onClose: () => void;
}) {
	const isActive = (href: string) => {
		if (href === "/dashboard") {
			return currentPath === "/dashboard";
		}
		return currentPath.startsWith(href);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 md:hidden">
			<button
				type="button"
				className="fixed inset-0 bg-black/50 cursor-default"
				onClick={onClose}
				aria-label="メニューを閉じる"
			/>
			<aside className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
				<div className="p-4 border-b border-slate-200/80 flex items-center justify-between">
					<span className="font-bold text-lg text-slate-900">メニュー</span>
					<button
						type="button"
						onClick={onClose}
						className="p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors"
						aria-label="メニューを閉じる"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div className="p-4">
					<select className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
						<option>AI Writing Assistant</option>
						<option>+ 新しいサービスを作成</option>
					</select>
				</div>
				<nav className="px-3">
					{menuItems.map((item) => (
						<Link
							key={item.id}
							to={item.href}
							onClick={onClose}
							className={`block px-4 py-2.5 rounded-xl text-sm mb-1 transition-colors ${
								isActive(item.href)
									? "bg-emerald-50 text-emerald-700 font-medium"
									: "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
							}`}
						>
							{item.label}
						</Link>
					))}
				</nav>
				<div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200/80">
					<div className="text-sm text-slate-500 mb-2">demo@example.com</div>
					<button
						type="button"
						className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
					>
						ログアウト
					</button>
				</div>
			</aside>
		</div>
	);
}
