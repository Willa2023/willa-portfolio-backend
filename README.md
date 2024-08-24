# Willa Portfolio Backend

## Description

This is the backend service for Willa Portfolio. The project uses Express.js to create a simple REST API that handles requests from the frontend and sends emails via SendGrid.

## Version

1.0.0

## Installation

Clone the project and install dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/willa-portfolio-backend.git

# Navigate to the project directory
cd willa-portfolio-backend

# Install dependencies
npm install

# Sending Emails
curl -X POST https://your-backend-url/contact \
    -H "Content-Type: application/json" \
    -d '{
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "message": "Hello, this is a test message."
    }'

# Dependencies
	•	@sendgrid/mail: For sending emails
	•	cors: For handling cross-origin requests
	•	dotenv: For loading environment variables
	•	express: For creating the REST API

