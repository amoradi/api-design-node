module.exports = () => {
  return (err, req, res, next) => {
    console.log("Error heyy");
    res.status(500).send();
  }
}