import { body, param } from "express-validator";

// Validation rules using express validator
export const createTodoValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 100 })
    .withMessage("Title cannot exceed 100 characters."),

  body("deadline")
    .trim()
    .isISO8601()
    .withMessage("Deadline must be a valid date."),

  body("isUrgent").isBoolean().withMessage("isUrgent must be true or false."),
];

export const idParamsValidator = [
  param("id").isNumeric().withMessage("Id must be a numeric value").toInt(),
];
