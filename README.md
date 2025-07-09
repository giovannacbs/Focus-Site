# Focus Downloader 

This is a simple front-end project that allows users to download the weekly **Focus** survey spreadsheet published by the Central Bank of Brazil.

## 🔗 Live Site

> [https://giovannacbs.github.io/Focus-Site](https://giovannacbs.github.io/Focus-Site)

## 📅 Date Selection

Date selection is **restricted to Fridays** between **January 1st, 2022 and the most recent valid Friday**.  
This is because the Focus report is published every Monday at around 8:25 a.m. (Brasília time) using data collected until the previous Friday.

## ⚙️ Backend

This project depends on a separate backend repository that:

- downloads the official Focus PDF;
- extracts the economic forecast table;
- generates a downloadable `.xlsx` spreadsheet.

Backend repository:  
🔗 [https://github.com/giovannacbs/Focus-Extractor](https://github.com/giovannacbs/Focus-Project)

The backend is currently hosted at:  
🌐 [`https://focus-project-ix6q.onrender.com`](https://focus-project-ix6q.onrender.com)

## 📁 Project Structure

- `index.html` – main page with date picker and download button  
- `style.css` – styling and layout  
- `script.js` – logic for date filtering, request handling, and file download
