<template>
  <div id="header" :class="{ 'scrolled': isScrolled }">
    <div id="nav">
      <div id="nav-logo" :class="[isToggled ? 'is-toggled' : '']">
        <router-link @click="isToggled = false" to="/">
          <img class="logo" src="@/assets/images/logo1.png" alt="Discovery Land Co" />
        </router-link>
        <button class="nav-toggler" @click="isToggled = !isToggled">
          <svg width="24" height="24" fill="#fff" class="toggler-svg">
            <rect width="24" height="2" x="0" y="4" />
            <rect width="24" height="2" x="0" y="11" />
            <rect width="18" height="2" x="0" y="18" />
          </svg>
        </button>
      </div>
      <div id="nav-links" :class="[isToggled ? 'is-toggled' : '']">
        <router-link @click="isToggled = false" to="/about">
          <p class="hover-underline-animation">About DLC</p>
        </router-link>
        <router-link @click="isToggled = false" to="/ourworlds">
          <p class="hover-underline-animation">Our Worlds</p>
        </router-link>
        <router-link @click="isToggled = false" to="/experiences">
          <p class="hover-underline-animation">Experiences</p>
        </router-link>
        <router-link @click="isToggled = false" to="/gallery">
          <p class="hover-underline-animation">Gallery</p>
        </router-link>
        <router-link @click="isToggled = false" to="/press">
          <p class="hover-underline-animation">Press</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="module" src="./navbar.ts"></script>

<style lang="scss" scoped>
@import "./navbar";
</style>