let header = new Vue({
    el: '#header',
    data: {
        nav_is_opened: false,
        is_logged_in: false,
        name: "Name Name Name Name Name Name"
    },
    computed: {
        navigation_class: function() {
            return "navigation_mobile navigation" +
                (this.nav_is_opened ? " navigation_visible": "");
        },
        navigation_transparent_background_class: function() {
            return "navigation_transparent_background" +
                (this.nav_is_opened ? " navigation_transparent_background_active" : "");
        }
    },
    methods: {
        toggleNav: function() {
            this.nav_is_opened = !this.nav_is_opened;
        }
    }
});