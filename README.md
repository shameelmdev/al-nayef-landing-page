# Al Nayef Group Landing Page

A responsive corporate landing page developed using React and Vite as part of a frontend technical assessment for Al Nayef Group.

## Features

- Responsive and modern landing page
- Component-based React architecture
- Company overview and business services
- Contact form with Google Sheets integration
- Client-side form validation
- Loading and success/error notifications

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Google Apps Script
- Google Sheets

## Project Structure

```
src/
apps-script/
public/
```

## Running Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Google Sheets Integration

The contact form submits data to Google Sheets using Google Apps Script.

Configure the Apps Script by following the instructions in:

```text
apps-script/README.md
```

Then set:

```env
VITE_SHEET_ENDPOINT=YOUR_GOOGLE_APPS_SCRIPT_URL
```

Restart the development server after updating the environment variable.

## Notes

The contact form submits data to Google Sheets through a Google Apps Script Web App. The Apps Script source is included in the `apps-script` folder for reference.