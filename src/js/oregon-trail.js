
class Traveler {

    constructor(name) {
        this.name = name;
        this.food = 1; 
        this.isHealthy = true;
    }

    get foodTraveler(){
        return this.food
    }

    set foodTraveler(foodTraveler){
        this.food = foodTraveler
    }

    get healthTraveler(){
        return this.isHealthy
    }

    set healthTraveler(healthTraveler){
        this.isHealthy = healthTraveler
    }

    hunt() {
        this.food += 2
    }

    eat() {

        if (this.food > 0){

            this.food -= 1
            this.isHealthy = true

        } else {
            this.isHealthy = false
        }
    }
}


class Wagon {

    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {

        return this.capacity - this.passengers.length
    }

    join(traveler) {

        if (this.getAvailableSeatCount() > 0){
            this.passengers.push(traveler)
        }
        
    }

    shouldQuarantine() {

        for (let i = 0; i < this.passengers.length; i++){

            if (this.passengers[i].isHealthy === false){

                return true

            }

        }

        return false
        
    }

    totalFood() {

        let inventory = 0

        for (let i = 0; i < this.passengers.length; i++){

            inventory += this.passengers[i].food

        }

        return inventory
        
    }
}

//testes está no arquivo "teste.js"