from flask import Flask
from flask_pymongo import pymongo

def get_db():
    client = pymongo.MongoClient("mongodb+srv://admin:adminpassword@dbs-seed-t8.itw2k.mongodb.net/customerBase?retryWrites=true&w=majority")
    database = client.customerBase.customerBase
    return database