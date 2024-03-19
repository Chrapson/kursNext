import React, { type FormHTMLAttributes } from "react";

type ReviewFormProps = { formAction: FormHTMLAttributes<HTMLFormElement>["action"] };
export const ReviewForm = ({ formAction }: ReviewFormProps) => (
	<form action={formAction} data-testid="add-review-form">
		<label htmlFor="headline">
			Review title
			<input
				required
				type="text"
				name="headline"
				id="headline"
				minLength={3}
				maxLength={100}
				className="my-1 block w-full rounded-md border py-2 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</label>
		<label htmlFor="content">
			Review content
			<textarea
				required
				name="content"
				id="content"
				minLength={3}
				maxLength={100}
				className="mt-1 block max-h-48 min-h-[4.5rem] w-full rounded-md border text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</label>
		<div className="my-2">
			<label>
				Rating
				<fieldset className="my-2 flex flex-row-reverse justify-end">
					{[5, 4, 3, 2, 1].map((value) => (
						<React.Fragment key={value}>
							<input
								className="mx-4 h-4 w-4"
								id={`rating-${value}`}
								type="radio"
								value={value}
								name="rating"
								required
							/>
							<label htmlFor={`rating-${value}`} className="cursor-pointer">
								{value}
							</label>
						</React.Fragment>
					))}
				</fieldset>
			</label>
		</div>
		<label htmlFor="name">
			Name
			<input
				required
				name="name"
				type="name"
				id="name"
				minLength={3}
				maxLength={100}
				className="my-1 block w-full rounded-md border py-2 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</label>
		<label htmlFor="email">
			Email
			<input
				required
				name="email"
				type="email"
				id="email"
				pattern="^[a-zA-Z0-9+_.\-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
				title="Invalid email address"
				className="my-1 block w-full rounded-md border py-2 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</label>
		<button
			type="submit"
			className="mt-4 w-full rounded-md bg-gradient-to-r from-gray-700 to-black py-2 text-center font-semibold text-white opacity-90 transition-all hover:bg-gray-800 hover:opacity-100"
		>
			Submit
		</button>
	</form>
);
