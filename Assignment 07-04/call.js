 let freind1 ={
     name:"Amar",
     city:"Goa",
     work:function(skill){
         console.log(`${this.name} is a ${skill}`)}
 }

 let freind2={
     name:"Akhbar",
     city:"Mumbai",
     skill:"Chef"
 }

 let freind3={
     name:"Anthony",
     city:"Kashmir",
     skill:"Magician"
 }
  function SkillBorrow(age,s){
      this.age=age;
      this.state=s
  }

 //console.log(SkillBorrow.call(freind1,24,"u.p"))
 var x = new SkillBorrow(25,"m.p")
 console.log(x)
//   SkillBorrow.call(freind2,"Singer")
//   SkillBorrow.call(freind3,"Chef")




//   freind1.work("Magician")
//   freind1.work.call(freind2,"singer")
//   freind1.work.call(freind3,"Chef")
