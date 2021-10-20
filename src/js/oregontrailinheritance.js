class Hunter extends Traveler {
    
    constructor(name) {
       super(name)
       this.food = 2

    }

    hunt() {

        super.hunt()
        this.food += 3
    }

    eat() {
        
        if (this.food >= 2){
            this.food -= 2
            this.isHealthy = true

        } else {
            this.food = 0
            this.isHealthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits) {

        traveler.food += numOfFoodUnits

        this.food -= numOfFoodUnits
    }
}

class Doctor extends Traveler {
    constructor(name) {
       super(name)
    }

    heal(traveler) {
    
        traveler.isHealthy = true
    }
}

//testes está no arquivo "teste.js"