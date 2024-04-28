<template>
  <div>
   <text class="title">URL</text>
   <input  placeholder="http 또는 https까지 포함한 url을 입력해주십시오." @input="inputChange($event)" @keypress="pressEnter($event)">
   <button class="btn" @click="search">실행</button>
    
  </div>
  <div>
   <textarea class="dataField" readonly="true" v-model="crawlingData">
  </textarea>
   
   
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputUrl : '',
      crawlingData : ''
    }
  },
  methods : {
    search() {

      if(this.inputUrl === '') {
        alert('URL을 입력하여 주십시오.');
            return;
      } else if(!this.inputUrl.includes('http')) {
        alert('HTTP 또는 HTTPS를 포함한 URL을 입력하여 주십시오.');
            return;
      }

      fetch(`/api/parsing?url=${this.inputUrl}`, {
        method: "GET", 
        credentials: 'include', // CORS 요청에 인증 정보 포함
      }).then(response => {return response.json();})
        .then(result => {

          console.log(result);
          if(result.resultCode === '200') {
            // this.crawlingData = JSON.stringify(result.resultList);
            this.crawlingData = result.resultList;
          } else {
            alert(result.resultMessage);
            return;
          }

        });
  },
  inputChange(event) {
    this.inputUrl = event.target.value;
  },
  pressEnter(event) {
    if(event.keyCode === 13) {
      this.search();
    }
  }
  },
  // components: {
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: red; */
  font-weight: bold;
  /* margin-top: 60px; */
  /* margin: 20px; */
  font-size: 30px;
}

.btn {
  width: 80px;
  height: 38px;
  background: yellow;
  /* padding: 15px; */
  border-radius: 5px;
  font-size: 24px;
  /* margin-top: 60px; */
}

.btn:active
{
  background: yellowgreen;
}

input {
  width: 550px;
  height: 30px;
  /* background: skyblue; */
  /* padding: 15px; */
  border-radius: 5px;
  font-size:25px;
  margin: 15px;
}

.dataField {
  width: 700px;
  height: 550px;
  background: skyblue;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  
}

</style>
