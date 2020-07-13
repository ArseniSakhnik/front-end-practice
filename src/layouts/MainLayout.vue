<template>
    <div>
        <Navbar/>
        <Sidebar />
        <div class="white main-layout">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Sidebar from "../components/Sidebar";

    export default {
        components: {
            Navbar, Sidebar
        },
        data: () => ({

        })
    }
</script>