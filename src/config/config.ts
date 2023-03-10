import * as dotenv from "dotenv";
import path from "path";
import { EnvConfig } from "types/config";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVars: EnvConfig = process.env;

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  wa: {
    token: envVars.WA_ACCOUNT_TOKEN,
    id: envVars.WA_ACCOUNT_ID,
    phone: envVars.WA_ACCOUNT_PHONE,
  },
};
