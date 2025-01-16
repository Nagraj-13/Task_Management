export const responseHandler = (req, res, next) => {
    res.success = (data, message = "Success") => {
      res.status(200).json({ success: true, message, data });
    };
  
    res.error = (statusCode, message = "Error") => {
      res.status(statusCode).json({ success: false, message });
    };
  
    next();
  };