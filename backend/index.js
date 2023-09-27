// Importez vos modèles
require("./UserModel");
require("./ProductModel");
require("./OrderModel");

// Importez votre instance Sequelize
const { sequelize } = require("../../config/database");

// Synchronisez vos modèles avec la base de données
sequelize
  .sync({ force: true })  // Utilisez { force: true } uniquement en développement !
  .then(() => {
    // Log en cas de succès
    console.info("Tables created successfully!");
  })
  .catch((error) => {
    // Log en cas d'erreur
    console.warn("Unable to create tables:", error);
  });
