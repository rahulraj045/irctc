import json
from flask import request
from database.models import User
from flask_restful import Resource
from flask import Response, request



class LoginApi(Resource):
  def post(self):
    body = request.get_json()
    user = User.objects.get(email=body.get('email'))
    authorized = user.check_password(body.get('password'))
    if not authorized:
      return {'error': 'Email or password invalid'}, 401
    if user.type == 'passenger':
      user.user_data["type"] = user.type
      user_json = json.dumps(user.user_data, indent = 4)
      return Response(user_json, mimetype="application/json", status=200)

    elif user.type == 'tc':
      user.user_data["type"] = user.type
      user.save()
      trainData = []
      for user in User.objects:
        if user.type == 'passenger':
          trainData += user.user_data["ticketDetails"]
      user.user_data["ticketDetails"] = trainData
      user.save()
      user_json = json.dumps(user.user_data, indent = 4)
      return Response(user_json, mimetype="application/json", status=200)

  
  
  def get(self):
    body = request.args
    user = User.objects.get(email=body.get('email'))
    user_json = json.dumps(user.user_data, indent = 4)
    return Response(user_json, mimetype="application/json", status=200)





