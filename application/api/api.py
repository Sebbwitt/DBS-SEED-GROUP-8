from flask import Flask

app = Flask(__name__)

@app.route('/')
def print_hello_world():
    return {'Hello World'}