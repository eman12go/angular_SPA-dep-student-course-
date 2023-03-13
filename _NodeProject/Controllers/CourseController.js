


const Courses=require("../Models/CourseSchema");
exports.getAllCourse=(request,response)=>{
    Courses.find({})//.populate({path:"department"})
              .then(data=>{
                response.status(200).json(data)

              })
              .catch(error=>{
                  next(error);
              })
}

exports.getCourse=(request,response,next)=>{

    Courses.findOne({_id:request.params.id})//.populate({path:"department"})
              .then(data=>{
                  if(data==null) next(new Error("Course id not Found"))

                    response.status(200).json(data)
              })
              .catch(error=>{
                  next(error);
              })
}
exports.createCourses=(request,response,next)=>{ 
    console.log("inside");
    // console.log(request.file)
      let object=new  Courses({
          _id:request.body._id,
          name: request.body.name,
         rate:request.body.rate,
         duration:request.body.duration
        //   image:"http://localhost:8080/images/"+request.file.filename
      })
      object.save()
            .then(data=>{
                response.status(201).json({message:"added",data})

            })
            .catch(error=>next(error))
}

exports.updateCourses=(request,response,next)=>{
    Courses.findByIdAndUpdate(request.params.id,{
            $set:{
                name: request.body.name,
                rate:request.body.rate,
                duration:request.body.duration
            }
        })
                  .then(data=>{
                      if(data==null) throw new Error("Course Is not Found!")
                    response.status(200).json({message:"updated",data})

                  })
                  .catch(error=>next(error))
}

exports.deleteCourse=(request,response,next)=>{
        Courses.findByIdAndDelete(request.params.id)
                  .then(data=>{
                      if(data==null) throw new Error("Course Is not Found!")
                      response.status(200).json({message:"deleted"})
                    
                  })
                  .catch(error=>next(error))
}




