const apiAdapter = require("../../apiAdapter");
const { URL_ARKFLEET_EQUIPMENTS } = process.env;

const api = apiAdapter(URL_ARKFLEET_EQUIPMENTS);

module.exports = async (req, res) => {
  try {
    const equipments = await api.get("/equipments");
    return res.json(equipments.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
