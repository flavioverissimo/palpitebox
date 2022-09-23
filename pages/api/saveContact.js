import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const fromBase64 = (value) => {
  const buff = Buffer.from(value, "base64");
  return buff.toString("ascii");
};

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[5];
    const data = JSON.parse(req.body);

    await sheet.addRow({
      Status: "Verificar",
      Data: moment().format("DD/MM/YYYY HH:mm:ss"),
      Nome: data.Nome,
      Email: data.Email,
      Mensagem: data.Mensagem,
    });

    res.end(
      JSON.stringify({
        status: true,
      })
    );
  } catch (err) {
    res.end("error");
  }
};
