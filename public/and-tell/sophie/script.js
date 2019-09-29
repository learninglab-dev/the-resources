var all_the_costumes = [
];

function Submit() {
  console.log("hi");
  var ul = document.getElementById("list");
  var li = document.createElement("p");
  var costume = document.getElementById("form").elements["costume"].value;
  all_the_costumes.splice(all_the_costumes.length, 0, costume);
  if (all_the_costumes.length == 1) {
    for (i = 0; i < all_the_costumes.length; i++) {
        console.log(i);
        li.appendChild(document.createTextNode(all_the_costumes[i]));
        ul.appendChild(li);
    };
  }
  else {
    li.appendChild(document.createTextNode(all_the_costumes[all_the_costumes.length - 1]));
    ul.appendChild(li);
  }
};
console.log(all_the_costumes);
