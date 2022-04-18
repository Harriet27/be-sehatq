const db = require("../config/database");

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