const db = require("../config/database");
const encrypt = require("../helper/encrypt");

exports.get = async (req, res) => {
    const { rows } = await db.query(
        `SELECT * FROM todo`,
    );
    res.status(201).send({
        status: 201,
        data: rows,
        message: "GET successfully!",
    });
};

exports.encrypt = async (req, res) => {
    const { word } = req.body;
    res.status(200).send({
        encrypted_token: encrypt(word),
    });
};
