import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, year, type, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Form Perasa" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `PERASA Baru Dari ${name}`,
      html: `
        <h3>Data Pengirim:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Telepon:</strong> ${phone || "-"} </p>
        <p><strong>Tahun Angkatan:</strong> ${year}</p>
        <p><strong>Jenis Perasa:</strong> ${type}</p>
        <br />
        <h3>Pesan:</h3>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: true }), { status: 500 });
  }
}
