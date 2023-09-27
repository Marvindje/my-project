const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const OrderModel = sequelize.define(
  "order",
  {
    // ID de l'utilisateur qui a passé la commande
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // nom de la table des utilisateurs
        key: "id",
      },
    },
    // Montant total de la commande
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // Statut de la commande (ex: 'en attente', 'expédié', etc.)
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "en attente",
    },
    // Date de la commande
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // Date de livraison estimée
    estimatedDeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { OrderModel };
