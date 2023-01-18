const jwt = require("jsonwebtoken");
const authService = require("../services/auth.services");

require("dotenv").config();

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await authService.login(email, password);
        // {isValid: true/false}

        if (response.isValid) {
            const data = {
                email: response.result.email,
                username: response.result.username,
                id: response.result.id,
            };
            //firmamos un nuevo token
            const token = jwt.sign(data, process.env.JWT_SECRET, {
                algorithm: "HS512",
                expiresIn: "1m",
            }); // para crear un token se necesita,//^ data, la palabra clave, el tipo de algoritmo de incriptación, el tiempo en que expira el token

            data.token = token;
            console.log("token: ", token);
            res.json(data);
        } else {
            res.status(401).json({ message: "Credential invalid" });
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    userLogin,
};
