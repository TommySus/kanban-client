<template>
  <div>
        <div id="register-page">
            <div class="row" id="register-box">
                <img src="https://www.ruang-guru.com/img/advance_feature_img.png" id="register-image">
                <div id="register-form" class="shadow-lg">
                    <form @submit.prevent="register">
                        <h3 style="margin-left: 30%; margin-top: 20px;">Register</h3>
                        <div class="form__group field">
                            <input v-model="user.name" type="text" class="form__field" placeholder="name" name="name" id='name' required />
                            <label for="name" class="form__label">Name</label>
                        </div>
                        <div class="form__group field">
                            <input v-model="user.email" type="text" class="form__field" placeholder="email" name="email" id='email' required />
                            <label for="email" class="form__label">Email</label>
                        </div>
                        <div class="form__group field">
                            <input v-model="user.password" type="password" class="form__field" placeholder="Password" name="password" id='password' required />
                            <label for="password" class="form__label">Password</label>
                        </div>
                        <button type="submit" id="btn"><span class="noselect">Register</span><div id="circle"></div></button>
                        <p style="margin-left: 40px; margin-top: 10px;"><b>already have an account?</b></p>
                        <p @click="changePage" id="toLogin" style="margin-left: 110px; margin-top: -15px;">login</p>
                    </form>
                    <p style="margin-left: 50px; color: red;">{{errorMessage}}</p>
                </div>
            </div>  
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                name:"",
                email:"",
                password:"" 
            },
            errorMessage: ''   
        }
    },
    methods: {
        register(){
            axios({
                method: "POST",
                url: "http://localhost:3000/users/register",
                data: {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                }
            })      
            .then((response) => {
                console.log(response.data)
                this.changePage()
            })
            .catch(error => {
                this.errorMessage = error.response.data.message
            })
        },
        changePage(){
            this.$emit("changePage", "LoginPage")
        }
    }
}
</script>

<style>

</style>