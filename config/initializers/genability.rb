require 'mechanize'
require 'pry'
require 'json'

agent = Mechanize.new

page = agent.get('http://api.genability.com/rest/public/prices/522?appId=b9e6c102-ff3b-428a-bb9e-fcf85ac2cc1c&appKey=4ce2adfd-2e7b-4efa-bc9e-98882f08a77c&fromDateTime=2013-09-14T11:25:12.0-0700')

b = JSON.parse(page.content)

p = b.fetch('results')

rateAmount = p[1].fetch("rateAmount")

rateAmount *= 100

rateAmount = "$" + sprintf('%.2f', rateAmount)


