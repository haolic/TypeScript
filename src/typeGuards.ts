interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

const getSmallPet = (): Bird | Fish => {
  return {
    fly: () => {
      console.log("fly");
    },
    swim: () => {
      console.log("swim");
    },
    layEggs: () => {
      console.log("layEggs");
    }
  };
};
const pet = getSmallPet();
pet.layEggs();
if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
} else {
  (<Bird>pet).fly();
}
export default {
  name: "类型保护",
  fn: () => `
  interface Bird {
    fly(): void;
    layEggs(): void;
  }
  
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
  
  const getSmallPet = (): Bird | Fish => {
    return {
      fly: () => {
        console.log("fly");
      },
      swim: () => {
        console.log("swim");
      },
      layEggs: () => {
        console.log("layEggs");
      }
    };
  };
  const pet = getSmallPet();
  pet.layEggs();
  if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
  } else {
    (<Bird>pet).fly();
  }
`
};
