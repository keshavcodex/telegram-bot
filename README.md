# Telegram Weather Update Bot

This project is a Telegram bot developed using Node.js that provides daily weather updates to subscribed users. It also includes an admin panel for managing bot settings and user accounts.

## Features

- Users can subscribe to receive daily weather updates.
- Users can unsubscribe from receiving weather updates.
- Admin panel for managing bot settings and user accounts.

## Prerequisites

- Node.js installed on your machine
- Telegram bot token obtained from the BotFather

## Installation

1. Clone the repository:

```shell
git clone https://github.com/keshavcodex/telegram-bot.git
```

2. Navigate to the project directory:

```shell
cd telegram-bot
```

3. Install the dependencies:

```shell
npm install
```

4. Create a `.env` file in the root directory and add the following variables:

```plaintext
BOT_PORT=3000
ADMIN_PORT=4000

BOT_TOKEN=<YOUR-BOT-TOKEN>
WEATHER_API=<YOUR-WEATHER-API>
```

## Usage

1. Start the bot server:

```shell
npm app.js
```

2. Start the admin panel server:

```shell
npm run admin
```

3. Access the bot in Telegram and search for your bot's username.

4. Use the following commands in the Telegram chat:

- `/start`: Starts the bot and displays a welcome message.
- `/subscribe`: Subscribes to receive daily weather updates.
- `/unsubscribe`: Unsubscribes from receiving weather updates.

5. Access the admin panel by opening your web browser and navigating to `http://localhost:4000`.

6. Use the admin panel to manage bot settings and user accounts.

## Contributing

Contributions are welcome! If you have any suggestions or improvements for this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- This project was inspired by the need for daily weather updates on Telegram.
- Special thanks to the developers and contributors of the Node.js, Telegram Bot API, and Express libraries.

## Contact

For any inquiries or questions, please contact [Keshav Kumar](mailto:keshavcodex@gmail.com).
