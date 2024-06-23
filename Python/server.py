import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from keras.preprocessing.image import img_to_array

from PIL import Image
import io
import matplotlib.pyplot as plt
import matplotlib.image as mpimg


app = Flask(__name__)
CORS(app)

cnn_model = load_model('CNN/CNN.h5')
BIlstm_model=load_model('BIlstm/BiLSTM2.h5')
fusion_model=load_model('Fusion/Fusion.h5')
with open('BIlstm/scaler_model.pkl', 'rb') as file:
    loaded_scaler = pickle.load(file)


@app.route("/sensor",methods=['POST'])
def predict_sensor():
    data=request.get_json(force=True)
    inputs = np.array([[data['0'],data['1'],data['2'],data['3'],data['4'],data['5'],data['6']]])
    input_data=loaded_scaler.transform(inputs)
    print(input_data)
    input_data_reshaped = input_data.reshape(input_data.shape[0], 1, (input_data.shape[1])) 
    pred=BIlstm_model.predict(input_data_reshaped)
    argmax_predictions = np.argmax(pred, axis=1)
    return jsonify(str(argmax_predictions[0]))

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


@app.route("/fusion", methods=['POST'])
def predict_fusion():
    image_file = request.files['image']
    image = Image.open(io.BytesIO(image_file.read()))
    image = image.resize((600, 400))
    image_array = img_to_array(image)
    image_array = np.expand_dims(image_array, axis=0)


    feature1 = request.form['1']
    feature2 = request.form['2']
    feature3 = request.form['3']
    feature4 = request.form['4']
    feature5 = request.form['5']    
    feature6 = request.form['6']
    feature7 = request.form['7']
    inputs = np.array([[feature1,feature2,feature3,feature4,feature5,feature6,feature7]])
    input_data=loaded_scaler.transform(inputs)
    input_data_reshaped = input_data.reshape(input_data.shape[0], 1, (input_data.shape[1]))
    pred=fusion_model.predict([input_data_reshaped,image_array])
    argmax_predictions = np.argmax(pred, axis=1)
    return jsonify(str(argmax_predictions[0]))




if __name__ == '__main__':
    app.run(port=5000, debug=True)
