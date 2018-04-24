<template>
  <div class="lik">
<h1 id="b">a</h1>
<h2 id="a">b</h2>
  <div v-on:click = "move" id="kvadrat">

</div>

  <h4>{{ values }}</h4>

  </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex'
import { TweenLite } from 'gsap';
export default{
  
computed:{
  ...mapState([
    'values'
  ])
} ,
  
methods: {
  ...mapMutations([
   'ADD_VALUE'
  ]),
  move: function(){
    var logo = document.getElementById("kvadrat");
    var tn = TweenLite.to(logo, 2, {left:"1300px", onUpdate:myFunction});
function myFunction()
{
this.ADD_VALUE(tn.progress())

}
  }
}
}
</script>

<style >
#kvadrat{

  width: 150px;
  height: 150px;
  background: #90E500 ;
  position: absolute;
    left: 20px;
} 
#a{
    position: absolute;
    left: 1320px;

}
#b{
  position: absolute;
    left: 20px;
}
body {
  
}


</style>

