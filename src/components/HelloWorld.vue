<template>
  <div class="hello">
    <golden-layout class="hscreen">
      <gl-row>
        <gl-stack :closable="false">
          <gl-component title="component1">
            <h1>Component 1</h1>
          </gl-component>
          <gl-component title="component2">
            <h1>Component 2</h1>
          </gl-component>
        </gl-stack>
        <gl-stack :closable="false" v-if="show">
          <gl-component title="component3">
            <h1>Component 3</h1>
          </gl-component>
          <gl-component title="component4">
            <h1>Component 4</h1>
          </gl-component>
        </gl-stack>
      </gl-row>
    </golden-layout>
    <div class="hideBtn" @click="show = false">Hide Stack 2</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  show = true;
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hscreen {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.hello{
  position:relative;
  height:100%;
}
.hideBtn{
  position: absolute;
  width:100px;
  top:300px;
  left:300px;
  padding:5px;
  background-color:#CCC;
  border-radius: 5px;
  border:1px solid #333;
  cursor:pointer;
  box-shadow: 2px 2px 8px #999;
}
.hideBtn:hover{
  background-color:#DEDEDE;
}
</style>
