import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phoneNumber, note } = req.body;

        // Validate input
        if (!name || !email || !phoneNumber || !note) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            // Initialize Google Sheets API client
            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                },
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({ auth, version: 'v4' });

            // Append data to Google Sheets
            const response = await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'A1:D1',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[name, email, phoneNumber, note]],
                },
            });

            return res.status(200).json({ data: response.data });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
