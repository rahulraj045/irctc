import json
from flask import request
from database.models import User
from flask_restful import Resource
from flask import Response, request



class LoginApi(Resource):
 def post(self):
   body = request.get_json()
   user = User.objects.get(email=body.get('email'))
   user_json = json.dumps(user.user_data, indent = 4)
   authorized = user.check_password(body.get('password'))
   print(user_json)
   if not authorized:
     return {'error': 'Email or password invalid'}, 401

   return Response(user_json, mimetype="application/json", status=200)



