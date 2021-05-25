<template>
  <div class="profile">
    <!-- 顶部导航栏 -->
    <nav-bar class="profile-nav-bar">
      <div slot="center">Shopping!</div>
    </nav-bar>

    <!-- 信息栏 -->
    <scroll class="profile-scroll">
      <login></login>
      <wallet></wallet>
      <div class="line"></div>
      <profile-list></profile-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Login from "./children/Login";
import Wallet from "./children/Wallet";
import ProfileList from "./children/ProfileList";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Profile",
  components: {
    Scroll,
    ProfileList,
    Wallet,
    Login,
    NavBar
  }
};
</script>

<style scoped>
  .profile {
    width: 100%;
    height: 100%;
  }

  .profile-nav-bar {
    background-color: var(--color-tint);
    color: white;
  }

  .line {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
  }

  .profile-scroll {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 50px;
    left: 0;
    overflow: hidden;
  }
</style>
