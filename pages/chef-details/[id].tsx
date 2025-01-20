import { useRouter } from 'next/router';
import Image from 'next/image';
import {useState} from 'react'
import Provide from '../../components/chef/provide'
import ChefKitchen from '../../components/chef/chefKitchen'
import ChefRecipe from "components/chef/chefReciepe";
import chef13 from 'components/ourChef/chef13.jpeg'
import chef14 from 'components/ourChef/chef14.jpeg'
import chef15 from 'components/ourChef/chef15.jpeg'
import chef16 from 'components/ourChef/chef16.jpeg'
import FacebookCircleFillIcon from "remixicon-react/FacebookCircleFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import Link from 'next/link'
import { useSettings } from "contexts/settings/settings.context";
const ChefDetail = () => {
   const router = useRouter();
   const { id } = router.query;
   const { settings } = useSettings();
   const [isExpanded1, setIsExpanded1] = useState(false);
   const [isExpanded2, setIsExpanded2] = useState(false);
   const toggleText2 = () => setIsExpanded2(!isExpanded2);
   const toggleText1 = () => setIsExpanded1(!isExpanded1);
const chefData = [
   { 
      id:'james',
   image: 'https://img.freepik.com/premium-photo/female-chef-with-tray-food-hand-isolated-white_70216-4216.jpg?w=360',
name: 'James Smith', 
   description: 'Dessert, Chicken, Mutton.',
   experience:'7 years',
   age:'22 years',
   phone:'0900838889',
   email:'email',
   topic:'About Chef',
   about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a story teller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just about preparing meals; it’s about crafting an experience that touches the senses and brings people together.',
role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

},
{
   id:"john",
   image:'https://img.freepik.com/premium-photo/man-restaurant-job-food-chef-adult-cook-uniform-cuisine-person-kitchen-male-professional-profession_163305-282146.jpg?w=740',
 name: 'John',
   description: 'Dessert, Chicken, Mutton.',
   experience:'7 years',
   age:'22 years',
   phone:'0900838889',
   email:'email',
   topic:'About Chef',
   about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.', 
   role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
   role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
   role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
     role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
   role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
   role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
   
  },
   {
   id:"ruby",
   image: 'https://img.freepik.com/free-photo/medium-shot-professional-chef-working_23-2151232222.jpg?t=st=1721514287~exp=1721517887~hmac=d4cda3e171b7c6176af9ae2a014dbe1925613968f0461d3ed4c48bca90906894&w=360',
 name: 'Ruby', 
   description: 'Dessert, Chicken, Mutton.',
   experience:'7 years',
   age:'22 years',
   phone:'0900838889',
   email:'email',
   topic:'About Chef',
   about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
   role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
   role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
   role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
     role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
   role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
   role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
   
  },

{
      id:"stephaine",
      image:'https://img.freepik.com/premium-photo/playful-culinary-master-confident-young-african-chef-white-uniform-throwing-pepper_425904-20618.jpg?ga=GA1.1.19934630005.1719432824&semt=ais_use',
   name: 'Stephaine', 
   description: 'Dessert, Chicken, Mutton.',
   experience:'7 years',
 age:'22 years',
   phone:'0900838889',
   email:'email',
   topic:'About Chef',
   about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
   role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
   role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
},

     { id:"smith",
      image:'https://winsfolio.net/html/foodio/assets/img/chef-1.png',
 name: 'Smith', 
  description: 'Dessert, Chicken, Mutton.',
  experience:'7 years',
  age:'22 years',
  phone:'0900838889',
  email:'email',
  topic:'About Chef',
  about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
  role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
  role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

},
  {
   id:"walters",
   image:'https://img.freepik.com/premium-photo/portrait-smiling-head-chef-presenting-salad_107420-37710.jpg?ga=GA1.1.19934630005.1719432824&semt=ais_user',
name: 'Walters', 
  description: 'Dessert, Chicken, Mutton.',
  experience:'7 years',
  age:'22 years',
  phone:'0900838889',
  email:'email',
  topic:'About Chef',
  about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just about preparing meals; it’s about crafting an experience that touches the senses and brings people together.',
  role:'A Chefs Journey Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
  role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
  role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
    role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
  role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
  role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
  
},
  { 
   image:'https://winsfolio.net/html/foodio/assets/img/chef-2.png',
 name: 'Chef G', 
    description: 'Dessert, Chicken, Mutton.',
     experience:'7 years',
     age:'22 years',
     phone:'0900838889',
     email:'email',
     topic:'About Chef',
     about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
     role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
     role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
     role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
       role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
     role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
     role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
     
    },
  {
      image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef1.png", 
      id: "pearl", 
   name: "Pearl R. Gaffney", 
      experience:'7 years',
      age:'22 years',
      phone:'0900838889',
      email:'email',
      topic:'About Chef',
      about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
   role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
   role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

  }, 
   {

       image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef2.png",
      id: "kelvin",
    name: " 1 am Kevin Widagdo", 
      description: 'Dessert, Chicken, Mutton.',
     experience:'7 years',
      age:'22 years',
      phone:'0900838889',
      email:'email',
      topic:'About Chef',
   about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
   role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
   role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
   role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
     role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
   role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
   role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
   
  },
   
    { 
      image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef4.png",
      id: "henny",
      description: 'Dessert, Chicken, Mutton.',
  name: "Henny Calvin", 
     experience:'7 years',
      age:'22 years',
      phone:'0900838889',
      email:'email',
      topic:'About Chef',
      about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
      role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
      role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
      role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
        role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
      role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
      role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
      
    },
      {
      image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef5.png", 
      id: "robert",
   name: "Robert Lucas", 
     description: 'Dessert, Chicken, Mutton.',
     experience:'7 years',
      age:'22 years',
      phone:'0900838889',
      email:'email',
      topic:'About Chef',
      about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
    role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
   
   },
    
     {
       image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef8.png",
       id: "mike",
   name: "Mike Washoski", 
     description: 'Dessert, Chicken, Mutton.',
     experience:'7 years',
      age:'22 years',
      phone:'0900838889',
      email:'email',
      topic:'About Chef',
      about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.',
    role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
    role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

  },
{

      image: "https://webstrot.com/html/lunchbox/lunchbox/images/chef11.png", 
      id: "fran",
      description: 'Dessert, Chicken, Mutton.',
   name: "Fran Rushing", 
     experience:'7 years',
      age:'22 years',
      phone:'0900838889',
      email:'email',
      topic:'About Chef',
      about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.', 
   role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
   role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
   role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
     role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
   role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
   role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',
   
  }, 
 { 
    image: chef13, 
    id: "jasmine",
    description: 'Dessert, Chicken, Mutton.',
 name: "Jasmine", 
   experience:'7 years',
    age:'22 years',
    phone:'0900838889',
    email:'email',
    topic:'About Chef',
    about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.', 
 role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
 role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

},
 {

  image: chef14, 
  id: "sara",
 name: "Sara", 
 description: 'Dessert, Chicken, Mutton.',
 experience:'7 years',
  age:'22 years',
  phone:'0900838889',
  email:'email',
  topic:'About Chef',
  about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just aboutpreparing meals; it’s about crafting an experience that touches the senses and brings people together.', 
role1:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

},
{
  image: chef15, 
  id: "faith",
 name: "Faith", 
 experience:'7 years',
 description: 'Dessert, Chicken, Mutton.',
  age:'22 years',
  phone:'0900838889',
  email:'email',
  topic:'About Chef',
  about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just about preparing meals; it’s about crafting an experience that touches the senses and brings people together.', 
role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

},
{
  image: chef16, 
  id: "gloria",
  description: 'Dessert, Chicken, Mutton.',
 name: "Gloria", 
 experience:'7 years',
  age:'22 years',
  phone:'0900838889',
  email:'email',
  topic:'About Chef',
  about:'A chef is more than just a professional cook—he or she is an artist, a creator, and a storyteller through the medium of food. The role of a chef is as dynamic as it is rewarding, requiring a unique combination of skill, passion, creativity, and discipline. A chef’s work is not just about preparing meals; it’s about crafting an experience that touches the senses and brings people together.', 
role:'A Chefs Journey: Becoming a chef is not an easy path. It takes years of training, both formal and practical, to master the various techniques, flavors, and presentations that distinguish great cooking. Many chefs start their careers by working in kitchens at entry-level positions, learning the ropes from mentors who pass down their wisdom and knowledge. Whether attending culinary school or apprenticing under a seasoned professional, aspiring chefs build a foundation in the kitchen that eventually leads to mastery.',
role2:'The Craft of Cooking: A chef’s kitchen is their canvas, and every dish is a brushstroke. The ingredients are their tools—each one carefully selected, measured, and combined with purpose.A good chef knows how to balance flavors, textures, and presentation to create a harmonious experience. They experiment with new techniques, challenge the boundaries of cuisine, and stay up-to-date with trends, while always honoring the traditions that make food so comforting and timeless',
role3:"Creativity and Innovation: What sets a chef apart is their creativity. While following recipes is a part of the job, true chefs are innovators. They see food as an opportunity to play, to combine the familiar with the unexpected, and to make every meal a memorable experience. Whether its adding an unexpected twist to a classic dish or experimenting with ingredients from different culinary traditions, a chef’s creative spirit is what excites the palate and delight the senses",
  role4:"The Chef as Leader: Being a chef isn’t just about cooking—it’s about leadership. In the high-pressure environment of a busy kitchen, a chef must manage not only the food but also the team. They are responsible for ensuring the quality of every dish that leaves the kitchen, managing inventory, maintaining health and safety standards, and keeping the kitchen running efficiently.",
role5:'The Heart and Soul of a Kitchen: A kitchen can be chaotic—there are orders to fill, deadlines to meet, and the constant hum of activity. Yet, it is also where the magic happens. A chef is the heart and soul of this environment, balancing creativity with discipline, and passion with precision. The joy they find in transforming simple ingredients into culinary masterpieces is evident in the care and attention they give to every detail.',
role6:'The Impact of a Chef: A great meal has the power to bring people together, to spark onversations, and to create lasting memories. Chefs are not just feeding people; they ar nourishing them, offering a sense of comfort, joy, and connection. Whether through a fine dining experience, a casual family meal, or an innovative pop-up restaurant, chefs have the ability toshape the way we think about food and the way we experience the world around us.',

},
]
 ;
if (!id) {
   return <p>Loading...</p>; 
 }
 const chef = chefData.find((chef) => chef.id === id);
 if (!chef) {
   return (
     <>
       <h1>Chef Not Found</h1>
       {/* <p>The chef with ID {id}t exist. Please check the URL.</p> */}
     </>
   );
 }

return (
<>
<section className="chef-intro">
  <Image src='https://askbootstrap.com/preview/osahan-eat/img/mall-dedicated-banner.png' alt="" width={700} height={500}/>
<div className="chef-details">
   <div className='chefs-image'>
    <Image src={chef.image} alt="" width={350} height={450} /> 
   <div className="year-experience">
                  <h3>14 Years Experience</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"/></svg></div> </div>
   <div className="chef-content">
   <h1 className="tests">I’m {chef.name}</h1>
  <ul >
    <li ><h6>Expertise:</h6><span>{chef.description}</span></li>
   <li><h6>Experience:</h6> <span>{chef.experience}</span></li>
   <li><h6>Age:</h6><span> {chef.age}</span></li>
   <li><h6>Phone:</h6> <span>{chef.phone}</span></li>
   <li><h6>Email:</h6><span> {chef.email}</span></li>
   </ul>
   <div className="social">
    <div>
          <a href={settings?.facebook_url} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
          </a></div>
          <div>
          <a href={settings?.twitter_url} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#1d9bf0" rx="60"/><path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"/></g></svg>
          </a></div>
          <div>
          <a href={settings?.instagram_url} target="_blank" rel="noopener noreferrer">
         <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg>
          </a></div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0a66c2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>
       </div>
        </div>
      <Link href="/type-of-service"> <button className="book">Book my services</button></Link>
   </div>
</div>
<div className="chef-about">
   <h1 className="tests">{chef.topic}</h1>
   <p className="tests">{chef.about}</p>
   <p className="tests">{chef.role}</p>
   <p className="tests">{chef.role2}</p>
   <p className="tests">{chef.role3}</p>
   {isExpanded1 ? (
     <>
     <p className="tests">{chef.role4}</p>
     <p className="tests">{chef.role5}</p>
     <p className="tests">{chef.role6}</p>
   <span onClick={toggleText1} style={{ color: "#00ff00", cursor: "pointer" }}>
    See Less
  </span>
</>
) : (
<span onClick={toggleText1} style={{ color: "#00ff00", cursor: "pointer" }}>
  See More.....
</span>
)}  
   </div>
</section>
<ChefRecipe/>
<Provide/>
<ChefKitchen/>

</>
);
};

export default ChefDetail;
