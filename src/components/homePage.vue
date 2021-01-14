<template>
  <div>
      <div id="home-page">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <img class="navbar-brand" src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png" width="40" height="40" style="margin-top: 5 px" class="d-inline-block align-top" alt="" loading="lazy">
                  <div id="greeting">
    
                  </div>
                  <button @click="logout" class="btn btn-outline-danger" id="logout-btn">Logout</button>
                </div>
            </nav>
            <div class="row" style="margin-left: 60px; margin-top: 30px;">
                <div>
                    <div id="header-card">
                        <h2>Doing</h2>
                    </div>
                    <div id="card">
                        <h4>name</h4>
                        <p>description</p>
                    </div>
                    <div id="card">
                        <h4>name</h4>
                        <p>description</p>
                    </div>
                </div>

                <div>
                    <div id="header-card">
                        <h2>Doing</h2>
                    </div>
                    <div id="card">
                        <h4>name</h4>
                        <p>description</p>
                    </div>
                </div>

                <div>
                    <div id="header-card">
                        <h2>Doing</h2>
                    </div>
                    <div id="card">
                        <h4>name</h4>
                        <p>description</p>
                    </div>
                </div>

                <div>
                    <div id="header-card">
                        <h2>Doing</h2>
                    </div>
                    <div id="card">
                        <h4>name</h4>
                        <p>description</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'homePage',
    methods: {
        logout(){
            localStorage.clear()
            this.$emit("changePage", "LoginPage")
        }
    }
}
</script>

<style>

</style>