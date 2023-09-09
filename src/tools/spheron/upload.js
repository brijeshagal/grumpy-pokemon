import { SpheronClient, ProtocolEnum } from "@spheron/storage";

const spheronClient = new SpheronClient({
  token: process.env.NEXT_PUBLIC_SPHERON_TOKEN,
});

async function upload() {
  let currentlyUploaded = 0;
  const { uploadId, bucketId, protocolLink, dynamicLinks, cid } =
    await spheronClient.upload(filePath, {
      protocol: ProtocolEnum.IPFS,
      name,
      onUploadInitiated: (uploadId) => {
        console.log(`Upload with id ${uploadId} started...`);
      },
      onChunkUploaded: (uploadedSize, totalSize) => {
        currentlyUploaded += uploadedSize;
        console.log(`Uploaded ${currentlyUploaded} of ${totalSize} Bytes.`);
      },
    });
}
