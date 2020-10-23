<template>
    <main class="simple-blog_create">
        <transition name="fade">
            <div v-if="confirmation.type" class="simple-blog_confirmation-modal" :class="confirmation.type">
                <div class="simple-blog_confirmation-frame">
                    {{confirmation.message}}
                </div>
            </div>
        </transition>
        <h1>Create a post</h1>
        <form @submit.prevent="sendPostContent">
            <section class="simple-blog_create-input title">
                <label for="post-title">Post Title</label>
                <input v-model="title" id="post-title" type="text">
            </section>
            <hr>
            <section class="simple-blog_create-input content">
                <label for="post-content">Post Content</label>
                <editor
                        id="post-content"
                        v-model="editorContent"
                        api-key="dtrx2n2eav7virzg5vn782z7u9merciuzjjungpwtxne1o7i"
                        :init="{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic link backcolor | \
                    alignleft aligncenter alignright alignjustify | code | \
                    bullist numlist outdent indent | removeformat | help'
            }"/>
            </section>
            <button>Submit Post</button>
        </form>
    </main>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';

    export default {
        name: "CreatePost",
        components: {
            'editor': Editor
        },
        methods: {
            confirmationMessage() {
                this.confirmation.type = "success";
                this.confirmation.message = "Post Created Successfully";
                setTimeout(() => {
                    this.$router.push('/');
                }, 3000);
            },
            errorMessage() {
                this.confirmation.type = "error";
                this.confirmation.message = "Something went wrong";
                setTimeout(() => {
                    this.$router.push('/');
                }, 3000);
            },
            sendPostContent() {
                const self = this;

                fetch(`http://localhost:4000/posts`, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        title: self.title,
                        content: self.editorContent
                    })
                })
                .then(response => {
                    if (response.status === 201) {
                        self.confirmationMessage();
                    } else if (response.status === 400) {
                        self.errorMessage();
                    }
                })
                .catch(err => console.log(err));
            }
        },
        data() {
            return {
                confirmation: {
                    message: null,
                    type: null
                },
                editorContent: "",
                title: ""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .simple-blog_create-input
        margin: 25px 0

        label
            display: block;
            font-size 18px
            font-weight: 700
            margin-bottom 10px

        input
            border-radius 5px
            font-size 18px
            min-width 350px
            padding 4px 8px

    .simple-blog_confirmation-modal
        left: 0
        padding 30px 0
        position fixed
        right: 0
        text-align center
        top: 0

        &.success
            .simple-blog_confirmation-frame
                background-color #e8f5e9
                border 1px solid #1b5e20
                color #1b5e20

        &.error
            .simple-blog_confirmation-frame
                background-color #ffebee
                border 1px solid #ef5350
                color #ef5350

        .simple-blog_confirmation-frame
            border-radius 5px
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            margin 0 auto
            padding 30px
            width 50%
</style>