<template>
    <div class="simple-blog_home">
        <header class="simple-blog_header">
            <h1 class="simple-blog_header-title">Dave's Dev Blog</h1>
        </header>
        <PostList v-if="posts" :posts="posts"/>
    </div>
</template>

<script>
    import PostList from "../components/posts/PostList";

    export default {
        name: 'Home',
        components: {
            PostList
        },
        created() {
            const self = this;

            fetch('http://localhost:4000/posts')
                .then((response) => {
                    return response.json();
                })
                .then(posts => {
                    console.log(posts);
                    self.posts = posts;
                })
        },
        data() {
            return {
                posts: null
            }
        }
    }
</script>

<style lang="stylus" scoped>
    header
        text-align center

    .simple-blog_header-title
        font-size 66px
        margin 0
</style>