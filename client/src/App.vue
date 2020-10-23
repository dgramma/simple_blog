<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="stylus">
    \:root
        font-size 16px

    html, body
        box-sizing border-box
        margin: 0
        min-height 100vh
        padding: 0

    body
        background-color #fbfbf8
        color #333
        font-family "Open Sans", sans-serif
        margin 0 auto
        max-width 45em

    h1, h2, h3, h4, h5, h6
        font-family "Yantramanav", sans-serif

    h1, h2
        font-weight 700

    h3, h4, h5, h6
        font-weight 500

    h2
        font-size 2.75rem

    p, label, span
        font-size 1rem
        line-height 1.5

    a
        color #333
        text-decoration none

        &:hover
            text-decoration underline

    hr
        border none
        border-bottom 1px solid #ddd
        display block
        margin-right 20px

    #app
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale

    #nav
        display: flex;
        justify-content flex-end
        padding: 20px

        a
            color #333
            margin: 0 10px

            &.router-link-exact-active
                font-weight 700

            &:last-of-type
                margin-right 0

    .fade-enter-active, .fade-leave-active
        transition: opacity .5s

    .fade-enter, .fade-leave-to
        opacity: 0
</style>
