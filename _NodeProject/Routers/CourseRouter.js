const express=require("express");
const {body,query,param}=require("express-validator")
const router=express.Router();

const controller=require("../Controllers/CourseController")
 router.get("",controller.getAllCourse);
 router.get("/:id",controller.getCourse);

 router.post("",[
     body("_id").isInt().withMessage("Course ID should be Integer"),
     body("rate").isInt().withMessage("Course rate should be Integer"),
     body("duration").isInt().withMessage("Course duration should be Integer"),
     body("name").isAlpha().withMessage("Course Name should be String")
     .isLength({max:10}).withMessage("Course name length <10")
 ],controller.createCourses);
 
 router.put("/:id",controller.updateCourses);
 
 router.delete("/:id",controller.deleteCourse);

 module.exports=router;