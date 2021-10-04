<template>
  <div class="navbar">
      <div class="container">
        <div class="navbar-container">
          <span class="navbar-with-image">
              <div class="navbar-image">
                <img :src="imageUrl" height="89" />
              </div>
            <strong>
              {{title}}
            </strong>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    imageUrl: String,
    title: String,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.navbar {
  background: #2d333b;
  width: 100%;
  margin-bottom: 2.1rem;
  padding: 0.8rem 2.1rem;
  position: fixed;
  top: 0;
  left: 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.navbar-right {
  display: flex;
}

.navbar a {
  font-size: 21px;
  color: white;
}

.navbar-title {
  font-weight: bold;
  font-size: 21px;
  min-height: 52px;
  display: flex;
  align-items: center;
}

.navbar-with-image {
  padding-left: 129px;
}

.navbar-image {
  position: absolute;
  left: 0px;
  top: -11px;
  border: 13px solid #2d333b;
}

.navbar-image img {
  display: block;
}

</style>