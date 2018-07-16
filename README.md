# http-service
Simple http service


## Usage

GET:

```javascript
const http = new HttpService();

// without params
http.get('/api/users')
	.then(res => console.log(res))
	.catch(err => console.log(err));
  
// with params
let params = {
  id  = 1
};

http.get('/api/users', params)
	.then(res => console.log(res))
	.catch(err => console.log(err));  
 
```

  
POST:
```javascript
const http = new HttpService();


let params = {
  id: 1
};

http.post('/api/users', params)
	.then(res => console.log(res))
	.catch(err => console.log(err));
```


**under construction**
