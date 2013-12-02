/**
 * This is where I store a list of commonly used comparators
 * and a some nice functions to help out with those comparators
 */
Backbone.SortableCollection = Backbone.Collection.extend({

    comparator : function()
    {
        return this.comparators[this.comparators.current].apply(this, arguments);
    },

    comparators : {
        current : 'a_to_z',

        a_to_z : function(model1)
        {
            if (!model1.get('title')) return model1.id;
            return model1.get('title').toLowerCase();
        },
        z_to_a : function(model1, model2)
        { 
            if (!model1.get('title')) return model.id;
            if (model1.get('title').toLowerCase() > model2.get('title').toLowerCase()) return -1;
            if (model1.get('title').toLowerCase() < model2.get('title').toLowerCase()) return 1;
            return 0;
        },

        popularity : function(model1)
        {
            return Math.random(1000);
        },

        most_unread_posts : function(model1) {
            return -1  * model1.get('unread_count');
        },

        random : function(model1)
        {
            return Math.random(1000);
        }

    },

    toggleAlphabetical : function()
    {
        if (this.comparators.current == 'a_to_z') {
            this.comparators.current = 'z_to_a';
        } else {
            this.comparators.current = 'a_to_z';
        }

        this.comparator = this.comparators[this.comparators.current];
        this.sort();
    }


});