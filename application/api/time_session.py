from flask import Flask, request, session
from datetime import timedelta

app = Flask(__name__)

@app.route('/login',methods=['POST'])
def login():
  #check if user is logged in by searching if token isset
  session.permanent = True
  app.permanent_session_lifetime = timedelta(minutes=15)
  session['start time'] = datetime.utcnow()

#this to be at any page in the website (idk if its possible)
#to detect how much longer that session left
if(datetime.utcnow() - session['start time'] < 5):
  restart_session()

@app.route('/', methods=['GET'])
def restart_session():
  #check if user needs extension
  default_option = False
  user_choice = request.form.get('extension', default_option)
  if(user_choice == True){
    #GET from http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/extendSession
    token = requests.get('http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/extendSession')
    flask.session.modified = True
    return token
  }

