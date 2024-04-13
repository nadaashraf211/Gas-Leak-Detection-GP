import pickle
import numpy as np
from flask import Flask, render_template, request, jsonify
from keras.models import load_model
from keras.preprocessing.image import img_to_array
from keras.applications.vgg16 import preprocess_input
from PIL import Image
import io


app = Flask(__name__)

cnn_model = load_model('CNN/CNN.h5')
BIlstm_model=load_model('BIlstm/BiLSTM2.h5')
with open('BIlstm/scaler_model.pkl', 'rb') as file:
    loaded_scaler = pickle.load(file)


@app.route("/thermal", methods=['POST'])
def predict_therm():
    image_file = request.files['image']
    image = Image.open(io.BytesIO(image_file.read()))
    image = image.resize((600, 400))
    image_array = img_to_array(image)
    image_array = np.expand_dims(image_array, axis=0)
    pred = cnn_model.predict(image_array)
    print("print ")
    print(pred)
    argmax_predictions = np.argmax(pred, axis=1)
    return jsonify(str(argmax_predictions[0]))



@app.route("/sensor",methods=['POST'])
def predict_sensor():
    data=request.get_json(force=True)
    inputs = np.array([[data['0'],data['1'],data['2'],data['3'],data['4'],data['5'],data['6']]])
    input_data=loaded_scaler.transform(inputs)
    input_data_reshaped = input_data.reshape(input_data.shape[0], 1, (input_data.shape[1]))  # Assuming 6 features per row
    pred=BIlstm_model.predict(input_data_reshaped)
    argmax_predictions = np.argmax(pred, axis=1)
    return jsonify(str(argmax_predictions[0]))


if __name__ == '__main__':
    app.run(port=5000, debug=True)