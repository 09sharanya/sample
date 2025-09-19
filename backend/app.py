from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# Read env variables
APP_ENV = os.getenv("APP_ENV", "dev")
SECRET_KEY = os.getenv("SECRET_KEY")
DATABASE_URL = os.getenv("DATABASE_URL")

app.config['SECRET_KEY'] = SECRET_KEY
app.config['DATABASE_URL'] = DATABASE_URL

# Example GET route
@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({
        "message": f"Hello from Flask ({APP_ENV})!",
        "database": DATABASE_URL
    })

# Example POST route
# @app.route("/api/data", methods=["POST"])
# def receive_data():
#     data = request.json
#     return jsonify({"received": data})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
