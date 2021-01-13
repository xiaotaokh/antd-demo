<template>
    <div class="hello">
        <a-button type="primary" disabled>Button</a-button>
        <a-button>Button</a-button>
        <a-button type="dashed">Button</a-button>
        <a-button type="danger">Button</a-button>
        <a-config-provider :auto-insert-space-in-button="false">
            <a-button type="primary">按钮</a-button>
        </a-config-provider>
        <a-button type="link">Link</a-button>
        <div
            :style="{
                padding: '8px 8px 0 8px',
                background: 'rgb(190, 200, 200)',
            }"
        >
            <a-button ghost>Ghost</a-button>
            <a-button ghost disabled>Ghost(disabled)</a-button>
        </div>
        <a-button type="primary" shape="circle" icon="search" />
        <a-dropdown>
            <a-menu slot="overlay">
                <a-menu-item key="1">1st item</a-menu-item>
                <a-menu-item key="2">2nd item</a-menu-item>
                <a-menu-item key="3">3rd item</a-menu-item>
            </a-menu>
            <a-button>
                Actions
                <a-icon type="down" />
            </a-button>
        </a-dropdown>
        <a-button type="primary" block>Primary</a-button>
        <a-button-group>
            <a-button type="primary" disabled>
                <a-icon type="left" />
                Go back
            </a-button>
            <a-button type="primary">
                Go forward
                <a-icon type="right" />
            </a-button>
        </a-button-group>
        <a-button type="primary" loading ghost>Primary</a-button>
        <a-button
            type="primary"
            :loading="iconLoading"
            @click="enterIconLoading"
            >Button</a-button
        >
        <a-button type="htmlType">Button</a-button>
        <p
            :style="{
                'border-bottom': '1px dashed #333',
                'padding-top': '20px',
            }"
        ></p>
        <a-icon type="home" :style="{ fontSize: '28px' }" theme="filled" />
        <a-icon
            type="home"
            :style="{ fontSize: '28px' }"
            :rotate="180"
            theme="outlined"
        />
        <a-icon
            type="home"
            :style="{ fontSize: '28px' }"
            theme="twoTone"
            twoToneColor="#3acedb"
            spin
        />
        <a-icon type="down-circle" />
        <a-icon type="setting" theme="filled" />
        <a-icon type="loading" />
        <p
            :style="{
                'border-bottom': '1px dashed #333',
                'padding-top': '20px',
            }"
        ></p>
        <a-row type="flex" justify="center" align="top">
            <a-col :span="4" :order="4">
                <p class="height-100">col-1</p>
            </a-col>
            <a-col :span="4">
                <p class="height-50">col-2</p>
            </a-col>
            <a-col :span="4">
                <p class="height-100">col-3</p>
            </a-col>
            <a-col :span="4">
                <p class="height-50">col-4</p>
            </a-col>
        </a-row>
        <a-row type="flex">
            <a-col flex="100px">
                <p
                    :style="{
                        width: '100px',
                        height: '100px',
                        background: 'blue',
                    }"
                >
                    100px
                </p>
            </a-col>
            <a-col flex="auto">
                <p
                    :style="{
                        width: '100%',
                        height: '100px',
                        background: 'cyan',
                    }"
                >
                    auto
                </p>
            </a-col>
        </a-row>
        <a-row>
            <a-col :span="18" :push="6">col-18</a-col>
            <a-col :span="6" :pull="18">col-6</a-col>
        </a-row>

        <a-layout id="components-layout-demo-top-side">
            <a-layout-header class="header">
                <div class="logo" />
                <a-menu
                    theme="dark"
                    mode="horizontal"
                    :default-selected-keys="['2']"
                    :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1">nav 1</a-menu-item>
                    <a-menu-item key="2">nav 2</a-menu-item>
                    <a-menu-item key="3">nav 3</a-menu-item>
                </a-menu>
            </a-layout-header>
            <a-layout-content style="padding: 0 50px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout style="padding: 24px 0; background: #fff">
                    <a-layout-sider width="200" style="background: #fff">
                        <a-menu
                            mode="inline"
                            :default-selected-keys="['1']"
                            :default-open-keys="['sub1']"
                            style="height: 100%"
                        >
                            <a-sub-menu key="sub1">
                                <span slot="title">
                                    <a-icon type="user" />subnav 1
                                </span>
                                <a-menu-item key="1">option1</a-menu-item>
                                <a-menu-item key="2">option2</a-menu-item>
                                <a-menu-item key="3">option3</a-menu-item>
                                <a-menu-item key="4">option4</a-menu-item>
                            </a-sub-menu>
                            <a-sub-menu key="sub2">
                                <span slot="title">
                                    <a-icon type="laptop" />subnav 2
                                </span>
                                <a-menu-item key="5">option5</a-menu-item>
                                <a-menu-item key="6">option6</a-menu-item>
                                <a-menu-item key="7">option7</a-menu-item>
                                <a-menu-item key="8">option8</a-menu-item>
                            </a-sub-menu>
                            <a-sub-menu key="sub3">
                                <span slot="title">
                                    <a-icon type="notification" />subnav 3
                                </span>
                                <a-menu-item key="9">option9</a-menu-item>
                                <a-menu-item key="10">option10</a-menu-item>
                                <a-menu-item key="11">option11</a-menu-item>
                                <a-menu-item key="12">option12</a-menu-item>
                            </a-sub-menu>
                        </a-menu>
                    </a-layout-sider>
                    <a-layout-content
                        :style="{ padding: '0 24px', minHeight: '280px' }"
                        >Content</a-layout-content
                    >
                </a-layout>
            </a-layout-content>
            <a-layout-footer style="text-align: center"
                >Ant Design ©2018 Created by Ant UED</a-layout-footer
            >
        </a-layout>
        <p
            :style="{
                'border-bottom': '1px dashed #333',
                'padding-top': '20px',
            }"
        ></p>
        <a-affix :offset-bottom="10">
            <a-button type="primary"> Affix top </a-button>
        </a-affix>
        <p
            :style="{
                'border-bottom': '1px dashed #333',
                'padding-top': '20px',
            }"
        ></p>
        <a-breadcrumb>
            <span slot="separator" style="color: red">>>></span>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
                ><a href="">Application Center</a></a-breadcrumb-item
            >
            <a-breadcrumb-item href=""
                ><a-icon type="user"
            /></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        <a-breadcrumb :routes="routes">
            <template
                slot="itemRender"
                slot-scope="{ route, params, routes, paths }"
            >
                <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{ route.breadcrumbName }}
                </span>
                <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                    {{ route.breadcrumbName }}
                </router-link>
            </template>
        </a-breadcrumb>
        <p
            :style="{
                'border-bottom': '1px dashed #333',
                'padding-top': '20px',
            }"
        ></p>
        <p
            :style="{
                'border-bottom': '1px dashed #333',
                'padding-top': '20px',
                'margin-bottom': '1200px',
            }"
        ></p>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {},
    data() {
        return {
            iconLoading: false,
            basePath: "/components/breadcrumb",
            routes: [
                {
                    path: "index",
                    breadcrumbName: "home",
                },
                {
                    path: "first",
                    breadcrumbName: "first",
                    children: [
                        {
                            path: "/general",
                            breadcrumbName: "General",
                        },
                        {
                            path: "/layout",
                            breadcrumbName: "Layout",
                        },
                        {
                            path: "/navigation",
                            breadcrumbName: "Navigation",
                        },
                    ],
                },
                {
                    path: "second",
                    breadcrumbName: "second",
                },
            ],
        };
    },
    created() {
        
    },
    methods: {
        enterIconLoading() {
            this.iconLoading = { delay: 1000 };
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
    padding: 20px;

    .height-100 {
        width: 100%;
        height: 100px;
        line-height: 100px;
        background: #ccc;
    }

    .height-50 {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #eee;
    }

    #components-layout-demo-top-side .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 28px 16px 0;
        float: left;
    }
}
</style>
