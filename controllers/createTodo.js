const Todo = require("../models/Todo");


exports.createTodo = async(req,res) => {
    try{
         const{title,description} = req.body;
         const response= await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data: response,
                message: "Entry created successfully",
            }
        )
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Internal server errror",
            message: err.message,
        })
    }
}