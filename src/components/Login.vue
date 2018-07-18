<template>
<div id="login">
    <div class="login__inputs">
    <h1>Login</h1>
    <input type="text" class="login__input" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" class="login__input" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" class="btn" @click="login()">Login</button>
    </div>
    </div>
</template>


<script>
  export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
        if(this.input.username != "" && this.input.password != "") {
            if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                this.$emit("authenticated", true);
                this.$router.replace({ name: "secure" });
            } else {
                console.log("The username and / or password is incorrect");
            }
        } else {
            console.log("A username and password must be present");
        }
    }
}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
   box-sizing: border-box;
}

#login{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    background-color:#000;
    color:#fff;    
    letter-spacing: 2px;
    .login__inputs{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }
    .login__input{
        margin: 0.7rem 0;
        border: 1px solid #253a588f ;
        line-height: 0;
        font-size: 17px;
        width: 70%;
        display: block;
        padding: 10px 15px;
        border-radius: 60px;
    }
    .btn{
        cursor: pointer;
        margin: 0.3rem;
        background-color: white;
        border: 1px solid;
        line-height: 0;
        font-size: 1rem;
        box-sizing: border-box;
        padding: 20px 25px;
        border-radius: 60px;
        &:hover{
            background-color: white;
        }
    }
}
</style>
