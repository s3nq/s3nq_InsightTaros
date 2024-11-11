# backend/models/user.py

class User:
    def __init__(self, user_id, first_name, last_name, username):
        self.user_id = user_id
        self.first_name = first_name
        self.last_name = last_name
        self.username = username