<template>
  <div>
    <form @submit.prevent="validateForm(),resetInput()" action="">
    <input
      ref="comment"
      v-model="comment"
      maxlength="250"
      type="text"
      placeholder="Ecrivez un commentaire"
      name="comment"
    />
<input type="submit" id="button-comment" value="Publier">
  </form>
  </div>
</template>

<script>

export default {
  name: "Form_comment",
  data: function() {
      return {
      comment:'',
    }
  },
  methods: {
      validateForm: function() {
        console.log(this.comment,this.postID)
          this.$store.dispatch('createComment', {
              ID: this.postID,
              data: this.comment,
          })
      },
      resetInput() {
            this.$refs["comment"].value = "";
        },
    },
  props: [
    'postID'
  ],
};
</script>

<style scoped>
input[type="text"] {
  width: 80%;
  padding: 12px 20px;
  margin: 1%;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 30px;
}
#button-comment {
    background: linear-gradient(45deg,#112341,#AEAEAE);
    color: white;
    padding: 10px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 18%;
    border-radius: 30px;
    font-size: 1.2em;
    transition: 1s;
}
#button-comment:hover {
    color: #5ce963;
    transition: 1s;
    transform: scale(105%);
}

@media screen and (max-width: 768px) {
  #button-comment {
    width: 80%;
  }
}

</style>