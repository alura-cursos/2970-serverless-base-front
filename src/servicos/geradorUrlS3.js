import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

async function geraUrlPreassinada(chaveArquivo) {

  let credentials;

  if (process.env.REACT_APP_ENVIRONMENT === "dev") {
    credentials = {
      accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY
    }
  }

  const s3Payload = credentials ? { credentials, region: "us-east-1"} : null;
  const s3Client = new S3Client(s3Payload)
  const command = new PutObjectCommand({
    Bucket: "alunos-csv",
    Key: chaveArquivo
  });

  const preSignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 })

  return preSignedUrl;
}

export default geraUrlPreassinada;