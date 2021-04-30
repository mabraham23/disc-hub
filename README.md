# Disc Golf Vue App

URL for DiscHub
https://disc-hub.herokuapp.com

Disc-Hub is a web app built using Vue.js, Node.js, and MongoDB that is suited for disc-golf enthusiasts. It features a 'disc' page where users can add, edit and delete discs from their bag. Disc statistics include disc name, brand, type, weight, speed, glide, turn, fade and color. It also featutures a tournament page where users can keep track of an 18 hole tournament with each other by posting their scores for corresponding holes. This page is enabled using websockets. I hope you love disc-golf and my web-app as much as I do!


![image](https://user-images.githubusercontent.com/43868707/116646430-44f1f300-a935-11eb-9e8e-b54ff9d74804.png)


### Disc Resource

| Resource Attribute | Type     | Example  |
| ------------------ | -------- | -------- |
| name               | String   | Aztec    |
| brand              | String   | Infinite |
| type               | String   | Fairway Driver |
| weight             | Int      | 170      |
| speed              | Int      | 12       |
| glide              | Int      | 5        |
| turn               | Int      | 1        |
| fade               | Int      | 2        |
| color              | String   | Yellow   |

### Disc Model
| Name   | Type     | Restrictions |
| ------ | -------- | ------------ |
| name   | String   | 30 Characters or less |
| brand  | String   | Must be one of the following: 'Innova', 'Discraft', 'Streamline', 'Infinite', 'Dynamic Discs', 'Latitude 64', 'Westside Discs' |
| type   | String   | Must be one of the following: 'Distance Driver', 'Fairway Driver', 'Midrange', 'Putter' |
| weight | Int      | 0 > and < 230 |
| speed  | Int      | 0 > and < 14 |
| glide  | Int      | 0 > and < 7 |
| turn   | Int      | -5 > and < 1
| fade   | Int      | 0 > and < 5
| color  | String   | Must be one of the following: '#FF0000', '#AA0000', '#550000','#FFFF00', '#AAAA00', '#555500', '#00FF00', '#00AA00', '#005500', '#00FFFF', '#00AAAA', '#005555', '#0000FF', '#0000AA', '#000055' |


### Rest Endpoints

| HTTP Method | Path   |
| ----------- | ------ |
| GET         | /discs |
| GET         | /discs/:id |
| POST        | /discs |
| PUT         | /discs/:id |
| DELETE      | /discs/:id |
