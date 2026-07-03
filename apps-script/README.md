# Google Apps Script endpoint

1. Create a new Google Sheet.
2. Open the script editor (Extensions → Apps Script).
3. Replace the Code.gs content with the code in `apps-script/code.gs` and save.
4. Deploy → New deployment → Select `Web app`. Set access to `Anyone` (or `Anyone, even anonymous`) and deploy.
5. Copy the Web App URL and set `VITE_SHEET_ENDPOINT` to that URL when running the site.
