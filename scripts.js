var list = []

const ToDoList = {
    data() {
        return {
            list: window.list,
            newItem: {
                done: false
            }
        }
    },
    methods: {
        cleanAll: function () {
            this.list = []
        },

        addItem: function () {
            if (this.newItem.text) {
                this.list.push(this.newItem)
            } else {
                alert('The field must be filled')
            }
            this.newItem = {
                text: null,
                done: false
            }
            localStorage.setItem('list', JSON.stringify(this.list))
        }
    },
    created() {
        this.list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : this.list
    },
    updated() {
        localStorage.setItem('list', JSON.stringify(this.list))
    }

}

Vue.createApp(ToDoList).mount('#app')