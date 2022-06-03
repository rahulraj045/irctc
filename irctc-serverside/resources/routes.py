from .auth import LoginApi

def initialize_routes(api):
    api.add_resource(LoginApi, '/login')
    
