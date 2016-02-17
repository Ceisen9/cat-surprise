var cat = {
  name: "Frisky 'Cornelius' McWhiskertons",
  pastimes: "chasing red dots, judging silly humans, and sitting on keyboards",
  start: function() {
    var catImage = document.getElementById("laser_cat");
    catImage.addEventListener("click", function() {
      alert("My name is " + this.name + " and I like " + this.pastimes);
    }.bind(this));
  }
}

cat.start();
