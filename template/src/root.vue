<template>
  <div id="app">
    <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
  </div>
</template>
