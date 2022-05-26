<template>
  <header>
    <nav class="nav navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">
          <router-link class="navbar-brand" to="/">妃姐手工廚房</router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="menu navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page">
                <router-link class="menu-item link-warning" to="/">關於我們</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="menu-item link-warning" to="/recipe">美味食譜</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="menu-item link-warning" to="/products">線上購買</router-link>
              </a>
            </li>
            <button type="button" class="btn btn-warning">
               <router-link to="/checkout">
                  Bag
                </router-link>
            </button>
            <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="mail">
          Login
           </button>
        </ul>
        </div>
    </div>
    </nav>
  </header>

  <!-- 登入畫面 -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">會員登入</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-mail" class="col-form-label"
                >登入帳號:</label
              >
              <input
                type="text"
                class="form-control"
                name="account"
                id="account"
              />
            </div>
            <div class="mb-3">
              <label for="password-text" class="col-form-label"
                >登入密碼:</label
              >
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-warning">
            <router-link class="text-reset" to="/signup">註冊</router-link>
          </button>
          <button id="send" type="button" class="btn btn-warning">登入</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavbarComponent'
}
</script>
