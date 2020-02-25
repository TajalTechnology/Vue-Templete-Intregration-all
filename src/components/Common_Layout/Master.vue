<template>
    <div>
        <Header></Header>
            <slot></slot>

        <Footer></Footer>
    </div>

</template>

<script>
    import Header from "../Section/Header";
    import Footer from "../Section/Footer";

    export default {
        name: "Master",
        components:{
            Header,
            Footer

        }
    }
</script>

<style scoped>

</style>