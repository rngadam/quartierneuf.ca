
import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Create verification directory if it doesn't exist
        os.makedirs("jules-scratch/verification", exist_ok=True)

        # Navigate to the local index.html file
        await page.goto("file:///app/index.html")

        # Default language is French, "About" tab is active
        await page.screenshot(path="jules-scratch/verification/01_about_tab_fr.png")

        # Click on the "Actions" tab and take a screenshot
        await page.click("text=Actions")
        await page.screenshot(path="jules-scratch/verification/02_actions_tab_fr.png")

        # Click on the "Contact" tab and take a screenshot
        await page.click("text=Contactez-nous")
        await page.screenshot(path="jules-scratch/verification/03_contact_tab_fr.png")

        # Switch to English
        await page.click("#lang-en")
        await page.wait_for_timeout(500) # Wait for content to switch

        # "Contact" tab should still be active, but in English
        await page.screenshot(path="jules-scratch/verification/04_contact_tab_en.png")

        # Click on the "About" tab in English
        await page.click("#defaultOpen")
        await page.screenshot(path="jules-scratch/verification/05_about_tab_en.png")

        # Verify the English content is visible
        welcome_text_en = await page.is_visible("text=Welcome to the Neuf website")
        assert welcome_text_en, "English 'About' content not found after switching language."

        # Verify the photo album link in the English section
        photo_album_link_en = await page.query_selector('div[lang="en"] a[href="https://photos.google.com/share/AF1QipPYsGNBefXzpc1yzSRO5Yy3vr-N_lorMz3X1SCGlqzUYLxa-itu-zbJDXEMfl5e3A?key=UFAxaWhmaTlkdEJsd2JPeUNkdDlpRVo1Z25PcGtn"]')
        assert photo_album_link_en is not None, "Correct photo album link not found in English section."

        # Verify the Facebook link
        facebook_link = await page.query_selector('a[href="https://www.facebook.com/quartierneuf.ca/"]')
        assert facebook_link is not None, "Facebook link not found"

        # Verify the mayor's name is removed
        mayor_name_present = await page.is_visible("text=Jean-François Lalonde")
        assert not mayor_name_present, "Mayor's name is still present"

        await browser.close()
        print("Verification script ran successfully.")

if __name__ == "__main__":
    asyncio.run(main())
