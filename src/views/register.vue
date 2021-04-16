<template>
  <div class="register">
    <div class="wrapper">
      <div class="logo">
        <a href="javascript:;"></a>
      </div>
      <div class="title">
        <h4>注册小米帐号</h4>
      </div>
      <div class="regbox">
        <el-form :label-position="'top'" label-width="80px" :model="regForm" :rules="regFormRul" ref="regFormRef">
          <div class="input">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" placeholder="请输入用户名" v-model="regForm.username"></el-input>
            </el-form-item>
          </div>
          <div class="input">
            <el-form-item label="密码" prop="password">
              <el-input type="password" placeholder="请输入密码" v-model="regForm.password"></el-input>
            </el-form-item>
          </div>
          <div class="input">
            <el-form-item label="确认密码" prop="checkpass">
              <el-input type="password" placeholder="请输入密码" v-model="regForm.checkpass"></el-input>
            </el-form-item>
          </div>
          <div class="input">
            <el-form-item label="邮箱" prop="email">
              <el-input type="text" placeholder="请输入邮箱" v-model="regForm.email"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div class="regbtn"><button @click="regist">立即注册</button></div>
      </div>
      <div class="privacy_box">
        <div class="msg">
          <label class="n_checked select-privacy">
            已阅读并同意：小米
            <a href="javascript:;"> 用户协议</a>和<a href="javascript:;">隐私政策</a>
          </label>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">简体</a>
        <span>|</span>
        <a href="javascript:;">繁体</a>
        <span>|</span>
        <a href="javascript:;">English</a>
        <span>|</span>
        <a href="javascript:;">常见问题</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateEmail = (rule, value, callback) => {
      const emailReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
      if (emailReg.test(value)) callback();
      else callback(new Error("请输入正确的邮箱地址"));
    };
    return {
      regForm: {
        username: "",
        password: "",
        checkpass: "",
        email: "",
      },
      regFormRul: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
        ],
        checkpass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        email: [
          { required: true, message: "请再次输入邮箱", trigger: "blur" },
          { validator: validateEmail, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    regist() {
      this.$refs.regFormRef.validate(isvalid => {
        if (isvalid) {
          const { username, password, email } = this.regForm;
          this.axios
            .post("/user/register", {
              username,
              password,
              email,
            })
            .then(() => {
              this.$message.success("注册成功");
              this.$refs.regFormRef.resetFields();
              this.$router.push("/index");
            });
        }
      });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/mixin.scss";
.register {
  background-color: #f9f9f9;
  .wrapper {
    width: 854px;
    background-color: #fff;
    margin: 0 auto;
    .logo {
      width: 100%;
      padding-bottom: 40px;
      a {
        width: 48px;
        height: 48px;
        background: url("/imgs/logo-new.png") no-repeat center;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .title {
    text-align: center;
    h4 {
      font-size: 30px;
      font-weight: normal;
      color: #333;
      line-height: 1.5;
    }
  }
  .regbox {
    margin: 30px auto 0;
    width: 332px;
    line-height: 20px;
    .input {
      width: 332px;
      margin-bottom: 20px;
      .el-form-item__label {
        height: 25px;
        padding-bottom: 35px;
        font-size: 14px;
      }
      .el-input {
        .el-input__inner,
        .el-input__inner:hover,
        .el-input__inner:focus {
          border: 1px solid #e8e8e8;
        }
      }
    }
    .regbtn {
      margin: 45px auto 10px;
      button {
        width: 330px;
        height: 42px;
        border: 1px solid rgba(186, 186, 186, 0.3);
        color: #fff;
        background-color: #ff6700;
        font-size: 14px;
        text-align: center;
        line-height: 42px;
        cursor: pointer;
        &:hover {
          background-color: #ff936a;
        }
      }
    }
  }
  .privacy_box {
    text-align: center;
    padding: 40px 0 30px;
    .msg {
      text-align: center;
      color: #9d9d9d;
      font-size: 14px;
      label {
        display: inline-block;
        padding: 10px 0;
        a,
        a:hover {
          text-decoration: none;
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 20px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        &:first-child {
          color: #333;
        }
        color: #999999;
        display: inline-block;
        &:hover {
          color: #333;
        }
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>
