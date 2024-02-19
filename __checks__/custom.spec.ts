import { test, expect } from "@playwright/test";

// You can override the default Playwright test timeout of 30s
// test.setTimeout(15000);

test("Custom Browser Check", async ({ page }) => {
	const response = await page.goto("https://kurs-next-lake.vercel.app/");
	expect(response?.status()).toBeLessThan(400);
	await page.screenshot({ path: "screenshot.jpg" });
});
