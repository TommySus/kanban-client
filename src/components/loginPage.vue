<template>
  <div>
      <div id="login-page">
          <div class="row" id="login-box">
                <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" id="login-image">
                <div id="login-form" class="shadow-lg">
                    <form @submit.prevent="login">
                        <h3 style="margin-left: 38%; margin-top: 20px;">Login</h3>
                        <div class="form__group field">
                            <input v-model="user.email" type="text" class="form__field" placeholder="email" name="email" id='email' required />
                            <label for="email" class="form__label">Email</label>
                        </div>
                        <div class="form__group field">
                            <input v-model="user.password" type="password" class="form__field" placeholder="Password" name="password" id='password' required />
                            <label for="password" class="form__label">Password</label>
                        </div>
                        <button type="submit" id="btn"><span class="noselect">Login</span><div id="circle"></div></button>
                        <p style="margin-left: 40px; margin-top: 10px;"><b>dont have an account?</b></p>
                        <p @click="changePage" id="toRegister" style="margin-left: 95px; margin-top: -15px;">register</p>
                    </form>
                    <p style="margin-left: 50px; color: red;">{{errorMessage}}</p>
                </div>
          </div>  
       </div>
  </div>
</template>

<script>
export default {
    name: "LoginPage",
    data(){
        return{
            user: {
                email: "",
                password: ""
            },
            errorMessage: ''
        }
    },
    methods: {
        login(){
            axios({
                method: "POST",
                url: "http://localhost:3000/users/login",
                data: {
                    email: this.user.email,
                    password: this.user.password,
                }
            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token)
                localStorage.setItem('user', response.data.name)
                this.toHomePage()
            })
            .catch((error) => {
                this.errorMessage = error.response.data.message
            })
        },
        changePage(){
            this.$emit("changePage", "RegisterPage")
        },
        toHomePage(){
            this.$emit("changePage", "HomePage")
        }
    }

}
</script>

<style>

</style>