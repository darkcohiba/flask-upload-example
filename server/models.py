from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class ImageFile(db.Model, SerializerMixin):
    __tablename__ = 'image_file_table'
    id = db.Column(db.Integer, primary_key=True)
    image_file_path = db.Column(db.String, nullable=False)


