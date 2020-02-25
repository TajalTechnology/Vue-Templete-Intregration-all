<template>
    <aside class="col-lg-4">
        <WidgetSearch></WidgetSearch>
        <WidgetLatestPost></WidgetLatestPost>
        <WidgetCloud></WidgetCloud>
        <WidgetCategories></WidgetCategories>

    </aside>

</template>

<script>
    import WidgetSearch from "../CommonBlogPostSection/WidgetSearch";
    import WidgetLatestPost from "../CommonBlogPostSection/WidgetLatestPost";
    import WidgetCloud from "../CommonBlogPostSection/WidgetCloud";
    import WidgetCategories from "../CommonBlogPostSection/WidgetCategories";
    export default {
        name: "CommonBlogPost",
        components:{
            WidgetCategories,
            WidgetCloud,
            WidgetLatestPost,
            WidgetSearch
        }
    }
</script>

<style scoped>

</style>