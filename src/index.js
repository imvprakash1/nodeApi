const express=require('express');
const port=3300;
require('./db/mongoDatabase');
const app = express();
const userRouter=require('./routers/user')

app.use(express.json());

require('./models/personal')

// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     res.send('working')
// })

app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port '+port)
})