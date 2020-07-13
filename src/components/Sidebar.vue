<template>
    <div>

        <ul class="sidenav pink darken-4 app-sidenav open">
            <div class="novebarplace">
                <router-link class="waves-effect waves-purple pointer white-text"
                             v-for="link in links" :key="link.url"
                             tag="li"
                             active-class="active"
                             :to="link.url"
                             :exact="link.exact"
                             :class="{wasselected: (link.url === $route.path) || (link.title === 'Add contract' && $route.path === '/Step-2')
                             || (link.title === 'Add contract' && $route.path === '/Step-3')}">
                    <a href="#" style="transition: none !important;">
                        <div v-if="(link.url === $route.path) || (link.title === 'Add contract' && $route.path === '/Step-2')
                        || (link.title === 'Add contract' && $route.path === '/Step-3')" >
                            <a href="#" v-html="link.iconOpen"></a>
                            <a href="#" class="routertext" :class="{wasselectedtext: (link.url === $route.path)
                            || (link.title === 'Add contract' && $route.path === '/Step-2')
                            || (link.title === 'Add contract' && $route.path === '/Step-3')}">{{link.title}}</a>
                        </div>
                        <div v-else>
                            <a href="#" v-html="link.icon"></a>
                            <a href="#" class="routertext" :class="{wasselectedtext: link.url === $route.path }">{{link.title}}</a>
                        </div>
                    </a>
                </router-link>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data: () => ({
                links: [
                    {
                        title: 'Dashboard',
                        url: '/dashboard',
                        icon: '<i class="fa fa-home sidebaricon "></i>',
                        iconOpen: '<i class="fa fa-home sidebaricon open"></i>'
                    },
                    {
                        title: 'Add contract',
                        url: '/',
                        exact: true,
                        icon: '<i class="far fa-copy sidebaricon"></i>',
                        iconOpen: '<i class="far fa-copy sidebaricon open"></i>',
                    },
                    {
                        title: 'Open tasks',
                        url: '/open-tasks',
                        icon: '<i class="fa fa-check-square-o sidebaricon"></i>',
                        iconOpen: '<i class="fa fa-check-square-o sidebaricon open"></i>',
                    }
                ]
            }
        )
    }
</script>

<style scoped>
    li {
        height: 100px;
    }

    .waves-effect.waves-purple.pointer.white-text.router-link-exact-active.active.wasselected {
        weight: 132px !important;
    }

    .novebarplace {
        margin-top: 100px;
    }

    .active{
        color:black;
    }


</style>