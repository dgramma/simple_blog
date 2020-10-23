<template>
    <main class="simple-blog_post-list">
        <section v-if="posts">
            <PostPreview v-for="post in posts" :post="post" :key="key"/>
        </section>
    </main>
</template>

<script>
    import PostPreview from "./PostPreview";

    export default {
        name: "PostList",
        props: {
            posts: Array
        },
        components: {
            PostPreview
        },
        data() {
            return {
                posts: []
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .simple-blog_post-list
        margin-top: 50px
</style>