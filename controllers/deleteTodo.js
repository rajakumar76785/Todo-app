const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) => {
    try{
           const id= req.params.id;
            await Todo.findByIdAndDelete(id);
           res.status(200).
           json({
            success:true,
            message: "deleted successfully",
           });
    }
    catch(err){
        console.error(err);
        res.status(500).
        json({
            success: false,
            error: err.message,
            message: "server error",
        })
    }
}