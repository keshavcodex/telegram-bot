import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import weatherReport from "./weather.js";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const PORT = process.env.BOT_PORT;
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to telegram bot page");
});
// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message =
    "Welcome to the weather update bot! Type /subscribe to receive daily weather updates.";
  bot.sendMessage(chatId, message);
});

// Handle /subscribe command
bot.onText(/\/subscribe/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(
    chatId,
    'You have subscribed to daily weather updates. Please Enter the location as "location=Your city name"'
  );
  bot.sendMessage(chatId, "To get update of any city just say city name.");
});

// Handle incoming messages

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text.toLowerCase();
  let city = "";
  var isCityAvilable = false;
  // setting location
  if (message.startsWith("location=")) {
    isCityAvilable = true;
    city = message.substring(9, message.length);
    bot.sendMessage(chatId, `Your city has been updated to ${city}`);
    console.log(city);
    // fetching weather of other locations
  } else if (message != "/subscribe" && message != "/start") {
    isCityAvilable = true;
    city = message;
  }
  if (isCityAvilable) {
    // Fetching weather report
    var report = await weatherReport(city);
    bot.sendMessage(chatId, report);
  }
  if (message === "/unsubscribe") {
    bot.sendMessage(
      chatId,
      "You have unsubscribed from daily weather updates."
    );
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
