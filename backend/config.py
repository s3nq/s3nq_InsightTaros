# backend/config.py

import os

BOT_TOKEN = os.getenv('BOT_TOKEN', '7864348412:AAHr2Qmiq86V-7dZRBHHQhoH0MqhIuiZYsk')
DB_URL = os.getenv('DB_URL', 'postgresql://user:password@localhost:5432/tarotdb')
FRONTEND_URL = os.getenv('FRONTEND_URL', 'https://s3nqinsignt-taros.vercel.app/')