import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const json = (await request.json()) as { productId: string } | null; //***
	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		json.productId;
		revalidatePath(`/products/${json.productId}`);
		revalidatePath("/products");

		return NextResponse.json({ message: "Revalidation started" }, { status: 201 });
	}
	return NextResponse.json({ message: "Invalid Body  " }, { status: 400 });
}
