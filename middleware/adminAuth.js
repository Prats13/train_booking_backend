const SECRET_ADMIN_KEY = process.env.SECRET_ADMIN_KEY; 

function adminAuthMiddleware(req, res, next) {
  const providedApiKey = req.headers['x-api-key'];

  if (providedApiKey !== SECRET_ADMIN_KEY) {
    return res.status(403).json({ error: 'Access denied. Invalid API key.' });
  }

  next();
}

module.exports = adminAuthMiddleware;
