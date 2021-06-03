(function() {
    'use strict';

    // two way date binding (to UI)

    var vm = new Vue({
        el: '#app' ,
        data: {
            newItem: '',
            todos: []
                
            
        },

        watch: {
            // todos: function(){
            //  localStorage.setItem('todos' , JSON.stringify(this.todos));
            //  alert('Date saved!');
            // }
            todos: {
                handler: function() {
                    localStorage.setItem('todos' , JSON.stringify(this.todos));
                    // alert('Date saved!');
                },
                deep: true

                // save処理
            }
        },

        mounted: function() {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        },
        // 　　　読み出し処理

        methods: {
            addItem: function() {
                var item = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(item);
                this.newItem = '';
            },  
            deleteItem: function(index) {
                if (confirm('are you sure?')) {
                this.todos.splice(index, 1);
                }
            },  

            purge: function() {
                if (!confirm('delete finished?')) {
                return;
                }
                // this.todos = this.todos.filter(function(todo) {
                //     return !todo.isDone;
                // });
                this.todos = this.remaining;
            }
        },
        computed: {
            remaining: function() {

                return this.todos.filter(function(todo) {
                    return !todo.isDone;
                });
                
            }
        }
    })
  })();