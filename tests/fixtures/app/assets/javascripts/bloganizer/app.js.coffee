
@App = Marionette.Application.extend()

@createApplication = ->
    app = new App

    app.deferreds = []

    app.url = window.location.pathname

    app.on "initialize:before", (options = {}) ->
        if not options.defaultRoute?
            options.defaultRoute = "!route:to:nowhere"
        @globals = options

    app.on "initialize:after", (options) ->
        app.addRegions
            Region_HeaderNavbar: "#header-region .header-nav"
            Region_MainNavbar: "#header-region .main-nav"
            Region_SidebarFlyout: "#sidebar-flyout-region"
            Region_ReaderNavbar: "#reader-top-region .js-navigation"
            Region_ContentHeader: "#reader-top-region .js-name"
            Region_Sidebar: "#sidebar-main-region"
            Region_Content: app.Services.InfiniteScroll.Region.extend({el: "#items-region"})
            Region_Dialog: Marionette.Region.Dialog
            Region_Main: "#main-region"

        app.execute "when:done", app.deferreds, ->
            app.startHistory()
            app.execute app.globals.defaultRoute unless app.getCurrentRoute()

    return app