<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.mi.com/index.html" target="_blank">小米商城</a><span>|</span>
      <a href="https://home.miui.com/" target="_blank">MiUI</a><span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
      <a href="http://www.miliao.com/" target="_blank">米聊</a>
    </div>
    <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  z-index: 1;
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
      &:hover {
        color: #ff6600;
      }
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>
