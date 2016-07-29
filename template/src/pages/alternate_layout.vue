<style lang="scss" scoped>
    code {
        display: inline;
        margin: 0;
        background-color: #efefef;
        padding: 4px;
    }
</style>

<template>
    <div>
        <h1>Alternate layouts</h1>
        <p>Layouts are nothing more than root level <code>router-view</code> components. They're the only direct child of the body tag, and as such have complete control over their appearance.</p>

        <p>To define which layout your page component is using, simply nest it under the appropriate <code>children</code> array in the <code>src/app/routes.js</code> file.</p>

        <p><router-link to="/welcome">Return to the welcome page</router-link></p>
    </div>
</template>
