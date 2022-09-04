# Github Search Application



## How to Use Github Search REST Api

### steps

&rarr; first create a pat(personal access token) from github

&rarr; then use them with your username treat token as your password

&rarr; url to get user details

```js
    https://api.github.com/search/users?q=ms0483

    //here ms0483 is the username query

```

```js
//eg how to use cred with axios for calling

axios.get('https://api.github.com/search/users?q=ms0483',{
  auth:{
    username:'username',
    password:'pat'
  }
}).then((response)=>{
  console.log(response);
}).catch((err)=>{
  console.log(err);
})

```


