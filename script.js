var names = ["Sreekar", "Jaskaran", "Jayanth", "Jeswanth", "Madhan", "Pranay", "Lokesh", "Pramod", "Vinith", "Jayaprakash"];
  for (var i=0; i<names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
   if (firstLetter === 'j') {
      console.log("Goodbye "+names[i]);
    }
    else
    {
      console.log("Hello "+names[i]);
    }
 }

   