import jwt from 'jsonwebtoken';

const MASTER_EMAIL = "xyz@gmail.com";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.rsvp_token;

  if (!token) {
    return res.status(401).json({ message: "No authorized session found." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if the email in the token is our master email
    if (decoded.email !== MASTER_EMAIL) {
      return res.status(403).json({ message: "Unauthorized email in token." });
    }

    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired session." });
  }
};