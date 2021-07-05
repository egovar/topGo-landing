const header = new Vue({
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

const client_form = new Vue({
    el: '#client_form',
    data: {
        send_disabled: false,
        pop_up_visible: false,
        name: "",
        phone: "",
        email: "",
        message: ""
    },
    methods: {
        sendClientForm: function() {
            fetch('https://topgo.club/api/form', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.name,
                    text: this.message,
                    phone: this.phone,
                    mail: this.email
                })
            })
                .then(res => {
                    if (res.ok) {
                        this.name = "";
                        this.phone = "";
                        this.email = "";
                        this.message = "";
                        this.pop_up_visible = true;
                        alert('Заявка успешно отправлена!');
                    }
                    else alert('При отправке формы произошла ошибка. Попробуйте ещё раз');
                    this.send_disabled = false;
                })
                .catch(err => {
                    alert(err);
                    this.send_disabled = false;
                });
            this.send_disabled = true;
        },
        closePopUp: function() {
            this.pop_up_visible = false;
        }
    }
})

const courier_form = new Vue({
    el: '#courier_form',
    data: {
        send_disabled: false,
        pop_up_visible: false,
        name: "",
        phone: "",
        email: "",
        message: ""
    },
    methods: {
        sendCourierForm: function() {
            fetch('https://topgo.club/api/form', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.name,
                    text: this.message,
                    phone: this.phone,
                    mail: this.email
                })
            })
                .then(res => {
                    if (res.ok) {
                        this.name = "";
                        this.phone = "";
                        this.email = "";
                        this.message = "";
                        this.pop_up_visible = true;
                        alert('Заявка успешно отправлена!');
                    }
                    else alert('При отправке формы произошла ошибка. Попробуйте ещё раз');
                    this.send_disabled = false;
                })
                .catch(err => {
                    alert(err);
                    this.send_disabled = false;
                });
            this.send_disabled = true;
        },
        closePopUp: function() {
            this.pop_up_visible = false;
        }
    }
});