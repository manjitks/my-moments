import { createServer } from "miragejs"

createServer({
    
  routes() {
    this.urlPrefix = 'http://localhost:8762/'
    this.get("/graph/associations/1ccb1e59-deeb-4f86-9b70-2253f1132b35/degree",()=> degree)
    this.get("/auth/users/me",() => userMe )
    this.get("/auth/users",() => test() )
    this.post("/auth/signin", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)

return singInResp;
      })
  },
})
const userMe={"id":"1ccb1e59-deeb-4f86-9b70-2253f1132b35","username":"manjit3","name":"manjit3","profilePicture":null}
const degree= {"outDegree":5,"inDegree":0}


const singInResp =  ({"accessToken":"eyJhbGciOiJIUzUxMiJ9","tokenType":"Bearer","user":{"id":"1ccb1e59-deeb-4f86-9b70-2253f1132b35","username":"manjit3","email":"","createdAt":null,"updatedAt":"2022-08-15T12:29:35.266Z","active":true,"userProfile":{"displayName":"manjit3","profilePictureUrl":null,"birthday":null,"addresses":null},"roles":[{"name":"USER"}]}});


 const  test = () => [
    { id: "1", name: "Luke" },
    { id: "2", name: "Leia" },
    { id: "3", name: "Anakin" },
  ]