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

export function WaitlistForm() {
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

	if (mutation.isSuccess) {
		return (
			<div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
				<div className="text-2xl mb-2">🎉</div>
				<p className="text-green-800 font-medium">登録ありがとうございます！</p>
				<p className="text-green-600 text-sm mt-1">最新情報をお届けします。</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
			<div className="flex flex-col sm:flex-row gap-3">
				<div className="flex-1">
					<input
						type="email"
						{...register("email")}
						placeholder="メールアドレスを入力"
						className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
					)}
				</div>
				<button
					type="submit"
					disabled={mutation.isPending}
					className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-6 py-3 rounded-xl font-bold transition-colors"
				>
					{mutation.isPending ? "送信中..." : "登録する"}
				</button>
			</div>
			{mutation.isError && (
				<p className="text-red-500 text-sm mt-2 text-center">
					{mutation.error.message}
				</p>
			)}
		</form>
	);
}
