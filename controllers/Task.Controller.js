import Task from '../models/Task.Model.js'

export const createTaskController = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const task = await Task.create({ title, description, status });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message:error.message });
    }
}


export const getAllTasksController = async (req, res) => {
  try {
    const { page, limit, status, search } = req.query;

    const query = {};
    if (status) query.status = status;
    if (search) query.title = { $regex: `.*${search.trim()}.*`, $options: "i" };

    console.log("Query:", query); 

    let tasks;
    if (page && limit) {
      const pageNumber = parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
      const limitNumber = parseInt(limit, 10) > 0 ? parseInt(limit, 10) : 10;

      tasks = await Task.find(query)
        .skip((pageNumber - 1) * limitNumber)
        .limit(limitNumber);

      const totalTasks = await Task.countDocuments(query);

      return res.status(200).json({
        success: true,
        message: "Tasks fetched successfully with pagination",
        data: {
          tasks,
          totalTasks,
          currentPage: pageNumber,
          totalPages: Math.ceil(totalTasks / limitNumber),
        },
      });
    }

    tasks = await Task.find(query);
    console.log("Tasks:", tasks); 

    res.status(200).json({
      success: true,
      message: "All tasks fetched successfully",
      data: {
        tasks,
        totalTasks: tasks.length,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
    console.error(error);
  }
};


export const getTaskByIdController = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', message:error.message });
      console.log(error)
    }
};


export const updateTaskController = async(req,res)=>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json(task);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message:error.message });
      }
}

export const deleteTaskController = async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', message:error.message });
    }
};

