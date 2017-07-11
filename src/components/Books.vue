<template>
    <div>
        <h1>Books list</h1>

        <ul>
            <router-link tag="li" :to="'/books/' + book.id" v-for="book in books">
                <a>{{book.title}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        // Initialize state of component
        data() {
            return {
                books: []
            }
        },
        // Use lifecycle hook created to get list of books
        created() {
            this.$http.get('')
                .then(({data}) => this.books = data)
                .catch(error => console.error('Error: ', error))
        }
    }
</script>