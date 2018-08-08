<template>
  <div id="home">
    <b-container class="state-search">
       <h1>College Finder - Your future starts here.</h1>
       <p>Trying to decide on what college or university to attend in the fall, but you don't even know where to start? <br>
       Use this quick search tool to bring up a list of schools in the state/territory of your choice</p> 
            <b-form v-on:submit.prevent="findSchools"> 
              <select v-model="selected">
                <option v-for="state in states" v-bind:value="state.abbreviation">
                  {{ state.name }} 
                </option>
              </select>
              <input class="button" type="submit"  v-bind:to="{ name: 'CollegeList' }"value="Get My List!">
            <!-- <router-link to="/CollegeList" tag="button">Get My List!</router-link> -->
            <!-- <p><router-link v-bind:to="{ name: 'CollegeList', params: { schoolId: school.id } }" tag="button">Get My List!</router-link></p> -->
            </b-form> 
    </b-container> 
          <b-container class="school-results"> 
              <div class="school-list">
                  <ul class="schools" v-if="schools && schools.length > 0">
                    <li v-for="item in schools">
                      <!-- <spinner v-if="showLoading"></spinner> -->
                        <h3>{{ item["school.name"]}} | {{ item["school.city"]}} | <a target="_blank" v-bind:href="'http://' + item['school.school_url']">{{item["school.school_url"]}}</a></h3>
                    </li>
                </ul>
              </div>    
    </b-container> 
  </div>  
</template>

<script>
import axios from "axios";
// import BounceLoader from "@/components/BounceLoader";

export default {
  name: "Home",
  // components: {
  //   "spinner": BounceLoader
  // },

  data() {
    return {
      selectedState: "",
      showLoading: false,
      schools: [],
      selected: "",
      states: [
        {
          name: "Alabama",
          abbreviation: "AL"
        },
        {
          name: "Alabama",
          abbreviation: "AL"
        },
        {
          name: "Alaska",
          abbreviation: "AK"
        },
        {
          name: "American Samoa",
          abbreviation: "AS"
        },
        {
          name: "Arizona",
          abbreviation: "AZ"
        },
        {
          name: "Arkansas",
          abbreviation: "AR"
        },
        {
          name: "California",
          abbreviation: "CA"
        },
        {
          name: "Colorado",
          abbreviation: "CO"
        },
        {
          name: "Connecticut",
          abbreviation: "CT"
        },
        {
          name: "Delaware",
          abbreviation: "DE"
        },
        {
          name: "District Of Columbia",
          abbreviation: "DC"
        },
        {
          name: "Federated States Of Micronesia",
          abbreviation: "FM"
        },
        {
          name: "Florida",
          abbreviation: "FL"
        },
        {
          name: "Georgia",
          abbreviation: "GA"
        },
        {
          name: "Guam",
          abbreviation: "GU"
        },
        {
          name: "Hawaii",
          abbreviation: "HI"
        },
        {
          name: "Idaho",
          abbreviation: "ID"
        },
        {
          name: "Illinois",
          abbreviation: "IL"
        },
        {
          name: "Indiana",
          abbreviation: "IN"
        },
        {
          name: "Iowa",
          abbreviation: "IA"
        },
        {
          name: "Kansas",
          abbreviation: "KS"
        },
        {
          name: "Kentucky",
          abbreviation: "KY"
        },
        {
          name: "Louisiana",
          abbreviation: "LA"
        },
        {
          name: "Maine",
          abbreviation: "ME"
        },
        {
          name: "Marshall Islands",
          abbreviation: "MH"
        },
        {
          name: "Maryland",
          abbreviation: "MD"
        },
        {
          name: "Massachusetts",
          abbreviation: "MA"
        },
        {
          name: "Michigan",
          abbreviation: "MI"
        },
        {
          name: "Minnesota",
          abbreviation: "MN"
        },
        {
          name: "Mississippi",
          abbreviation: "MS"
        },
        {
          name: "Missouri",
          abbreviation: "MO"
        },
        {
          name: "Montana",
          abbreviation: "MT"
        },
        {
          name: "Nebraska",
          abbreviation: "NE"
        },
        {
          name: "Nevada",
          abbreviation: "NV"
        },
        {
          name: "New Hampshire",
          abbreviation: "NH"
        },
        {
          name: "New Jersey",
          abbreviation: "NJ"
        },
        {
          name: "New Mexico",
          abbreviation: "NM"
        },
        {
          name: "New York",
          abbreviation: "NY"
        },
        {
          name: "North Carolina",
          abbreviation: "NC"
        },
        {
          name: "North Dakota",
          abbreviation: "ND"
        },
        {
          name: "Northern Mariana Islands",
          abbreviation: "MP"
        },
        {
          name: "Ohio",
          abbreviation: "OH"
        },
        {
          name: "Oklahoma",
          abbreviation: "OK"
        },
        {
          name: "Oregon",
          abbreviation: "OR"
        },
        {
          name: "Palau",
          abbreviation: "PW"
        },
        {
          name: "Pennsylvania",
          abbreviation: "PA"
        },
        {
          name: "Puerto Rico",
          abbreviation: "PR"
        },
        {
          name: "Rhode Island",
          abbreviation: "RI"
        },
        {
          name: "South Carolina",
          abbreviation: "SC"
        },
        {
          name: "South Dakota",
          abbreviation: "SD"
        },
        {
          name: "Tennessee",
          abbreviation: "TN"
        },
        {
          name: "Texas",
          abbreviation: "TX"
        },
        {
          name: "Utah",
          abbreviation: "UT"
        },
        {
          name: "Vermont",
          abbreviation: "VT"
        },
        {
          name: "Virgin Islands",
          abbreviation: "VI"
        },
        {
          name: "Virginia",
          abbreviation: "VA"
        },
        {
          name: "Washington",
          abbreviation: "WA"
        },
        {
          name: "West Virginia",
          abbreviation: "WV"
        },
        {
          name: "Wisconsin",
          abbreviation: "WI"
        },
        {
          name: "Wyoming",
          abbreviation: "WY"
        }
      ]
    };
  },



  // Pull information from API
  methods: {
    findSchools: function() {
      axios.get('https://api.data.gov/ed/collegescorecard/v1/schools.json', {
      params: {
        api_key: 'd9xeq99pO8xRBij92yBUzmSIPR1P6v4RDAyQN53X',
        fields: 'school.name,school.school_url,school.city',
        "school.state": this.selected

       }
      })
      .then(response => {
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
  padding: 0;
  list-style: none;
}

body,
html {
  height: 100%;
}

.school-results{
  margin-top: 25px;
}

</style>
