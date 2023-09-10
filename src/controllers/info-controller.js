const info = (req, res) => {
  return res.json({
    suceess: true,
    message: "API is live ",
    error: {},
    date: {},
  });
};

module.exports = { info };
