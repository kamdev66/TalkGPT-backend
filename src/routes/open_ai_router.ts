import { Router,Request,Response } from "express";
import { generateOpenAIResponse } from "../controllers/generate_open_ai_controller";

const openAIRouter=Router();

openAIRouter.post("/",generateOpenAIResponse)

export default openAIRouter;