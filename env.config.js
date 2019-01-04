import path from 'path';
import dotenv from 'dotenv';

let dotenvSuffix;

if (process.env.STAGING) {
  dotenvSuffix = 'staging';
} else {
  dotenvSuffix = process.env.NODE_ENV === 'production' ? 'production' : 'development';
}

dotenv.config({ path: path.resolve(__dirname, `.env.${dotenvSuffix}`) });
