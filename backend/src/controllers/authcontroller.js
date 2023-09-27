const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

class AuthController {
  static setCookie(user, res) {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("Failed login !");
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        username: user.username,
      },
      jwtSecret,
      {
        expiresIn: "1d",
      }
    );

    return res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24,
    });
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(500)
          .send({ error: "username or email is not defined !" });
      }

      const user = await UserModel.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res
          .status(404)
          .send({ error: "username or email are incorrect !" });
      }

      const isCorrectPassword = bcrypt.compareSync(password, user.password);

      if (!isCorrectPassword) {
        return res
          .status(404)
          .send({ error: "username or email are incorrect !" });
      }

      AuthController.setCookie(user, res);

      return res.status(200).send({
        userId: user.id,
        email: user.email,
        username: user.username,
        profile_image: user.profile_image,
        birthdate: user.birthdate,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async register(req, res) {
    try {
      const { username, email, password, profileImage, birthdate } = req.body;

      if (!username || !email || !password || !birthdate) {
        return res.status(500).send({
          error: "username, email, birthdate or password is not defined !",
        });
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);

      const user = await UserModel.create({
        username,
        email,
        password: hashPassword,
        profile_image: profileImage || null,
        birthdate,
      });

      AuthController.setCookie(user, res);

      return res.status(200).send(user);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }
}

module.exports = AuthController;
