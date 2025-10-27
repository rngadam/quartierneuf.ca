
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Navigate to the local index.html file
        await page.goto("file:///app/index.html")

        # Take a screenshot of the default tab (About)
        await page.screenshot(path="jules-scratch/verification/about_tab.png")

        # Click on the "Actions" tab and take a screenshot
        await page.click("text=Actions")
        await page.screenshot(path="jules-scratch/verification/actions_tab.png")

        # Click on the "Contact" tab and take a screenshot
        await page.click("text=Contactez-nous")
        await page.screenshot(path="jules-scratch/verification/contact_tab.png")

        # Verify the Facebook link
        facebook_link = await page.query_selector('a[href="https://www.facebook.com/quartierneuf.ca/"]')
        assert facebook_link is not None, "Facebook link not found"

        # Verify the photo album link
        photo_album_link = await page.query_selector('a[href="https://photos.google.com/share/AF1QipPYsGNBefXzpc1yzSRO5Yy3vr-N_lorMz3X1SCGlqzUYLxa-itu-zbJDXEMfl5e3A?key=UFAxaWhmaTlkdEJsd2JPeUNkdDlpRVo1Z25PcGtn"]')
        assert photo_album_link is not None, "Photo album link not found"

        # Verify the mayor's name is removed
        mayor_name_present = await page.is_visible("text=Jean-François Lalonde")
        assert not mayor_name_present, "Mayor's name is still present"

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
