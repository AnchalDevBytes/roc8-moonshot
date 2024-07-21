import dotenv from "dotenv";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

interface propData {
  email: string;
  name: string;
  otp: number;
}

dotenv.config();

export async function sendVerificationEmail({ email, name, otp }: propData) {
  const apiKey = process.env.MAILERSEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "MAILERSEND_API_KEY is not defined in environment variables",
    );
  }

  const mailerSend = new MailerSend({ apiKey });

  const sender = new Sender(
    "anchal@trial-jpzkmgq06yn4059v.mlsender.net",
    "Anchal Raj",
  );

  const recipients = [new Recipient(email, name)];

  const emailParams = new EmailParams()
    .setFrom(sender)
    .setTo(recipients)
    .setReplyTo(sender)
    .setSubject("OTP from roc8-ecommerce for Signup")
    .setHtml(
      `<strong>Your <b>OTP</b> for ecommerce signup is <h3>${otp}</h3> </strong>`,
    )
    .setText("Kindly input the OTP to finish account creation");

  try {
    const response = await mailerSend.email.send(emailParams);
    if (response) {
      return {
        success: true,
        message: "Verification email sent successfully.",
      };
    }
    return {
      success : false,
      message : "can't able to send email!"
    }
  } catch (error) {
    console.error("Error sending verification email:", error);
    return {
      success: false,
      message: "Failed to send verification email by mailersend",
    };
  }
}