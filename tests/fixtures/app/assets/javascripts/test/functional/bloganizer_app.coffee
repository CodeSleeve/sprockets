
describe "bloganizer app", ->
    before ->
        TestHelper.setup();
        App.start()

    it "should be initialized to a route to nowhere", ->
        App.globals.defaultRoute.should.be.equal('!route:to:nowhere')

    it "should be initialized to all of current users posts route", ->
        App.start({defaultRoute: '!route:user:posts'})
        App.globals.defaultRoute.should.be.equal('!route:user:posts')
