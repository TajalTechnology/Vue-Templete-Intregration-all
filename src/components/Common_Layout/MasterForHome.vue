<template>
    <Master>
            <Hero></Hero>
            <Intro></Intro>
            <Post></Post>
            <Divider></Divider>
            <LatestPosts></LatestPosts>
            <Newsletter></Newsletter>
            <Gallery></Gallery>
    </Master>

</template>

<script>

    import Newsletter from "../Section/Newsletter";
    import Hero from "../Section/Hero";
    import Intro from "../Section/Intro";
    import Post from "../Layout/Post";
    import Divider from "../Section/Divider";
    import LatestPosts from "../Section/LatestPosts";
    import Gallery from "../Section/Gallery";
    import Master from "./Master";
    export default {
        name: "MasterForHome",
        components:{
            Master,
            // Header,
            // Footer,
            Newsletter,

            Hero,
            Intro,
            Post,
            Divider,
            LatestPosts,
            Gallery

        }
    }
</script>

<style scoped>

</style>