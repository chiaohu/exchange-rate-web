<template>
  <div>
    <nav class="navbar navbar-expand-md sticky-top navbar-light bg-warning fixed-top">
      <router-link class="navbar-brand" to="/">EXchange</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/usd">美元轉換</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hkd">港幣轉換</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jpd">日圓轉換</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cny">人民幣轉換</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
