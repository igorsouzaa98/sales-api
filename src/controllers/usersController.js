import User from "../models/Users/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UsersController {
  static signup = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      res.status(201).json({ message: "Usuário registrado com sucesso" });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Email ou senha inválidos" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Email ou senha inválidos" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
