from flask import Flask 
app = Flask(__name__, template_folder='.')
@app.route("/") 
def home_view(): 
    return "main.py"