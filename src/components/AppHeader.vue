<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>
<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>
