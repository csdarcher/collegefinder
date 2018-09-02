<template>
  <div id="home">
    <b-container class="state-search">
      <b-row>
        <b-col>
            <div style="font-size: 80px;">
              <font-awesome-icon icon="graduation-cap"/>
            </div>   
        </b-col>  
      </b-row>
      <b-row> 
        <b-col>
            <h1>College Finder - Your future starts here.</h1> 
              <p>Trying to decide on what college or university to attend in the fall, but you don't even know where to start? <br>
              Use this quick search tool to bring up a list of schools in the state/territory of your choice</p>   
        </b-col>      
      </b-row> 
      <b-row>
        <b-col>
              <b-form v-on:submit.prevent="findSchools">    
                <b-select v-model="selected">
                  <option disabled value="">Choose a location</option>
                  <option v-for="state in states" v-bind:value="state.abbreviation"> {{ state.name }}</option>
                </b-select>    
                  <b-button class="button" input type="submit"> Search <font-awesome-icon icon="search"/></b-button>        
              </b-form> 
        </b-col>     
      </b-row>    
        <b-row> 
              <!-- List of Schools -->  
              <div class="school-list">
                <spinner v-if="showLoading"></spinner>  
                  <ul class="schools" v-if="schools && schools.length > 0">
                    <transition-group name="slideRight" tag="div" class="school-list" appear>
                    <li v-for="(item,index) in schools" :key="index">
                        <h3>{{ item["school.name"]}}</h3><br>
                        <p>2015 enrollment: {{ item["2015.student.size"]}} students | Location: {{ item["school.city"]}}, {{ item["school.state"]}}</p> 
                        <b-button class="button"><a target="_blank" v-bind:href="'http://' + item['school.school_url']">{{item["school.school_url"]}}</a></b-button>
                        <hr class="narrow">
                    </li>
                    </transition-group>
                </ul>
              </div>
        </b-row>  
    </b-container> 
  </div>  
</template>
<script>
import axios from "axios";
import CircleSpinner from "@/components/CircleSpinner";
import states from "../states.js";
// Note: vue2-animate is added using the require statement because it is a CSS file
require("vue2-animate/dist/vue2-animate.min.css");
export default {
  name: "Home",
  data() {
    return {
      showLoading: false,
      schools: [],
      errors: [],
      selected: "",
      states: states
    };
  },
  components: {
    spinner: CircleSpinner
  },

  // Pull information from API
  methods: {
    findSchools: function() {
      if (this.selected.length <1)
        alert ("Whoops!Please choose a location.");
      // Show spinner when API request begins
      this.showLoading = true;
      axios
        .get("https://api.data.gov/ed/collegescorecard/v1/schools.json", {
          params: {
            api_key: "d9xeq99pO8xRBij92yBUzmSIPR1P6v4RDAyQN53X",
            fields: "school.name,school.school_url,school.city,school.state,2015.student.size",
            "school.state": this.selected,
          }
        })
        .then(response => {
          // Turn off spinner
          this.showLoading = false;
          this.schools = response.data.results;
        })

        .catch(e => {
        this.errors.push(e);
         });
    }
  },

  schoolUrl: function(url) {
    return "http://" + school_url;
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  background-color: #f4f6f7;
  margin-bottom: 10px;
  list-style: none;
  border-bottom: 10px;
  border-color: #a6acaf;
  padding-left: 0;
  text-align: center;
  width: 100%;
}
ul li {
  padding: 10px;
}
ul a {
  color: black;
}
#home {
  padding-top: 25px;
  margin: 10px;
  display: inline;
}
.state-search {
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: inline;
}
.school-list {
  border-bottom: 10px;
  width: 100%;
  margin: 15px;
}
.button {
  background-color: #d35400;
  font-weight: bold;
  height: 50px;
}
hr {
  display: block;
  margin-top: 10px;
  margin-bottom: 3px;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border: solid #ffb380;
  border-width: 0.5px;
}
select {
  width: 450px;
  height: 50px;
}

</style>


