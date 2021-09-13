const acordando = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (funct) => {
    funct();
    console.log(funct());
};

doingThings(acordando);