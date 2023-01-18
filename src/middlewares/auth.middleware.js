const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers; // el token se envía en los headers de la petición
    token = token.replace("Bearer ", ""); // con esto borro la palabra Bearer con el espacio para solo mantener el token
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, { algorithms: "HS512" }, (err, decoded) => {
        if (err) {
            res.status(400).json({
                error: "invalid token",
                message: "El token no es valido, envía un token correcto",
            });
        } else {
            console.log(decoded);
            next(); // para que se ejecute el siguiente middleware
        }
    }); //*cuatro parametros, el token, la palabra secreta, y el algoritmo de codificación, callback
};

module.exports = authMiddleware;

//^ vamos a validar el token
