<template>
    <div id="app">
        <hello-world></hello-world>
    </div>
</template>

<script>
import helloWorld from "./components/HelloWorld";
export default {
    name: "App",
    components: {
        helloWorld
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
