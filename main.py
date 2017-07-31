#!/usr/bin/env python

import jinja2
import webapp2
from google.appengine.api import users

env=jinja2.Environment(loader=jinja2.FileSystemLoader(''))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        var = {'name': 'Austin'}
        if user:
            greeting = ('Welcome, %s! (<a href="%s">sign out</a>)' %
                (user.nickname(), users.create_logout_url('/')))
            var = {'loginStat': 'In', 'userName': user.nickname(), 'correctLink': users.create_logout_url('/')}
        else:
            var = {'correctLink': users.create_login_url('/')}
        template = env.get_template('Home.html')
        self.response.write(template.render(var))

class JokesHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('jokes.html')
        self.response.write(template.render())


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/jokes', JokesHandler),
], debug=True)
