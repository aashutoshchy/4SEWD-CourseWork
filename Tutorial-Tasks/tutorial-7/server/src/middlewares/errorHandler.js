const errorHandler = (err, req, res, next) => {
  console.error("Error occured: ", err.stack);
  return res.status(500).json({
    messsage: "Internal Server Error",
  });
};

export default errorHandler;
