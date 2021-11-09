import { table, minifyRecords } from "./utils/airTable";

export default async (req, res) => {
  const {
    company_name,
    first_name,
    last_name,
    email,
    phone,
    message_long,
    budget,
    reference,
  } = req.body;
  try {
    const createdRecords = await table.create([
      {
        fields: {
          company_name,
          first_name,
          last_name,
          email,
          phone,
          message_long,
          budget,
          reference,
        },
      },
    ]);

    const createdRecord = await {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };

    console.log("this is the request");
    console.log(req.body);
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Somethin went awry" });
  }
};
