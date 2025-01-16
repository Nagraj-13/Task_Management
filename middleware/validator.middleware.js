export const validateRequest = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false }); // Validate request body
      if (error) {
        const errorDetails = error.details.map((detail) => detail.message);
        return res.status(400).json({
          message: "Validation failed",
          errors: errorDetails,
        });
      }
      next(); 
    };
  };

  
