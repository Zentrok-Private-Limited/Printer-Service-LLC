import { NextRequest, NextResponse } from "next/server";
import { sheets } from "../../../lib/googleSheets";
import { transporter } from "../../../lib/mailer";

interface FormData {
  name: string;
  email: string;
  contactNo: string;
  modelNo: string;
  os: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();

    const { name, email, contactNo, modelNo, os } = body;

    // VALIDATION
    if (!name || !email || !contactNo || !modelNo || !os) {
      return NextResponse.json(
        {
          error: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // PHONE NUMBER VALIDATION
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(contactNo)) {
      return NextResponse.json(
        {
          error: "Contact number must contain exactly 10 digits",
        },
        {
          status: 400,
        }
      );
    }

    // SAVE TO GOOGLE SHEETS
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,

      range: "Sheet1!A:F",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [new Date().toLocaleString(), name, email, contactNo, modelNo, os],
        ],
      },
    });

    // SEND EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.RECEIVER_EMAIL,

      subject: "New Printer Driver Request : Printer Service LLC",

      html: `
        <h2>New Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact No:</strong> ${contactNo}</p>
        <p><strong>Printer Model:</strong> ${modelNo}</p>
        <p><strong>Operating System:</strong> ${os}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit form. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}