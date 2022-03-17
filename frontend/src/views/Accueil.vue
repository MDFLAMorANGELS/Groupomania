<template>
<div id="home-container">
  <div class="logo">
    <fa @click="logout()" id="logo-exit" :icon="['fa','arrow-right-from-bracket']"/>
  </div>
  <div id="Form-post">
    <p id="bonjour"><fa v-if=" userInfos.isAdmin  != 1 " class="logo-admin" :icon="['fa-solid','user-shield']"/> Bonjour {{ userInfos.username }}</p>
    <Form_post/>
  </div>
    <div id="container-post">
      <div id="boxPost" v-for="publication in post" :key="publication">
            <div class="head">
              <p>{{ publication.username }} a Publié le {{publication ? format(publication.created_at) : '' }}</p>
              <fa class="trash" @click="deletePost(publication)" v-if="userInfos.ID == publication.author_ID ||  userInfos.isAdmin  != 1 " :icon="['fa','trash-can']"/>
            </div>
            <div>
              <p id="titlePost">{{ publication.title }} </p>
              <p id="dataPost">{{ publication.data }} </p>
            </div>
            <img id="img-publication" v-if="publication.image !== undefined && publication.image !== null" img :src=publication.image alt="image de la publication"> 
          <Form_comment :postID='publication.ID'/>
              <div  v-for="comment in publication.comments" :key="comment.ID">
                <div class="head">
                  <p>{{comment.username}} A commenté le {{ publication ? format(comment.created_at) : '' }}</p>
                  <fa class="trash" @click="deleteComment(comment)" v-if="userInfos.ID == comment.author_ID ||  userInfos.isAdmin  != 1 " :icon="['fa','trash-can']"/>
                </div>
                <p>{{ comment.comment }}</p>
              </div>
      </div>
  </div>
</div>
</template>

<script>

import { mapState } from 'vuex';
import Form_post from '../components/Form_post.vue';
import Form_comment from '../components/Form_comment.vue';

import {formatRelative, subDays} from 'date-fns'
import {fr} from 'date-fns/esm/locale'


export default {
  name: 'Accueil',
  data: function() {
    return {
    }
    },
    components: {
        Form_post,
        Form_comment,
    },
    mounted: function() {
        console.log(this.$store.state);
        if (this.$store.state.user.userID == -1) {
            this.$router.push('/');
            return ;
        }
        this.$store.dispatch('getUserInfos'),
        this.$store.dispatch('getAllPost');
    },
    computed: {
        ...mapState(['user','userInfos']),
        ...mapState(['post']),
    },
    methods: {
        logout: function() {
            this.$store.commit('logout');
            this.$router.push('/') 
        },
        deletePost: function(post) {
            console.log(post)
            this.$store.dispatch('deletePost', post)
        },
        deleteComment: function(comment) {
            console.log(comment)
            this.$store.dispatch('deleteComment', comment)
        },
        format: function(date) {
          //console.log(date)
          let newDate = formatRelative(subDays(new Date(date), 0), new Date(), { locale: fr })
          //console.log(d)
          return newDate
        }
    },
}

</script>
<style >

#home-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}
#logo-exit{
  position: absolute;
  top: 7%;
  right: 7%;
  color: black;
  background-color: #D1515A;
  font-size: 100%;
  border: rgba(190, 34, 34, 0.432) 2px solid;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.712);
  padding: 1%;
  border-radius: 25%;
  cursor: pointer;
  transition: 1.2s;
}
#bonjour {
  position: absolute;
  left: 50px;
  top: 130px;
  color: #fff;
  font-size: 1.5em;
}
div#Form-post {
    width: 100%;
}
h3 {
  border-top: #D1515A 8px solid;
  padding-top: 50px;
  margin-top: 3%;
}

#logo-exit:hover{
transition: 1.2s;
transform: scale(110%);
}
#container-post {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
}

#boxPost{
  margin-bottom: 5%;
  padding: 3%;
  background: rgba(192, 191, 191, 0.404);
  width: 100%;
  border: 2px solid rgba(202, 202, 202, 0.582);
  border-radius: 25px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trash {
  color: #D1515A;
  position: relative;
  font-size: 1.5em;
}
#titlePost {
  font-size: 1.6em;
  margin: 1%;
}
#img-publication {
  width: 100%;
  height: 80%;
  max-height: 600px;
  margin: 1%;
  border-radius: 25px;
}
@media screen and (max-width: 1024px) {
  #container-post {
    width: 70%;
  }
  #bonjour {
    top: 130px;
  }
}
@media screen and (max-width: 768px) {
  #logo-exit {
    font-size: 150%;
  }
  #container-post {
    width: 90%;
  }
}
</style>