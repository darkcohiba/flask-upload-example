#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify
from flask_restful import Resource

# Local imports
from config import app, db, api, photos
# Add your model imports
from models import ImageFile

# Views go here!

@app.route('/')
def index():
    return '<h1>Phase 4 Project Server</h1>'

@app.route('/upload', methods=['POST'])
def upload():
    if 'photo' in request.files:
        filename = photos.save(request.files['photo'])
        new_image = ImageFile(image_file_path=filename)
        db.session.add(new_image)
        db.session.commit()
        return jsonify({"message": "File successfully uploaded.", "path": filename, "id": new_image.id}), 201
    return jsonify({"error": "No file part in the request."}), 400

@app.route('/photos', methods=['GET'])
def get_photos():
    images = ImageFile.query.all()
    images_list = [{'id': image.id, 'image_file_path': image.image_file_path} for image in images]
    return jsonify(images_list)



if __name__ == '__main__':
    app.run(port=5555, debug=True)

