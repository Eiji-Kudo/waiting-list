import { Link } from "react-router";
import type { Route } from "./+types/service.$slug";

const mockServices: Record<
	string,
	{
		name: string;
		description: string;
		longDescription: string;
		category: string;
		subscriberCount: number;
		launchDate: string;
		thumbnail: string;
		features: string[];
		operator: string;
	}
> = {
	"ai-writing-assistant": {
		name: "AI Writing Assistant",
		description: "AIがあなたの文章作成をサポート",
		longDescription:
			"AI Writing Assistantは、最新のAI技術を活用して、あなたの文章作成を強力にサポートします。ブログ記事、ビジネスメール、SNS投稿など、あらゆるシーンで活躍。文章のトーンや長さも自由自在にカスタマイズできます。",
		category: "テクノロジー / AI",
		subscriberCount: 234,
		launchDate: "2025年3月予定",
		thumbnail:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
		features: [
			"高精度なAI文章生成",
			"日本語に最適化",
			"トーン・スタイルのカスタマイズ",
			"Chromeエクステンション対応",
		],
		operator: "AI Labs Inc.",
	},
	"eco-marketplace": {
		name: "エコマーケット",
		description: "サステナブルな商品だけを集めたマーケットプレイス",
		longDescription:
			"環境に優しい商品だけを厳選したマーケットプレイス。すべての商品は環境負荷を考慮して選定されています。買い物を通じて、地球に優しい選択をしませんか？",
		category: "EC / マーケットプレイス",
		subscriberCount: 189,
		launchDate: "2025年4月予定",
		thumbnail:
			"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
		features: [
			"環境認証済み商品のみ取り扱い",
			"カーボンオフセット配送",
			"リサイクル可能なパッケージ",
			"生産者との直接取引",
		],
		operator: "エコマーケット株式会社",
	},
};

export function meta({ params }: Route.MetaArgs) {
	const service = mockServices[params.slug ?? ""] ?? {
		name: "サービス",
		description: "",
	};
	return [
		{ title: `${service.name} - WaitLine` },
		{ name: "description", content: service.description },
	];
}

export default function ServiceDetail({ params }: Route.ComponentProps) {
	const service = mockServices[params.slug ?? ""];

	if (!service) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-2">
						サービスが見つかりません
					</h1>
					<Link to="/board" className="text-green-600 hover:underline">
						掲示板に戻る
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<main>
				<div className="bg-white border-b border-gray-200">
					<div className="max-w-4xl mx-auto px-4 py-8">
						<div className="mb-6">
							<Link
								to="/board"
								className="text-green-600 hover:underline text-sm"
							>
								← 掲示板に戻る
							</Link>
						</div>

						<div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-gray-100">
							<img
								src={service.thumbnail}
								alt={service.name}
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="flex flex-col md:flex-row gap-8">
							<div className="flex-1">
								<div className="text-sm text-green-600 font-medium mb-2">
									{service.category}
								</div>
								<h1 className="text-3xl font-bold text-gray-900 mb-4">
									{service.name}
								</h1>
								<p className="text-gray-600 mb-6">{service.longDescription}</p>

								<h2 className="font-bold text-gray-900 mb-3">特徴</h2>
								<ul className="space-y-2 mb-6">
									{service.features.map((feature) => (
										<li key={feature} className="flex items-start gap-2">
											<span className="text-green-500 mt-1">✓</span>
											<span className="text-gray-600">{feature}</span>
										</li>
									))}
								</ul>

								<div className="text-sm text-gray-500">
									運営: {service.operator}
								</div>
							</div>

							<div className="md:w-80">
								<div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
									<div className="text-center mb-6">
										<div className="text-4xl font-bold text-gray-900 mb-1">
											{service.subscriberCount}
										</div>
										<div className="text-gray-500">人が登録済み</div>
									</div>

									<div className="text-center text-sm text-gray-500 mb-6">
										ローンチ予定: {service.launchDate}
									</div>

									<button
										type="button"
										className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors mb-3"
									>
										LINEで登録する
									</button>

									<p className="text-xs text-gray-500 text-center">
										LINE友だち追加で登録完了
									</p>

									<div className="mt-6 pt-6 border-t border-gray-200">
										<div className="bg-white rounded-xl p-4 border-2 border-dashed border-gray-200">
											<div className="text-center text-gray-400 text-sm">
												QRコード
												<br />
												（実装時に表示）
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

function Header() {
	return (
		<header className="bg-white border-b border-gray-200">
			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-sm">W</span>
					</div>
					<span className="font-bold text-xl text-gray-900">WaitLine</span>
				</Link>
				<nav className="flex items-center gap-6">
					<Link to="/board" className="text-gray-600 hover:text-gray-900">
						掲示板
					</Link>
					<Link
						to="/dashboard"
						className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
					>
						デモを見る
					</Link>
				</nav>
			</div>
		</header>
	);
}
