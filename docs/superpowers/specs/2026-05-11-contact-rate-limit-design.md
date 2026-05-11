# Contact Form Rate Limiting Design

## Overview

Add rate limiting to the contact form to prevent spam from rapid repeated submissions. Limit: 1 email per 5 minutes per email address.

## Architecture

- **API Route**: `app/api/contact/route.ts` — handles form POST
- **Rate Limit Store**: In-memory `Map<email, timestamp>` — persists during server runtime
- **Email Service**: Resend
- **Frontend**: `SecureContactSection` — handles rate limit response and shows block message

## Rate Limit Logic

```
GET timestamp from map[email]
IF timestamp EXISTS AND (now - timestamp) < 5 minutes (300000ms):
  remainingMs = 300000 - (now - timestamp)
  RETURN 429 { remainingSeconds: Math.ceil(remainingMs / 1000) }
ELSE:
  SEND email via Resend
  SET map[email] = now
  RETURN 200
```

## API Endpoint

### POST /api/contact

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Responses:**
- `200 OK` — Email sent successfully
- `400 Bad Request` — Invalid input, returns `{ errors: { field: "message" } }`
- `429 Too Many Requests` — Rate limited, returns `{ remainingSeconds: number }`
- `500 Internal Server Error` — Email send failed

## Frontend Changes

### SecureContactSection (`components/sections/secure-contact-section.tsx`)

**On submit:**
- POST to `/api/contact`
- On `429`: show error "Please wait X seconds before sending another message", keep form data
- On `200`: clear form, show "TRANSMISSION_COMPLETE" in logs

### Error States
- Empty required fields → inline validation message
- Rate limited → red error text below subject field
- Server error → "TRANSMISSION_FAILED" in log with retry option

## Dependencies

- `resend` — email service

## Environment Variables

- `RESEND_API_KEY` — Resend API key

## Constraints

- In-memory store resets on server restart (acceptable for this use case)
- Rate limit is per email address, not per IP (intentional for simplicity)