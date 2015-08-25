from flask import Flask, Response, jsonify, url_for
	
import json
import urllib2, urllib, urlparse
import re
import traceback
import os.path

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/index', methods=['GET'])
def index():
	content = get_file('templates/index.html')
	return Response(content, mimetype="text/html")

def get_file(filename):  # pragma: no cover
    try:
        src = os.path.join(os.path.abspath(os.path.dirname(__file__)), filename)
        # Figure out how flask returns static files
        # Tried:
        # - render_template
        # - send_file
        # This should not be so non-obvious
        return open(src).read()
    except IOError as exc:
        return str(exc)

if __name__ == '__main__':
    app.run(debug=True)	
