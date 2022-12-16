## GraphQL with NestJS

Simple example with entity mapping, using the code-first approach. Data is just stored in a map.
### Queries
```
query GetAllCities {
  cities {
    name
    country
  }
}

query GetOneCity {
  city(name: "Seattle"){
    name
    country
    population
  }
}
```

### Mutations
```
mutation CreateNewCity($createCityInput:CreateCityInput!){
  createCity(createCityInput:$createCityInput){
    name
    country
    population
  }
}

mutation UpdateCity($name:String!, $updateCityInput:UpdateCityInput!){
  updateCity(name: $name, updateCityInput:$updateCityInput){
    name
    country
    population
  }
}
```

### Multiple mutations in one request
```
mutation AddCitizenToCity(
  $updateCitizenInput: UpdateCitizenInput!
  $addCitizenInput: AddCitizenInput!
) {
  updateCitizen(updateCitizenInput: $updateCitizenInput){
    firstName,
    occupation
  }
  addCitzenToCity(addCitizenInput: $addCitizenInput) {
    name
    citizens {
      lastName
      firstName
      occupation
      id
    }
  }
}
```