# backend/bot.py

import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
from config import BOT_TOKEN, FRONTEND_URL

# Настройка логирования
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Обработчик команды /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    logger.info(f"Пользователь {user.id} запустил бота.")

    keyboard = [
        [
            InlineKeyboardButton(
                text="Начать гадание на Таро",
                web_app={'url': FRONTEND_URL}
            )
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        f"Привет, {user.first_name}! Добро пожаловать в TarotBot 🔮.\n"
        "Нажми на кнопку ниже, чтобы начать гадание.",
        reply_markup=reply_markup
    )

def main():
    application = ApplicationBuilder().token(BOT_TOKEN).build()

    application.add_handler(CommandHandler("start", start))

    logger.info("Бот запущен и ожидает сообщения...")
    application.run_polling()

if __name__ == '__main__':
    main()