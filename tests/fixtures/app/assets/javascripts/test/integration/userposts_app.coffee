
describe "bloganizer app", ->

    beforeEach ->
        app = TestHelper.setup();
        app.start();

    it "should not have global state", ->
        app.reqres.setHandler 'blog:entities', ->
            return 'awesome'

    it "this will let us know if we have global state or not", ->
        outcome = app.request 'blog:entities'
        dump(outcome)
