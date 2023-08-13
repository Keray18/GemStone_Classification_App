from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import tensorflow as tf
import tensorflow_hub as hub 
from tensorflow.keras.models import load_model
import cv2
import os
import numpy as np
import pathlib
from PIL import Image
import io



app = Flask(__name__)
CORS(app, origins='http://localhost:3000')



model = load_model('gemstone_model.h5', custom_objects={'KerasLayer': hub.KerasLayer})

# Getting class names
data_dir = pathlib.Path('train')
class_labels = np.array(sorted([item.name for item in data_dir.glob('*')]))



@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    if request.method == 'POST':
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})

        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'})

        # Extract image data from FileStorage object
        img_data = file.read()

        # Load the image using PIL
        img = Image.open(io.BytesIO(img_data))
        img = img.resize((224, 224))  # Resize as needed

        img_array = np.array(img)
        img_array = img_array / 255.0  # Normalize image

        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)
        predicted_class_index = np.argmax(prediction)
        predicted_class = class_labels[predicted_class_index]

        return jsonify({'predicted_class': predicted_class})



if __name__ == '__main__':
    app.run(debug=True)
