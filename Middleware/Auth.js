// Authentication
const authenticateToken = (req, res) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Acces Denied");
  jwt.verify(token, "");
};
