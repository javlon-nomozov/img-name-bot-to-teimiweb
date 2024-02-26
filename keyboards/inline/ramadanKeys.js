const { Markup } = require("telegraf");

module.exports = Markup.inlineKeyboard([
  [
    Markup.button.callback("1️⃣", "iftorlik"),
    Markup.button.callback("2️⃣", "saharlik"),
  ],
  [
    Markup.button.callback("3️⃣", "maleTabrik"),
    Markup.button.callback("4️⃣", "femaleTabrik"),
  ],
  [
    Markup.button.callback("5️⃣", "fastingcelebration"),
    Markup.button.callback("6️⃣", "ramadanCelebration"),
  ],
  [Markup.button.callback("🏠 bosh sahifaga", "home")],
]);
