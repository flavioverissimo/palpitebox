import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const generateCupom = () => {
  const cupom = parseInt(moment().format("YYMMDDHHmmssSSS"))
    .toString(16)
    .toUpperCase();
  return (
    cupom.substr(0, 4) + "-" + cupom.substr(4, 4) + "-" + cupom.substr(8, 4)
  );
};

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
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A2:B2");
    const statusPromocaoCell = sheetConfig.getCell(1, 0);
    const textoPromocaoCell = sheetConfig.getCell(1, 1);

    let Cupom = "";
    let Promocao = "";

    if (statusPromocaoCell.value === "VERDADEIRO") {
      (Cupom = generateCupom()), (Promocao = textoPromocaoCell.value);
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom,
      Promocao,
      Data: moment().format("DD/MM/YYYY HH:mm:ss"),
      Nota: data.Nota,
      Indicacao: "Sim",
    });

    res.end(
      JSON.stringify({
        statusCupom: Cupom !== "",
        Cupom,
        Promocao,
      })
    );
  } catch (err) {
    res.end("error");
  }
};
