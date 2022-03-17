<template>
<form enctype="multipart/form-data" @submit.prevent="validateForm()" action="">
<div class="container_post">
    <div id="textarea">
        <h3>Raconter nous votre story :</h3>
        <textarea ref="title"  v-model="title" id="story" name="publication" rows="1" cols="80" placeholder="Ecrivez un titre" maxlength="150" required></textarea>
        <textarea ref="data" v-model="data" id="story" name="publication" rows="6" cols="80" placeholder="Ecrivez ici votre publication" maxlength="1000" required></textarea>

    <div id="field">
        <label for="image" class="label-file">Choisissez une image :</label>
        <input 
        id="image"
        class="input-file"
        type="file"
        name="image"
        @change="onFileSelected"
        ref="image"
        >
        <img id="prev-img" :src="image" alt="">
    </div>
    </div>
    <input type="submit"  id="button_post" value="Publier">
</div>
</form>
</template>

<script>

export default {
    name:'Form_post',
    data () {
    return {
        title: '',
        data: '',
        file: '',
        image:'https://www.gorilla-cannabis-seeds.co.uk/images/product_image_not_found.gif',
        selectFile: null
    }
    },
    methods: {
        validateForm()  {
            //console.log(this.selectFile)
            const fd = new FormData();
            fd.append('image', document.getElementById('image').files[0])
            fd.append('title', this.title)
            fd.append('data', this.data)
            console.log(fd);
            this.$store.dispatch('createPost',fd)
        this.$refs["title"].value = "";
        this.$refs["data"].value = "";
        this.image = "https://www.gorilla-cannabis-seeds.co.uk/images/product_image_not_found.gif";

        },
        onFileSelected(event) {
            this.selectFile = event.target.files[0]
            const file = event.target.files[0]
            this.image = URL.createObjectURL(file)
        }
    },
}
</script>

<style scoped>
.container_post {
    margin: 14vh 5% 5% 5%;
}

h3 {
    margin: 5% 2% 2% 2%;
    font-size: 1.8em;
}
#textarea {
    display: flex;
    flex-direction: column;
}
textarea {
    letter-spacing: 1px;
    font-size: 1.5em;
    padding: 10px;
    max-width: 100%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid rgb(116, 116, 116);
    box-shadow: 2px 2px 2px #999;
    resize: none;
    background-color: rgb(228, 227, 227);
}

#field {
    display: flex;
    justify-content: center;
    align-items: center;
}
label {
    display: block;
    margin: 10px;
}
#prev-img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
}
#button_post {
    background: linear-gradient(45deg,#112341,#AEAEAE);
    color: white;
    padding: 14px 20px;
    margin: 1%;
    border: none;
    cursor: pointer;
    width: 15%;
    border-radius: 30px;
    font-size: 1.2em;
    transition: 1s;
}
#button_post:hover {
    color: #5ce963;
    transition: 1s;
    transform: scale(105%);
}
.label-file {
    cursor: pointer;
    color: #fafafa;
    font-weight: bold;
    background: linear-gradient(220deg,#112341,#AEAEAE);
    padding: 1%;
    border-radius: 20px;
}
.label-file:hover {
    color: #5ce963;
}

.input-file {
    display: none;
}
@media screen and (max-width: 1024px) {
    .container_post {
    margin: 18vh 5% 5% 5%;
    }
}
@media screen and (max-width: 768px) {
    #button_post {
        width: 50%;
    }
    form {
    margin-top: 125px;
    }
    .container_post {
    margin: 25vh 5% 5% 5%;
    }
    h3 {
        padding: 0;
    }
}
</style>
