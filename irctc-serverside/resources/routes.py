from .auth import LoginApi
from .validate import ValidateApi

def initialize_routes(api):
    api.add_resource(LoginApi, '/login')
    api.add_resource(ValidateApi, '/validate')
    
