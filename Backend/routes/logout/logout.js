import { Router } from "express";

const logoutRouter = Router();

logoutRouter.post("/", (req, res) => {
  const cookie = req.cookies;
  const userCookie = cookie?.spotify_clone_user_token;

  if (!userCookie) {
    return res.status(401).json({
      message: "user is not logged in",
    });
  }

  try {
    if (!cookie) {
      return res.status(401).json({
        message: "user is not logged in",
      });
    }
    res.cookie("spotify_clone_user_token", "", {
      expires: new Date(0),
    });
    return res.status(200).json({
      message: "user logged out successfully",
      state: "logged out",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", Error: err.message });
  }
});

export default logoutRouter;
