from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)

client = MongoClient(
    'mongodb+srv://sourav:kumar@cluster0.a4grlch.mongodb.net/crudpython?retryWrites=true&w=majority')

db = client['crudpython']

CORS(app)  # prevent the cors error


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users', methods=['POST', 'GET'])
def data():

    if request.method == 'POST':
        body = request.json
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId']

        db['users'].insert_one({
            'firstName': firstName,
            'lastName': lastName,
            'emailId': emailId
        })

        return jsonify({
            'status': 'Data is posted on MongoDB',
            'firstName': firstName,
            'lastName': lastName,
            'emailId': emailId
        })


if __name__ == '__main__':
    app.debug = True
    app.run()
