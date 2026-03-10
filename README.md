# Exam Email Backend

This is a Node.js backend server for automatically sending exam scores via email.

## Setup Instructions

1. **Install Node.js**: Make sure Node.js is installed on your system.

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Set up Gmail App Password**:
   - Go to your Google Account settings.
   - Enable 2-Factor Authentication.
   - Generate an App Password for this application.
   - Copy the app password (it will be a 16-character code).

4. **Configure Environment Variables**:
   - Open the `.env` file.
   - Replace `your-gmail@gmail.com` with your Gmail address.
   - Replace `your-app-password` with the app password you generated.

5. **Start the Server**:
   ```
   npm start
   ```
   The server will run on http://localhost:3000

## Usage

The server provides a POST endpoint at `/send-score` that accepts JSON data with `name`, `score`, `correct`, and `total` fields. It will send an email to `davidbanor27@gmail.com` with the score details.

Example request:
```json
{
  "name": "John Doe",
  "score": 400,
  "correct": 16,
  "total": 18
}
```

## Security Note

This setup uses Gmail SMTP. Make sure to keep your app password secure and never commit it to version control.