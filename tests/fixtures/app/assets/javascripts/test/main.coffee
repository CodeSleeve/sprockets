

chai.should()

TestHelper = setup: ->
    $("div#mocha_test").remove()
    $("body").append '<div id="mocha_test"></div>'
    $("div#mocha_test").append(JST['test/main']())
    _.clone App