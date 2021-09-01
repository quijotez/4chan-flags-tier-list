from app import app
from flask import render_template
app = Flask(__name__, template_folder='.')
@app.route("/") 
def index():
    return render_template("index.html")