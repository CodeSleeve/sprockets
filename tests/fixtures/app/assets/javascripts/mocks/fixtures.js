
window.FIXTURES = {}



/**
 * lookup a fixture based on what url we are given
 *
 * The way this works is it will use the url of the entity
 * passed to Backbone.sync(method, entity, options)
 *
 */
function GET_FIXTURE_FOR(url)
{
    switch (url)
    {
        case 'api/users/me/posts':              return fixture('posts');
        case 'api/users/me/read-later-posts':   return fixture('read_later_posts');
        case 'api/users/me/favorite-posts':     return fixture('favorite_posts');
        case 'api/users/me/stacks':             return fixture('stacks');
        case 'api/users/me/categories':         return fixture('categories', [69, 70, 71, 72]);
        case 'api/users/me/preferences':        return fixture('perferences', 1);

        case 'api/categories/69/posts':         return fixture('posts', 1);
        case 'api/categories/70/posts':         return fixture('posts', 2);
        case 'api/categories/71/posts':         return fixture('posts', 1);
        case 'api/categories/72/posts':         return fixture('posts', 2);

        case 'api/stacks/7/posts':              return fixture('posts', 1);
        case 'api/stacks/8/posts':              return fixture('posts', 2);
        case 'api/stacks/9/posts':              return fixture('posts', 1);

        case 'api/blogs/1/posts':              return fixture('posts', [1, 2, 3]);
        case 'api/blogs/2/posts':              return fixture('posts', 3);
        case 'api/blogs/3/posts':              return fixture('posts', 2);
        case 'api/blogs/4/posts':              return fixture('posts', [1, 2, 3]);
        case 'api/blogs/5/posts':              return fixture('posts', 3);
        case 'api/blogs/6/posts':              return fixture('posts', 2);
        case 'api/blogs/7/posts':              return fixture('posts', [1, 2, 3]);
    }

    return null;
}



/**
 * function to keep code cleaner in the GET_FIXTURE_FOR lookup
 */
function fixture(fixture_key, ids)
{
    if (typeof ids === 'undefined') {
        return FIXTURES[fixture_key];
    }

    if (!_.isArray(ids)) {
        ids = [ids];
    }
    
    return _.filter(FIXTURES[fixture_key], function(obj) {
        return $.inArray(obj.id, ids) > -1;
    });
}



/**
 * This is a backbone sync which uses a FIXTURE array
 * to store and manipulate data requests sent to and from
 * the server... I do this to control my data flow and I
 * completely 
 * 
 * @param  {[type]} Backbone [description]
 * @return {[type]}          [description]
 */

(function(Backbone) {
    var _sync = Backbone.sync;

    function promise(entity, options)
    {
        entity.promise = new $.Deferred;
        entity.promise.resolve();

        return entity.promise;
    }

    function _create(entity, options)
    {
        return _sync("create", entity, options);
    }

    function _read(entity, options)
    {
        var data = GET_FIXTURE_FOR(entity.url);

        if (data === null) 
        {
            console.warn('failed to read fixture falling back on backbone.sync with ', entity.url);
            return _sync("read", entity, options);
        }
        else
        {
            if (entity.add) {
                data = entity.parse(data);
                entity.add(data);               // Backbone collection
            } else if (data[0]) {
                data = entity.parse(data[0]);
                entity.set(data);               // Backbone model
            }
        }

        return promise(entity, options);
    }

    function _update(entity, options)
    {
        return _sync("update", entity, options);
    }

    function _delete(entity, options)
    {
        return _sync("delete", entity, options);
    }

    Backbone.sync = function(method, entity, options)
    {
        switch (method)
        {
            case "create":
                return _create(entity, options);
            case "read":
                return _read(entity, options);
            case "update":
                return _update(entity, options);
            case "delete":
                return _delete(entity, options);
        }

        return _sync(method, entity, options);
    }

})(Backbone);
