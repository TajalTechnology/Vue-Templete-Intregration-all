<template>
    <Master>
        <div class="container">
            <div class="row">
                <slot></slot>
                <CommonBlogPost></CommonBlogPost>
            </div>
        </div>
    </Master>
<!--    <div>-->
<!--    <Header></Header>-->
<!--       <div class="container">-->
<!--      <div class="row">-->
<!--          <slot></slot>-->
<!--          <CommonBlogPost></CommonBlogPost>-->
<!--        </div>-->
<!--        </div>-->


<!--    <Footer></Footer>-->


<!--    </div>-->
    
</template>

<script>
    import Master from "./Master";
    // import Header from "../Section/Header";
    import CommonBlogPost from "../../BlogPostSection/CommonBlogPost";
    // import Footer from "../Section/Footer";


    export default {
        name: "MasterForBlog",
        components:{
            Master,
            CommonBlogPost
        }
    }
</script>

<style scoped>

</style>