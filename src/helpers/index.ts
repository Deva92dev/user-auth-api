import crypto from 'crypto';

export const generateRandom = () => {
  return crypto.randomBytes(128).toString('base64');
};

export const SECRET = 'DEVA-REST-API-V2';

export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac('sha256', [salt, password].join('/'))
    .update(SECRET)
    .digest('hex');
};
