import json
from flask import request
from database.models import User
from flask_restful import Resource
from flask import Response, request

class ValidateApi(Resource):
    def patch(self):
        body = request.get_json()
        user = User.objects.get(email=body.get('email'))
        userData = user.user_data
        ticketDetails = userData["ticketDetails"]
        for ticket in ticketDetails:
            if ticket["seatNumber"] == body.get('seatNumber'):
                ticket["validationStatus"] = '1'
        userData["ticketDetails"] = ticketDetails
        user.update(user_data = userData)
        user.save
        return 200
        