<template>
    <div class="page-cont">
        <h2>Book form</h2>

        <form @submit.prevent="onSubmit">
            <input type="text" placeholder="Title" v-model="book.title">
            <input type="text" placeholder="Author" v-model="book.author">
            <button class="waves-effect waves-light btn">Save</button>
        </form>
        <br>
        <button class="waves-effect waves-light btn red"
                v-if="bookId"
                @click="deleteBook">Delete book</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                book: {}
            }
        },

        created() {
            this.getStateStatus();
        },
        methods: {
            // During component creation check if its edit state
            getStateStatus() {
                this.bookId = this.$route.params.id;
                if(this.bookId) {
                    this.$http.get(`${this.bookId}`)
                        .then(({data}) => this.book = data)
                        .catch(error => console.error('Error: ', error))
                } else {
                    this.book = {title: '', author: ''}
                }
            },
            onSubmit() {
                if(this.book.author && this.book.title) {
                    if(this.bookId) {
                        this.updateBook();
                    } else {
                        this.createBooks();
                    }

                }
            },
            createBooks() {
                this.book.id = + new Date();
                this.$http.post('', this.book)
                    .then(() => this.$router.push('/books'))
                    .catch(error => console.error('Error: ', error))
            },
            updateBook() {
                this.$http.put(`${this.bookId}`, this.book)
                    .then(() => this.$router.push('/books'))
                    .catch(error => console.error('Error: ', error))
            },
            deleteBook() {
                this.$http.delete(`${this.bookId}`)
                    .then(() => this.$router.push('/books'))
                    .catch(error => console.error('Error: ', error))
            }
        },
        watch: {
            // Listen to route changes
            "$route"(to, from) {
                this.getStateStatus();
            }
        }
    }
</script>