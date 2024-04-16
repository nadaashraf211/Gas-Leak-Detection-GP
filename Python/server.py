import pickle
import numpy as np
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from keras.preprocessing.image import img_to_array
from keras.applications.vgg16 import preprocess_input
from PIL import Image
import io


app = Flask(__name__)
CORS(app)

cnn_model = load_model('CNN/CNN.h5')
BIlstm_model=load_model('BIlstm/BiLSTM2.h5')
with open('BIlstm/scaler_model.pkl', 'rb') as file:
    loaded_scaler = pickle.load(file)


@app.route("/thermal", methods=['POST'])
def predict_therm():
    label_mapping = {0: 'Mixture', 1:'NoGas' , 2: 'Perfume', 3: 'Smoke'}
    image_file = request.files['image']
    image = Image.open(io.BytesIO(image_file.read()))
    image = image.resize((600, 400))
    image_array = img_to_array(image)
    image_array = np.expand_dims(image_array, axis=0)
    pred = cnn_model.predict(image_array)
    argmax_predictions = np.argmax(pred, axis=1)
    predicted_labels_mapped = [label_mapping[label] for label in argmax_predictions]
    return jsonify(str(argmax_predictions[0]))



@app.route("/sensor",methods=['POST'])
def predict_sensor():
    #label_mapping = {'NoGas': 0, 'Mixture': 1, 'Perfume': 2, 'Smoke': 3}
    label_mapping = {0: 'NoGas', 1: 'Mixture', 2: 'Perfume', 3: 'Smoke'}

    data=request.get_json(force=True)
    inputs = np.array([[data['0'],data['1'],data['2'],data['3'],data['4'],data['5'],data['6']]])
    input_data=loaded_scaler.transform(inputs)
    input_data_reshaped = input_data.reshape(input_data.shape[0], 1, (input_data.shape[1]))  # Assuming 6 features per row
    pred=BIlstm_model.predict(input_data_reshaped)
    argmax_predictions = np.argmax(pred, axis=1)
    predicted_labels_mapped = [label_mapping[label] for label in argmax_predictions]
    return str(predicted_labels_mapped)



if __name__ == '__main__':
    app.run(port=5000, debug=True)
