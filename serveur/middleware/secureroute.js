const jsonwebtoken = require("jsonwebtoken");

module.exports = function secureRoute(req, res, next) {
    if (!req.headers.authorization)
      return res
        .status(403)
        .send({ error: "Access denied! you must be authentified!" });
  
    const [, token] = req.headers.authorization.split(" ");
  
    try {
      const verifiedToken = jsonwebtoken.verify(
        token,
        "COLLABORATEUR_APP_POWAAAA_SECRET"
      );
      next();
    } catch (e) {
      return res.status(403).send({ error: "access denied! invalid token" });
    }
  }