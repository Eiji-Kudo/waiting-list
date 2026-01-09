import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

const waitlist = "cmk73l3pb000d73xg9zz4keai";

const formSchema = z.object({
	email: z.email("有効なメールアドレスを入力してください"),
});

const responseSchema = z.object({
	message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

async function subscribeToWaitlist(email: string) {
	const response = await fetch("https://omelette.net/api/subscribers/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			waitlist,
			email,
		}),
	});

	const json: unknown = await response.json();
	const body = responseSchema.parse(json);

	if (!response.ok) {
		throw new Error(body.message);
	}

	return body;
}

type Props = {
	variant?: "light" | "dark";
};

export function WaitlistForm({ variant = "light" }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const mutation = useMutation({
		mutationFn: (data: FormData) => subscribeToWaitlist(data.email),
	});

	const onSubmit = (data: FormData) => {
		mutation.mutate(data);
	};

	const isDark = variant === "dark";

	if (mutation.isSuccess) {
		return (
			<div
				className={`rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center ${
					isDark
						? "bg-white/20 backdrop-blur border border-white/30"
						: "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
				}`}
			>
				<div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎉</div>
				<p
					className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${isDark ? "text-white" : "text-green-800"}`}
				>
					登録完了！
				</p>
				<p
					className={`text-sm sm:text-base ${isDark ? "text-white/80" : "text-green-600"}`}
				>
					リリース時にお知らせします。お楽しみに！
				</p>
			</div>
		);
	}

	return (
		<div className="w-full max-w-lg mx-auto">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div
					className={`flex flex-col sm:flex-row gap-2 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl ${
						isDark
							? "bg-white/10 backdrop-blur border border-white/20"
							: "bg-white shadow-xl border border-gray-100"
					}`}
				>
					<div className="flex-1">
						<input
							type="email"
							{...register("email")}
							placeholder="メールアドレス"
							className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
								isDark
									? "bg-white text-gray-900 placeholder-gray-400"
									: "bg-gray-50 text-gray-900 placeholder-gray-400"
							}`}
						/>
					</div>
					<button
						type="submit"
						disabled={mutation.isPending}
						className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all ${
							isDark
								? "bg-white text-green-600 hover:bg-green-50 hover:scale-105 disabled:bg-gray-200 disabled:scale-100"
								: "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:scale-105 hover:shadow-lg disabled:from-green-300 disabled:to-emerald-300 disabled:scale-100"
						}`}
					>
						{mutation.isPending ? "送信中..." : "先行登録する"}
					</button>
				</div>
				{errors.email && (
					<p
						className={`text-xs sm:text-sm mt-2 sm:mt-3 text-center ${isDark ? "text-red-200" : "text-red-500"}`}
					>
						{errors.email.message}
					</p>
				)}
				{mutation.isError && (
					<p
						className={`text-xs sm:text-sm mt-2 sm:mt-3 text-center ${isDark ? "text-red-200" : "text-red-500"}`}
					>
						{mutation.error.message}
					</p>
				)}
			</form>
		</div>
	);
}
