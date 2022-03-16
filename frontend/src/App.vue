<template>
  <div id="nav">
    <div id="logo">
      <img id="logo" src='./assets/logo.png' alt= 'Logo de Groupomania' />
    </div>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
#app {
  font-family:  PT Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: linear-gradient(45deg,#112341,#AEAEAE);
}
#logo {
	width: 180px;
	height: 180px;
  position: absolute;
  top: 0;
  left: 3%;
}

</style>
