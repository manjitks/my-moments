 get /auth/users/me
{"id":"1ccb1e59-deeb-4f86-9b70-2253f1132b35","username":"manjit3","name":"manjit3","profilePicture":null}


 get /graph/associations/1ccb1e59-deeb-4f86-9b70-2253f1132b35/degree
 {"outDegree":0,"inDegree":0}

 post http://localhost:8762/auth/signin
 {username: "manjit3", password: "qwe11rtyuiop"}
 {"accessToken":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5qaXQzIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTY2MDYzNTcxNSwiZXhwIjoxNjYwNzIyMTE1fQ.TxqYligKKSSH-aBx6sx8qyzuVN4QjUGR6wwWsYsblo2bZth0QD8O5DFyCCIIKBLOj7gP23kE3LZsAYx4dyM4FQ","tokenType":"Bearer","user":{"id":"1ccb1e59-deeb-4f86-9b70-2253f1132b35","username":"manjit3","email":"","createdAt":null,"updatedAt":"2022-08-15T12:29:35.266Z","active":true,"userProfile":{"displayName":"manjit3","profilePictureUrl":null,"birthday":null,"addresses":null},"roles":[{"name":"USER"}]}}


 
