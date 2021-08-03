let singer = {
    name: "Filipe",
    lastName: "Ret",
    nickname: "Ret",
    age: 33,
    bestAlbuns: ["Audaz", "Revel", "Vivaz"],
    moreInfo: {
        city: "Rio de Janeiro Neguin",
        state: "Não tem Jeito",
    }
};

console.log("O cantor " + singer.name + " " + singer.lastName + " é brabo pra carai.");

console.log("O cantor " + singer["name"] + " " + singer["lastName"] + " é brabo pra carai.");

singer["fullName"] = singer.name + " " + singer.lastName;

console.table(singer);

console.log("O cantor " + singer.fullName + " nasceu no estado de " + singer.moreInfo.city + ".");