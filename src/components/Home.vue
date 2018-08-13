<template>
  <div id="home">
    <b-container class="state-search">
            <div style="font-size: 80px;">
              <font-awesome-icon icon="graduation-cap"/>
            </div>
            <h1>College Finder - Your future starts here.</h1>
              <p>Trying to decide on what college or university to attend in the fall, but you don't even know where to start? <br>
              Use this quick search tool to bring up a list of schools in the state/territory of your choice</p> 
              <b-form v-on:submit.prevent="findSchools"> 
                <select v-model="selected">
                  <option disabled value="">Choose a location</option>
                  <option v-for="state in states" v-bind:value="state.abbreviation"> {{ state.name }} </option>
                </select>
                  <input class="button" type="submit"  v-bind:to="{ name: 'CollegeList' } "value="View Schools">
            </b-form> 
                <!-- <div class="schoolCard" v-if="schools && schools.length > 0">
                  <b-card :title=item"['school.name']"
                          :sub-title=item"['school.city'], item['school.state']">
                      <p class="card-text">
                          <a target="_blank" v-bind:href="'http://' + item['school.school_url']">{{item["school.school_url"]}}</a>
                      </p>
                      <a href="#"
                        class="card-link">Card link</a>
                      <b-link href="#"
                              class="card-link">Another link</b-link>
                  </b-card> -->     

          
                <!-- List of Schools -->  
                <div class="school-list">
                    <ul class="schools" v-if="schools && schools.length > 0">
                      <transition-group name="slideRight" tag="div" class="school-list" appear>
                      <li v-for="(item,index) in schools" :key="index">
                        <spinner v-if="showLoading"></spinner>  
                          <h3>{{ item["school.name"]}}</h3><br>
                          <p>{{ item["school.city"]}}, {{ item["school.state"]}}</p> 
                          <button><a target="_blank" v-bind:href="'http://' + item['school.school_url']">{{item["school.school_url"]}}</a></button>
                          <hr class="narrow">
                      </li>
                      </transition-group>
                  </ul>
                </div>
    </b-container> 
  </div>  
</template>

<script>
import axios from "axios";
import BounceLoader from "@/components/BounceLoader";
import states from "../states.js";
// Note: vue2-animate is added using the require statement because it is a CSS file
require('vue2-animate/dist/vue2-animate.min.css');

export default {
  name: "Home",
  data() {
    return {
      selectedState: "",
      showLoading: false,
      schools: [],
      selected: "",
      states: states,
    };
  },

  components: {
  'spinner': BounceLoader
  },

  // Pull information from API
  methods: {
    findSchools: function() {
      // Show spinner when API request begins
      this.showLoading = true;
      axios.get('https://api.data.gov/ed/collegescorecard/v1/schools.json', {
      params: {
        api_key: 'd9xeq99pO8xRBij92yBUzmSIPR1P6v4RDAyQN53X',
        fields: 'school.name,school.school_url,school.city,school.state',
        "school.state": this.selected

       }
      })
      .then(response => {
      // Turn off spinner
      this.showLoading = false;
      this.schools = response.data.results
      });
    }
  },

  schoolUrl: function(url){
      return 'http://' + school_url;
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  background-color: #F4F6F7;
  padding: 0px;
  margin-bottom: 10px;
  list-style: none;
  border-bottom: 10px;
  border-color: #A6ACAF;
}

ul li {
  padding: 10px;
}

#home {
  padding-top: 175px;
} 

.state-search {
    text-align: center;
}

.state-search {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.school-list{
  border-bottom: 10px;
  border-color: #D35400;
}

.button {
  background-color: #D35400;
  font-weight: bold;
  
}

.school-list{
  margin-top: 25px;
  text-align: left;
}

hr { 
    display: block;
    margin-top: 10px;
    margin-bottom: 3px;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border: solid #ffb380;
    border-width: .5px;

}
</style>
