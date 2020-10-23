<template>
    <section class="simple-blog_single-post">
        <div v-if="post" class="simple-blog_single-post_frame">
            <h2 class="simple-blog_single-post_title">{{post.title}}</h2>
            <div v-html="post.content" class="simple-blog_single-post_content"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: Object
        },
        created() {
            const self = this;

            fetch(`http://localhost:4000/posts/${this.$route.params.id}`)
                .then(response => response.json())
                .then(data => {
                    self.post = data;
                })
                .catch(err => console.log(err));
        }
    }
</script>

<style lang="stylus">
    .simple-blog_single-post_frame
        margin-bottom 100px

    .simple-blog_single-post_title
        font-size 48px

    .simple-blog_single-post_content

        p + h3
            font-size 36px
            margin 50px 0 0

        h3 + p
            margin-top 5px
</style>