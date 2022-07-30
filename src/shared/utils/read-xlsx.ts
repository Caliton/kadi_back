// eslint-disable-next-line max-len
import * as XLSX from 'xlsx';

export const readXlsx = (file: Buffer, sheetName: string, opt: any) => {
  const workbook = XLSX.read(file);

  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
    header: opt.type | 1,
    range: opt.range | 0,
  });

  return data;
};

export const convertDateXlsx = (dateSujo) => {
  const { d, m, y: year } = XLSX.SSF.parse_date_code(dateSujo);

  const day = d.toString().padStart(2, '0');
  const month = m.toString().padStart(2, '0');

  const dateString = `${year}-${month}-${day}`;

  return dateString;
};
