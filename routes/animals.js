
const express = require("express");
const router = express.Router();
const Animal = require("../models/animals.model");

router.get("/animals", async function(request, response, next){
    try {
        let result = await Animal.find();
        response.json(result)
    } catch (error) {
        next(error)
    }
})

//get single animal by ID
router.get("/animal/:animalId", async function(request, response, next){
    try {
        let result = await Animal.findById(request.params.animalId)

        // return 404 if no result is found
        if(!result){
            response.status(404)
            response.end()
            return
        }
        response.status(200)
        response.json(result)
        
    } catch (error) {
        next(error)
    }
})
router.post("/animals", async function(request, response, next){
try {
    let animal = new Animal({
        type: request.fields.type,
        breed: request.fields.breed,
        name: request.fields.name,
        age: request.fields.age,
        sex: request.fields.sex,
        colors: request.fields.colors
    })
    animal.save();
    response.status(201);
    response.json(animal)

} catch (error) {
    next(error)
}
   
})
router.patch("/animals", function(request, response, next){

    response.send("patch request animals")
})

module.exports = router;