from flask import Flask, jsonify, request
import json
from pprint import pprint
from bson import json_util
from db import get_db

api = Flask(__name__)

database = get_db()

@api.route('/')
def print_hello_world():
    return {'msg': 'Hello World.'}

#test to read data to the data base
@api.route("/test")
def test():
    s = database.find({})
    output = []
    for customer in s:
        output.append({'name' : customer['customerName']})

    return jsonify({"result" : output}) 

@api.route("/customerBase")
def check_customer_exist(): 
    nric = request.args.get('nric')
    nric = nric[1:-1]
    check = database.find({'NRIC' : nric})
    customer_details = {}
    if check:

        output = [doc for doc in check]
        return json.dumps(output, default=json_util.default)
    else:
        return {}