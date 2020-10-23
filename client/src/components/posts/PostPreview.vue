<template>
    <article class="simple-blog_preview">
        <a :href="`/posts/${post._id}`">
            <h2 class="simple-blog_preview-post-title">{{post.title}}</h2>
        </a>
        <p v-html="postExcerpt" class="simple-blog_post-excerpt"></p>
    </article>
</template>

<script>
    export default {
        name: "PostPreview",
        props: {
            post: Object
        },
        computed: {
            postExcerpt() {
                if (this.post.content.length > 80) return `${this.post.content.substring(0, 250)}...`;
                return this.post.content;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .simple-blog_preview
        &:not(:first-of-type)
            margin: 120px 0

    .simple-blog_preview-post-title
        margin: 5px 0

    .simple-blog_post-excerpt
        margin: 0 0 25px
</style>