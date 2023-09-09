import cors from "cors";
import { SpheronClient, ProtocolEnum } from "@spheron/storage";

const handler = async (req, res) => {
  try {
    const bucketName = "example-browser-upload";
    const protocol = ProtocolEnum.IPFS;

    const SPHERON_TOKEN = process.env.NEXT_PUBLIC_SPHERON_TOKEN; // Move this inside the handler function if not already set in your environment.

    const client = new SpheronClient({
      token: SPHERON_TOKEN,
    });

    const { uploadToken } = await client.createSingleUploadToken({
      name: bucketName,
      protocol,
    });

    res.status(200).json({
      uploadToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default cors()(handler);
