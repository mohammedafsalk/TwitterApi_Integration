const crypto = require('crypto');

const createOAuthSignature = (method, url, parameters, consumerSecret, tokenSecret) => {
  const allParameters = { ...parameters, oauth_consumer_key: consumerKey, oauth_token: oauthToken, oauth_signature_method: 'HMAC-SHA1', oauth_timestamp: Math.floor(Date.now() / 1000), oauth_nonce: crypto.randomBytes(32).toString('hex'), oauth_version: '1.0' };

  const normalizedParameters = Object.keys(allParameters).sort().map(key => `${encodeURIComponent(key)}=${encodeURIComponent(allParameters[key])}`).join('&');

  const signatureBaseString = `${method.toUpperCase()}&${encodeURIComponent(url)}&${encodeURIComponent(normalizedParameters)}`;

  const signingKey = `${encodeURIComponent(consumerSecret)}&${encodeURIComponent(tokenSecret)}`;
  const hmac = crypto.createHmac('sha1', signingKey);
  hmac.update(signatureBaseString);
  const signature = hmac.digest('base64');

  return signature;
};

module.exports = { createOAuthSignature };
