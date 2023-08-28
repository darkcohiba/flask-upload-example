#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker


# Local imports
from app import app
from models import db, ImageFile

def clear_database():
    db.session.query(ImageFile).delete()
    db.session.commit()

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        # db.create_all()
        print("deleting seeds...")
        clear_database()
        # Seed code goes here!
