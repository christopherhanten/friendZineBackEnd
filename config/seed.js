db.Comment.remove({}, (err, comments) => {
  db.Comment.create(Comment, (err, comments) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    console.log("all comments " + comments);
    console.log("created " + comments.length + " comments");
    process.exit();
  });









//Jacked this code from Lily.
