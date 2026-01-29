# Automated Gmail → Excel Data Pipeline

This project demonstrates an automated ETL pipeline that converts Gmail attachments into structured Excel datasets using Google Apps Script and Power Query.

# Overview

The system extracts email metadata and attachments from Gmail, converts them into JSON format, and loads them into Excel through Power Query for automated reporting.

Pipeline architecture:

Gmail Inbox  
→ Google Apps Script API  
→ JSON Web Endpoint  
→ Power Query ETL  
→ Excel Dataset

# Features

- Automated email ingestion
- Attachment extraction
- Base64 encoding/decoding for binary transport
- JSON API endpoint
- Live refresh in Excel
- Token-based API protection
- Serverless architecture

# Technologies Used

- Google Apps Script
- Gmail API
- Power Query
- Microsoft Excel
- JSON
- Base64 Encoding

# Setup Instructions

1. Enable IMAP in Gmail settings
2. Deploy Google Apps Script as a Web App
3. Connect Power Query to Web API
4. Decode Base64 attachments
5. Refresh Excel for live updates

# Security Note

This repository contains sanitized code.

Replace placeholders with your own:

YOUR_SECRET_TOKEN  
YOUR_WEB_APP_URL

# Sample Output

```json
[
  {
    "EmailDate": "2026-01-29T10:00:00Z",
    "From": "sender@example.com",
    "Subject": "Invoice",
    "FileName": "invoice.pdf",
    "MimeType": "application/pdf",
    "Binary": "BASE64_DATA"
  }
]
```

# Author's Note

Built as a data automation project demonstrating ETL workflow design and API integration for analytics.
