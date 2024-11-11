# backend/db.py

import asyncpg
from config import DB_URL

class Database:
    def __init__(self):
        self.pool = None

    async def connect(self):
        self.pool = await asyncpg.create_pool(dsn=DB_URL)

    async def close(self):
        await self.pool.close()

db = Database()