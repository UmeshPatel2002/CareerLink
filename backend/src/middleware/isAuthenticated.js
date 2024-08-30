import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    
  try {
    console.log(req.cookies);
    const token = req.cookies["accessToken"];
    // console.log("token", token);
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
export default isAuthenticated;
