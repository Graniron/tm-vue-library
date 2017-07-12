<template>
    <div class="page-cont">
        <h2>Books list</h2>

        <div class="collection">
            <router-link tag="a"
                         class="collection-item"
                         :to="'/books/' + book.id"
                         v-for="book in books">
               {{book.title}}
            </router-link>
        </div>
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