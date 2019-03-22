export default class Astro {
  constructor(year, kg){
    this.year = year;
  }

  mercury(){
    const mercuryYear = 0.24;
    return (this.year*mercuryYear);
  }

  venus(){
    return (this.year*0.62);
  }

  mars(){
    return (this.year*1.88);
  }

  jupiter(){
    return (this.year*11.86);
  }

  lifeExpectancyMercury(){
    return (24 - this.year*0.24);
  }

  lifeExpectancyVenus(){
    return (62 - this.year*0.62);
  }

  lifeExpectancyMars(){
    return (188 - this.year*1.88);
  }

  lifeExpectancyJupiter(){
    return (1186 - this.year*11.86);
  }

}
