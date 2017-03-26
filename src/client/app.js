/* eslint-disable no-console */
/** Main Client Module Loader for basic SPA
/* This module will load the Config and build page routes*/


//import in styles
//import '../'
import './public/styles/styles.less';
//import in images
import './public/images/film.png';
import './public/images/robot-waving.gif';

//Load Index view module with sample data
 let vm = {title:'Movies',author:'Chad Martin'};

 let titleHTMl = document.getElementById("headername");

 titleHTMl.innerHTML = vm.title ;
