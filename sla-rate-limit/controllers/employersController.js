export function getEmployees(_, res) {
    res.send([{
        "genre": "Hombres", 
        "live_with": 1, 
        "territory": "Almería", 
        "employee": 5, 
        "value": 6850, 
        "year": 2020
    }])
}

export function findByvalue(_, res) {
    res.send({
        "genre": "Hombres", 
        "live_with": 1, 
        "territory": "Almería", 
        "employee": 5, 
        "value": 6850, 
        "year": 2020
    })
}

