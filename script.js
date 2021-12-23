function countSheeps(arrayOfSheep) {
    let present = arrayOfSheep.filter(sheep => sheep);
    return present.length;
}