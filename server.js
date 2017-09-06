var express = require('express'),
    app     = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));



app.listen(PORT, function(){
  console.log('React server is up');
})
