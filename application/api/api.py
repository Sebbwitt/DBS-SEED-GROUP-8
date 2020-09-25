from flask import Flask, jsonify, request
import json
from pprint import pprint
from bson import json_util
from db import get_db
import requests

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

@api.route("/customerbase")
def check_customer_exist(): 
    nric = request.args.get('nric')
    check = database.find({'NRIC' : nric})
    customer_details = {}
    if check:
        output = [doc for doc in check]
        return json.dumps(output, default=json_util.default)
    else:
        return {}

@api.route('/addsignup')
def add_into_db():
    customer_details = request.form
    token = str(request.headers['Authorization'])

    check_status = requests.post('http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/validateForm', header=token, data=customer_details )

    if check_status == '200':
        
        check = db.insert_one(customer_details)

        if check :
            return jsonify({'result' : 'Success'})
        else:
            return jsonify({'result' : 'Error'})

    else:
        return jsonify({'result' : 'Error in adding '})
