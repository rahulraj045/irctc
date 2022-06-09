from .db import db

class User(db.Document):
    email = db.EmailField(required=False, unique=True)
    password = db.StringField(required=False, min_length=6)
    user_data = db.DictField(required=False)


    def check_password(self, password):
        return self.password == password




