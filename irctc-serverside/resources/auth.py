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

   return 200



