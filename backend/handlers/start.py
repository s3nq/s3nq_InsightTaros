# backend/handlers/start.py

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ContextTypes
from config import FRONTEND_URL
from loguru import logger
from db import db

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user

    # Логируем информацию о пользователе
    logger.info(f"Пользователь {user.id} запустил бота.")

    # Сохраняем пользователя в базе данных
    async with db.pool.acquire() as connection:
        await connection.execute(
            "INSERT INTO users(user_id, first_name, last_name, username) VALUES($1, $2, $3, $4) ON CONFLICT (user_id) DO NOTHING",
            user.id, user.first_name, user.last_name, user.username
        )

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