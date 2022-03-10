function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var filteredBirds = birds.filter(bird => !geese.includes(bird))
    console.log(filteredBirds);
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

  gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
  gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])